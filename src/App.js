import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import Works from "./components/WorksSection/works";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Header />
        <Banner />
        <Works />
    </Router>
  );
}

export default App;
