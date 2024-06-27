import "./PageQuiz.css";
import { useState } from "react";
import { quizQuestions } from "../data/questions";

export const PageQuiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const { question, answers } = quizQuestions[currQuestion];
  const onSwitchQuestion = () =>
    setCurrQuestion(
      currQuestion === quizQuestions.length - 1 ? 0 : currQuestion + 1
    );

  return (
    <>
      <h2>Question {currQuestion + 1}</h2>
      <h3>{question}</h3>
      <div className="answers-container">
        {answers.map((answer, id) => (
          <button key={id}>{answer}</button>
        ))}
      </div>
      <button onClick={onSwitchQuestion}>Next Question</button>
    </>
  );
};
