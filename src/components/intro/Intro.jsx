import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import images from '../../utils/images';
import "./intro.scss";

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true,
                backDelay: 1500,
                strings: ['Engineers', 'Software' ] 
            });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src={images.assets.windmill} alt=""/>
                    <p className="text">AdamLowly</p>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome to our</h2>
                    <h1>windmill<span>.</span> team</h1>
                    <h3>Great <span ref={textRef}></span></h3>
                </div>
                <a href="#services">
                    <img src={images.assets.down} alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Intro;