import Navibar from "./Navbar";
import Introduction from "./Introduction";
import "./App.css";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Footer from "./Footer";

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
