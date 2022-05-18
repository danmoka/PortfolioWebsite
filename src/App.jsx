import { useContext } from "react";
import { ThemeContext } from "./store/context";
import About from "./components/about/About";
import Contract from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import "./app.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.state.isDarkMode;

  return (
    <div className={ isDarkMode ? "a-dark" : "a-light" }>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contract />
      <Footer />
    </div>
  );
};

export default App;