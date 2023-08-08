import ProductContext from "./Product-context"


function ProductProvider(props){
    const products=[
        {
          id:12345,
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          id:1234,
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          id:1245,
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          id:12,
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ]
    return(
        <ProductContext.Provider value={products} >
            {props.children}
        </ProductContext.Provider> 
    )
}
export default ProductProvider