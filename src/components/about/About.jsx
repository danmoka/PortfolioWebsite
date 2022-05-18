import { aboutDesc, aboutImg, aboutSub, awardDescription, awardName } from "../../utils/data";
import images from "../../utils/images";
import "./about.css";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={aboutImg} 
                        alt="" 
                        className="a-card-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">{aboutSub}</p>
                <p className="a-desc">{aboutDesc}</p>
                <div className="a-award">
                    <img src={images.award} alt="" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">{awardName}</h4>
                        <p className="a-award-desc">{awardDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;