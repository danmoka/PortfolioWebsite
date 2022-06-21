import { useState } from "react";
import images from "../../utils/images";
import data from "../../data/success";
import "./success.scss";

const Success = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };
 
    return (
        <div className="success" id="success">
            <div 
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                { data.map((item) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={ item.img } alt="" />
                                    </div>
                                    <p>{ item.title }</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="bg-wrapper">
                                    <img src={ item.background } alt="" />
                                </div>
                                <div className="text-wrapper">
                                    <p>{ item.desc }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrowContainer left" onClick={() => handleClick("left")}>
                <img
                    className="arrow"
                    src={ images.assets.arrow }
                    alt=""
                />
            </div>
            <div className="arrowContainer right" onClick={() => handleClick("right")}>
                <img
                    className="arrow"
                    src={ images.assets.arrow }
                    alt=""
                />
            </div>
            <div className="dots">
                { data.map((item) => (
                    <div className={"dot " + (parseInt(item.id) - 1 === currentSlide ?  "active" : "")}></div>
                ))}
            </div>
            <div className="title"><h1>Success stories</h1></div>
        </div>
    );
};

export default Success;