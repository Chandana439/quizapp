import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./index.css";
const HomePage = () => {
  return (
    <div className="container">
      <div className="home-left">
        Welcome to
        <br />
        <h1 className="wave-text">
          <span>Q</span>
          <span>u</span>
          <span>i</span>
          <span>z</span>
          <span> A</span>
          <span>p</span>
          <span>p</span>
        </h1>
        <p>Please select a subject to get started</p>
      </div>
      <div className="home-right">
        <Link to="/quiz/html">
          <button style={{ backgroundColor: "cornflowerblue" }}>HTML</button>
        </Link>
        <Link to="/quiz/css">
          <button style={{ backgroundColor: "rgb(220, 113, 189)" }}>CSS</button>
        </Link>
        <Link to="/quiz/javascript">
          <button style={{ backgroundColor: "rgb(130, 172, 104)" }}>
            JavaScript
          </button>
        </Link>
        <Link to="/quiz/java">
          <button style={{ backgroundColor: "rgb(207, 201, 90)" }}>Java</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
