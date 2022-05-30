import images from "../../utils/images";
import "./services.scss";

const Services = () => {
    return (
        <div className="services" id="services">
            <h1>Services</h1>
            <ul>
                <li className="active">Software Development</li>
                <li>Mobile Development</li>
                <li>Machine Learning</li>
                <li>Business Analytics</li>
                <li>Project Mgt <span>&</span> Agile Practices</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={images.services.chaty} alt=""/>
                    <h3>Chaty</h3>
                </div>
                <div className="item">
                    <img src={images.services.picloud} alt=""/>
                    <h3>PiCloud</h3>
                </div>
                <div className="item">
                    <img src={images.services.boxy} alt=""/>
                    <h3>inBoxy</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;