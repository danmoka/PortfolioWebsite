import { useEffect, useState } from "react";
import ServiceTab from "../serviceTab/ServiceTab";
import { 
    businessAnalytics, 
    machineLearning, 
    mobileDevelopment, 
    services, 
    softwareDevelopment,
} from "../../data/services";
import "./services.scss";

const Services = () => {
    const [selected, setSelected] = useState(services[0].id);
    const [data, setData] =  useState([]);

    useEffect(() => {
        switch(selected) {
            case "Software Development": 
                setData(softwareDevelopment);
                break;
            case "Mobile Development": 
                setData(mobileDevelopment);
                break;
            case "Machine Learning": 
                setData(machineLearning);
                break;
            case "Business Analytics": 
                setData(businessAnalytics);
                break;
            default:
                setData([]);
        }
    }, [selected]);

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
                {
                    data.length < 1
                    ? <h2>Coming soon...</h2>
                    : (
                        <>
                            {data.map((item) => (
                                <div key={item.id} className="item">
                                    <img src={item.img} alt=""/>
                                    <h3>{item.title}</h3>
                                </div>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Services;