import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
