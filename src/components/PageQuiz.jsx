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
  // Purpose: Holds the index of the currently visible/active question
  // Range: 0 - quizQuestions.length - 1
  // Changes on these events: onClick of Next Button
  // Use:
  // a) lookup the question and its options in the quizQuestions array
  // b) display the current question number in Progressbar
  // c) control the label of the "Next" Button
  const [currQuestionId, setCurrQuestionId] = useState(0);
  // Destructuring question and its options (unshuffled)
  const { question, options } = quizQuestions[currQuestionId];

  // Purpose: Holds the information, if the user already answered the current question.
  // Range: true/false
  // Changes on these events:
  // a) Click on any option
  // b) Click on "Next" button
  // Use:
  // a) Control the enabled/disabled style of the "Next" Button
  // b) Control enabled/disabled style and color(representing correct/wrong answer) of the option buttons
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedWrongOptionId, setSelectedWrongOptionId] = useState("none");

  const isCorrect = (optionIdShuffled) =>
    options[optionIdShuffled] === options[0] ? true : false;

  const isLastQuestion = currQuestionId === quizQuestions.length - 1;

  const switchQuestion = () => {
    setIsAnswered(false);
    // No wrong options are selected yet
    setSelectedWrongOptionId("none");
    // Last question? Go to the Results (actually - to the Advertising)
    if (isLastQuestion) {
      navHandler();
    } else {
      // else - just increment Current Question counter
      setCurrQuestionId(currQuestionId + 1);
    }
  };

  const processAnswer = (optionIdShuffled, optionId) => {
    setIsAnswered(true);
    if (isCorrect(optionIdShuffled)) {
      answersHandler(correctAnswers + 1);
    } else {
      // highlight wrong answer only if wrong answer was selected
      setSelectedWrongOptionId(optionId);
    }
  };

  return (
    <>
      <p>currQuestionId: {currQuestionId}</p>
      <p>isAnswered: {isAnswered ? "true" : "false"}</p>
      <ProgressBar currQuestion={currQuestionId} />
      <h3>{question}</h3>
      <div className='options-container'>
        {shuffled[currQuestionId].map((optionIdShuffled, optionId) => (
          <button
            key={optionId}
            className={clsx(
              isAnswered && isCorrect(optionIdShuffled) && "correct",
              isAnswered && optionId === selectedWrongOptionId && "wrong"
            )}
            onClick={() => processAnswer(optionIdShuffled, optionId)}
            disabled={isAnswered}
          >
            {options[optionIdShuffled]}
          </button>
        ))}
      </div>
      <button onClick={switchQuestion} disabled={!isAnswered}>
        {isLastQuestion ? "To Results" : "Next Question"}
      </button>
    </>
  );
};
