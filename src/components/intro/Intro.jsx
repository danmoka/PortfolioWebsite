import Me from "../../img/me-unDraw2.svg"
import MouseSvg from "../common/MouseSvg"
import "./intro.css"

const Intro = () => {
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
                    <div className="i-desc">
                        Result-oriented Full-Stack Software Development Engineer 
                        with more than 3 years of professional experience in web and desktop software development 
                        and maintenance with a focus on JavaScript/TypeScript and C#.
                    </div>
                </div>
                <MouseSvg className="i-scroll"/>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="i-img-wrapper">
                    <img src={Me} alt="" className="i-img"/>
                </div>
            </div>
        </div>
    )
}

export default Intro