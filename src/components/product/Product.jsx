import "./product.css";

const Product = ({ src, isDarkMode }) => {
    return (
        <div className={isDarkMode ? "p dark" : "p light"}>
            <div className={isDarkMode ? "p-browser dark" : "p-browser light"}>
                <div className={isDarkMode ? "p-circle dark" : "p-circle light"}></div>
                <div className={isDarkMode ? "p-circle dark" : "p-circle light"}></div>
                <div className={isDarkMode ? "p-circle dark" : "p-circle light"}></div>
            </div>
            <a href={src} target="_blank" rel="noreferrer">
                <img src={src} alt="" className="p-img" />
            </a>
        </div>
    );
};

export default Product;