import { useContext } from "react";
import { ThemeContext } from "../../store/context";
import { introDescription, introName, introSkills } from "../../utils/data";
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
                    <h1 className="i-name">{introName}</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            {
                                introSkills.map(({id, text}) => (
                                    <div className="i-title-item" key={id}>{text}</div>
                                ))
                            }
                        </div>
                    </div>
                    <p className="i-desc">{introDescription}</p>
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