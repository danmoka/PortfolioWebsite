import { useState } from "react";
import { services } from "../../data/services";
import ServiceTab from "../serviceTab/ServiceTab";
import images from "../../utils/images";
import "./services.scss";

const Services = () => {
    const [selected, setSelected] = useState(services[0].id);

    return (
        <div className="services" id="services">
            <h1>Services</h1>
            <ul>
                {services.map((item) => (
                    <ServiceTab 
                        key={item.id}
                        id={item.id}
                        name={item.name} 
                        active={selected === item.id} 
                        select={(id) => setSelected(id)}
                    />
                ))}
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