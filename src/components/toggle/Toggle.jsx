import { useContext } from "react";
import { ThemeContext } from "../../store/context";
import images from "../../utils/images";
import "./toggle.css";

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const isDarkMode = theme.state.isDarkMode;

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    };

    return (
        <div className="t">
            <img
                className="t-icon"
                src={images.sun}
                alt="" 
            />
            <img
                className="t-icon"
                src={images.moon}
                alt="" 
            />
            <div
                className={isDarkMode ? "t-button dark" : "t-button light"} 
                onClick={handleClick}>
            </div>
        </div>
    );
};

export default Toggle;