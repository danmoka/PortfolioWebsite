import { useState } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Services from "./components/services/Services";
import Success from "./components/success/Success";
import "./app.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Services />
        <Success />
        <Contact />
      </div>
    </div>
  );
};

export default App;