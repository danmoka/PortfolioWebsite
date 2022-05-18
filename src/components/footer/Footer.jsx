import { socialMedia } from "../../utils/data";
import "./footer.css";

const Footer = () => {
    return (
        <div className="f">
            <div className="f-left">
                <div className="f-left-wrapper">
                    <p className="f-title">Thanks a lot:</p>
                    <a
                        href="https://www.flaticon.com/authors/basic-rounded/flat" 
                        target="_blank"
                        rel="noreferrer"
                        >
                            Icons created by Freepik - Flaticon
                    </a>
                    <a
                        href="https://undraw.co/illustrations" 
                        target="_blank"
                        rel="noreferrer"
                        >
                            Open-source illustrations - unDraw
                    </a>
                </div>
            </div>
            <div className="f-right">
                <div className="f-right-wrapper">
                    {
                        socialMedia.map(({ id, href, imgSrc}) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                key={id}
                            >
                                <img
                                    className="f-image"
                                    src={imgSrc}
                                    alt="" 
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;