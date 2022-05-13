import Product from "../product/Product";
import { products } from "../../utils/data";
import "./productList.css";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Lorem ipsum dolor sit amet
                    </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet. 
                    Et illo exercitationem ad saepe natus ea Quis culpa a amet tenetur ut aliquid totam quo excepturi sint quo aliquid tenetur. 
                    Et enim reprehenderit At fuga necessitatibus qui quia iure eum veritatis autem non cumque illo rem earum minima.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} src={item.src} isGif={item.isGif} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;