import { useContext } from "react";
import { ThemeContext } from "../../store/context";
import Product from "../product/Product";
import { products, productsDescription, productsTitle } from "../../utils/data";
import "./productList.css";

const ProductList = () => {
    const theme = useContext(ThemeContext);
    const isDarkMode = theme.state.isDarkMode;

    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">{productsTitle}</h1>
                <p className="pl-desc">{productsDescription}</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} src={item.src} isDarkMode={isDarkMode} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;