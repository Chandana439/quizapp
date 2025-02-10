import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Result.css";
const ResultPage = () => {
  const { score } = useParams();
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "70px" }}>Quiz Completed!</h1>
      <h2 style={{ fontSize: "40px" }}>Your Score: {score} out of 10</h2>
      <button className="retake-button" onClick={() => navigate("/")}>
        Retake Quiz
      </button>
    </div>
  );
};

export default ResultPage;
