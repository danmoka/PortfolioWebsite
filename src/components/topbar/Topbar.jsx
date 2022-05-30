import { ContactPhone, Mail } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">windmill.</a>
                    <div className="itemContainer">
                        <ContactPhone className="icon"/>
                        <span>+7 999 123 12 50</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>help@windmill.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;