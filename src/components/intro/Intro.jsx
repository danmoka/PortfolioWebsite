import { useContext } from "react";
import { ThemeContext } from "../../store/context";
import images from "../../utils/images";
import "./intro.css";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const isDarkMode = theme.state.isDarkMode;

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Daniil Potemkin</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">Backend developer</div>
                            <div className="i-title-item">Cybersecurity specialist</div>
                            <div className="i-title-item">Traveler</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem ipsum dolor sit amet. 
                        Et illo exercitationem ad saepe natus ea Quis culpa a amet tenetur ut aliquid totam quo excepturi sint quo aliquid tenetur.
                    </p>
                </div>
                <img 
                    className="i-scroll"
                    src={images.down}
                    alt=""
                />
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="i-img-wrapper">
                    <img src={ isDarkMode ? images.meDark : images.me } alt="" className="i-img"/>
                </div>
            </div>
        </div>
    );
};

export default Intro;