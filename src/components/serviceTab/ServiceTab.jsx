import "./serviceTab.scss";

const ServiceTab = ({ id, name, active, select }) => {
    return (
        <li className={"serviceTab " + (active ? "active" : "nonActive")} onClick={(e) => select(id)}>
            {name}
        </li>
    );
};

export default ServiceTab;