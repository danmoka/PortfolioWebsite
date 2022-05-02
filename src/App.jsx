import About from "./components/about/About";
import Contract from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contract />
    </div>
  );
};

export default App;