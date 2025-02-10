import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import HomePage from "./HomePage";
import Quiz from "./Quiz";
import ResultPage from "./ResultPage";
import "./Styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="darkmode-container">
        <span>
          <img
            src={darkMode ? "/white-sun.png" : "/sun-icon.png"}
            alt="sun_icon"
          />
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"> </span>
          </label>
        </div>
        <span>
          <img
            src={darkMode ? "/white-moon.png" : "/moon-icon.png"}
            alt="moon_icon"
          />
        </span>
      </div>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:topic" element={<Quiz />} />
            <Route path="/resultpage/:score" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
