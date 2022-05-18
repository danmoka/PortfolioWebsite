import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Contact />
      </div>
    </div>
  );
};

export default App;