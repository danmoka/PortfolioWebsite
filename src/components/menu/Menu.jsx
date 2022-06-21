import MenuItem from "./MenuItem";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <MenuItem href="#intro" setMenuOpen={setMenuOpen}>Home</MenuItem>
                <MenuItem href="#services" setMenuOpen={setMenuOpen}>Services</MenuItem>
                <MenuItem href="#success" setMenuOpen={setMenuOpen}>Success</MenuItem>
                <MenuItem href="#testimonials" setMenuOpen={setMenuOpen}>Testimonials</MenuItem>
                <MenuItem href="#contact" setMenuOpen={setMenuOpen}>Contact</MenuItem>
            </ul>
        </div>
    );
};

export default Menu;