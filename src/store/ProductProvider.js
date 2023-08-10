import ProductContext from "./Product-context";
import React,{useCallback,useEffect,useState} from 'react'
function ProductProvider(props) {
  const [products, setProducts] = useState([]);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch('https://e-commerce-ed719-default-rtdb.firebaseio.com/products.json');
      const data = await response.json();
      const loadedmovies=[]
      for(const key in data ){
        const obj={
          id:key,
          imageUrl:data[key].imageUrl,
          title:data[key].title,
          price:data[key].price,
          refImg:data[key].refImg
        }
        loadedmovies.push(obj)
      }
      setProducts(loadedmovies)
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
