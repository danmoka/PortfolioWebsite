import "./topbar.scss";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">windmill.</a>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default Topbar;