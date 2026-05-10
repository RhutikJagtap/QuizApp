import React, { useState } from "react";
import "./QuizApp.css";

//named export{}
// we can not change data to any other name
import { data } from "./data.js";

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [isFinish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [option, setOption] = useState("");
  const correctOptions = [
    "Option3",
    "Option2",
    "Option3",
    "Option2",
    "Option1",
    "Option2",
    "Option3",
    "Option2",
    "Option1",
    "Option2",
  ];

  //go to next question
  const handleNext = () => {
    //check user selected option and ans is correct
    if (correctOptions[index] === option) {
      //update ans
      setScore(score + 1);
    }
    if (index < data.length - 1) {
      setIndex(index + 1);
      setOption("");
    } else {
      setFinish(true);
    }
  };

  if (isFinish) {
    return (
      <div className="scorePage">
        <h1>Quiz Finished !!!</h1>
        <h3>
          Your Score is {score} of {data.length}🎉
        </h3>
      </div>
    );
  }

  const handleSelect = (opt) => {
    setOption(opt);
    console.log(opt);
  };

  return (
    <div className="quizapp">
      <h1 className="title">QuizApp</h1>

      <h3>Q.{data[index].Question}</h3>
      <ol>
        <li
          className={option === "Option1" ? "selected" : ""}
          onClick={() => handleSelect("Option1")}
        >
          {data[index].Option1}
        </li>
        <li
          className={option === "Option2" ? "selected" : ""}
          onClick={() => handleSelect("Option2")}
        >
          {data[index].Option2}
        </li>
        <li
          className={option === "Option3" ? "selected" : ""}
          onClick={() => handleSelect("Option3")}
        >
          {data[index].Option3}
        </li>
        <li
          className={option === "Option4" ? "selected" : ""}
          onClick={() => handleSelect("Option4")}
        >
          {data[index].Option4}
        </li>
      </ol>

      <button onClick={handleNext} className="btn" disabled={!option}>
        Next
      </button>
      <h4>
        Question {index + 1} out of {data.length}
      </h4>
    </div>
  );
}
