import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { htmlQuestions } from "./Questions/htmlQuestions";
import { cssQuestions } from "./Questions/cssQuestions";
import { jsQuestions } from "./Questions/jsQuestions";
import { javaQuestions } from "./Questions/javaQuestions";
import "./Quiz.css";

const topics = {
  html: htmlQuestions,
  css: cssQuestions,
  javascript: jsQuestions,
  java: javaQuestions,
};

const QuizHTML = () => {
  const { topic } = useParams();
  const questions = topics[topic] || [];
  const navigate = useNavigate();

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [errormessage, setErrorMessage] = useState(null);

  const question = questions[currentQuestion];

  const handleOptionClick = (opt) => {
    setSelectedOption(opt);
    setIsAnswered(true);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setErrorMessage("Please select an option before submitting.");
      return; // Stop execution if no option is selected
    }
    if (currentQuestion < questions.length - 1) {
      if (selectedOption === question.answer) {
        setScore(score + 1);
        setcurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setErrorMessage(null);
      } else {
        console.log("Before Update - Current Question:", currentQuestion);
        setcurrentQuestion(currentQuestion + 1);
        console.log("After Update - Current Question:", currentQuestion + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setErrorMessage(null);
      }
    } else {
      console.log("Navigating to Results Page...");
      navigate(
        `/resultpage/${selectedOption === question.answer ? score + 1 : score}`
      );
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-heading">
        <h2 className={`heading-${topic}`}>{topic.toUpperCase()} </h2>
      </div>

      <div className="ques-container">
        <div>
          <p style={{ fontSize: "20px" }}>
            {currentQuestion + 1} of {questions.length} questions
          </p>
          <p>{question.question}</p>
        </div>

        <div className="option-content">
          <div className="options">
            {question.options.map((opt, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === opt ? `selected-${topic}` : ""
                }`}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="option-actions">
            <button
              style={{ border: "none" }}
              className={`submit submit-${topic}`}
              onClick={handleSubmit}
            >
              {isAnswered && currentQuestion + 1 < questions.length
                ? "Next Question"
                : "Submit Answer"}
            </button>
            {errormessage && (
              <p className="error-message">&#x24E7; {errormessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHTML;
