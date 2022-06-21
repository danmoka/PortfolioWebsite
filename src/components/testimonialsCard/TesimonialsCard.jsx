import images from "../../utils/images";
import "./testimonialsCard.scss";

const TestimonialsCard = ({ company, position, img, imgBy, icon, desc, featured }) => {
    return (
        <div className={`card ${featured && "featured"}`}>
            <div className="top">
                <img 
                    src={images.assets.rightArrow} 
                    className="left" 
                    alt="" />
                <div className="personBlock">
                    <img 
                        src={img} 
                        className="person"
                        alt="" />
                    <p>{imgBy}</p>    
                </div>
                <img 
                    src={icon} 
                    className="right"
                    alt="" />
            </div>
            <div className="center">{desc}</div>
            <div className="bottom">
                <h3>{company}</h3>
                <h4>{position}</h4>
            </div>
        </div>
    );
};

export default TestimonialsCard;