import "./PageQuiz.css";
import { useState } from "react";
import { clsx } from "clsx";
import { quizQuestions } from "../data/questions";
import { ProgressBar } from "./ProgressBar";

export const PageQuiz = ({
  navHandler, //      handler for switching to the next App page
  answersHandler, //  handler to sum up the correct answers
  correctAnswers, //  correct answers counter
  shuffled, //        array of shuffled options indexes
}) => {
  // Current question counter (starting from the very first one)
  const [currQuestion, setCurrQuestion] = useState(0);
  // Destructuring question and its options (unshuffled)
  const { question, options } = quizQuestions[currQuestion];

  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswerId, setWrongAnswerId] = useState(false);
  const [correctHighlighted, setCorrectHighlighted] = useState("");
  const [wrongHighlighted, setWrongHighlighted] = useState("");

  const [pageControlLabel, setPageControlLabel] = useState("Next Question");

  const isCorrect = (shuffledId) =>
    options[shuffledId] === options[0] ? true : false;

  const switchQuestion = () => {
    setIsAnswered(false);
    setWrongAnswerId(false);
    setCorrectHighlighted("");
    setWrongHighlighted("");
    // Preparing to go to the next App page
    if (currQuestion === quizQuestions.length - 2)
      setPageControlLabel("To Result");
    // If user answered all the questions, take him further
    if (currQuestion === quizQuestions.length - 1) {
      navHandler();
    } else {
      // else - just increment Current Question counter
      setCurrQuestion(currQuestion + 1);
    }
  };

  const processAnswer = (shuffledId, realId) => {
    setIsAnswered(true);
    if (isCorrect(shuffledId)) {
      answersHandler(correctAnswers + 1);
    } else {
      // highlight wrong answer only if wrong answer was selected
      setWrongAnswerId(realId);
    }
    setCorrectHighlighted("correct");
    setWrongHighlighted("wrong");
  };

  return (
    <>
      <ProgressBar currQuestion={currQuestion} />
      <h2>Question {currQuestion + 1}</h2>
      <h3>{question}</h3>
      <div className='options-container'>
        {shuffled[currQuestion].map((shuffledId, realId) => (
          <button
            key={realId}
            className={clsx(
              isCorrect(shuffledId) && correctHighlighted,
              wrongAnswerId === realId && wrongHighlighted
            )}
            onClick={() => processAnswer(shuffledId, realId)}
            disabled={isAnswered}
          >
            {options[shuffledId]}
          </button>
        ))}
      </div>
      <button onClick={switchQuestion} disabled={!isAnswered}>
        {pageControlLabel}
      </button>
    </>
  );
};
