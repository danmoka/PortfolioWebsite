import "./product.css";

const Product = ({ src }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={src} target="_blank" rel="noreferrer">
                <img src={src} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Product;