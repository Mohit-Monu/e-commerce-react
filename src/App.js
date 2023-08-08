import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductProvider from "./store/ProductProvider";
function App() {
  return (
    <ProductProvider>
      <Header></Header>
      <Display></Display>
      <ShowProducts></ShowProducts>
    </ProductProvider>
  );
}

export default App;
