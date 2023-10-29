import Navibar from "./Navbar";
import "./App.css";
import Footer from "./Footer";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Introduction from "./Introduction";

function App() {
  return (
    <div>
      <div>
        <Navibar />
        <Introduction />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}

export default App;
