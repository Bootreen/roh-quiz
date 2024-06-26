import "./PageQuiz.css";
import { useState } from "react";
import { quizQuestions } from "../data/questions";

export const PageQuiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const { question, options } = quizQuestions[currQuestion];
  const switchQuestion = () =>
    setCurrQuestion(
      currQuestion === quizQuestions.length - 1 ? 0 : currQuestion + 1
    );

  return (
    <>
      <h2>Question {currQuestion + 1}</h2>
      <h3>{question}</h3>
      <div className='options-container'>
        {options.map((option, id) => (
          <button key={id}>{option}</button>
        ))}
      </div>
      <button onClick={switchQuestion}>Next Question</button>
    </>
  );
};
