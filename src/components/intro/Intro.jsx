import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import "./intro.scss";

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true,
                backDelay: 1500,
                strings: ['ENGINEERS', 'SOFTWARE' ] 
            });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/wind2.jpg" alt=""/>
                    <p className="text">AdamLowly</p>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome to our</h2>
                    <h1>windmill. team</h1>
                    <h3>GREAT <span ref={textRef}></span></h3>
                </div>
                <a href="#services">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Intro;