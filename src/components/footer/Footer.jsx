import images from "../../utils/images";
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
                    <a
                        href="https://www.instagram.com/danmoka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="f-image"
                            src={images.instagram}
                            alt="" 
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100005452275352"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="f-image"
                            src={images.facebook}
                            alt="" 
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daniil-potemkin-a5867a215"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="f-image"
                            src={images.linkedIn}
                            alt=""
                        />
                    </a>
                    <a
                        href="https://vk.com/potemaa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="f-image"
                            src={images.vk}
                            alt="" 
                        />
                    </a>
                    <a
                        href="mailto: homount.accome@gmail.com"
                    >
                        <img
                            className="f-image"
                            src={images.email}
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;