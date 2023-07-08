import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Services} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="*" Component={Error} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
