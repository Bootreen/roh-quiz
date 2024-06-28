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
  // b) Control enabled/disabled style and color(representing correct/wrong answer)
  // of the option buttons
  const [isAnswered, setIsAnswered] = useState(false);

  // Purpose: Hold the information about wrong option id, but only
  // in case if this wrong id option was selected and clicked by user
  // Range:
  // "none" (if no wrong options clicked)
  // 0-3 - depending of the index of wrong option that was clicked
  // Changes on these events:
  // a) no wrong options are selected (first render of the new question)
  // b) one of the three wrong options is selected
  // Use: Control the assigning of additional className "wrong" to option buttons
  const [selectedWrongOptionId, setSelectedWrongOptionId] = useState("none");

  // Determines if selected answer option was correct
  // by comparing this option id with correct id that is always 0
  const isCorrect = (originalId) => (originalId === 0 ? true : false);

  // Boolean variable that signals if the current question is the last one
  const isLastQuestion = currQuestionId === quizQuestions.length - 1;

  // Function that handles:
  // a) switching from one question to another
  // b) switching to the next App section
  const switchQuestion = () => {
    // In the beginning of every question user didn't answer yet
    setIsAnswered(false);
    // No wrong options are selected yet too
    setSelectedWrongOptionId("none");
    // This is the last question? Go to the Results (actually - to the Advertising)
    if (isLastQuestion) {
      // run navHandler, that we recieved as property from parent App.jsx component
      navHandler();
    } else {
      // else - just increment Current Question counter
      setCurrQuestionId(currQuestionId + 1);
    }
  };

  // Function that:
  // a) Determines if user selected correct or wrong option
  // b) If wrong option was selected, saves this option id in
  // selectedWrongOptionId state
  // shuffledId - shuffled option id (index 0...3 in the array of options)
  // realId - original option id before it was shuffled ??? - doublecheck later
  const processAnswer = (shuffledId, realId) => {
    // User gave his answer, so set isAnswered state to true
    setIsAnswered(true);
    // if answer given was correct...
    if (isCorrect(shuffledId)) {
      // increment correctAnswers counter
      answersHandler(correctAnswers + 1);
    } else {
      // remember wrong answer current (shuffled) id
      setSelectedWrongOptionId(realId);
    }
  };

  return (
    <>
      {/* <p>currQuestionId: {currQuestionId}</p>
      <p>isAnswered: {isAnswered ? "true" : "false"}</p> */}

      {/* Calling children component ProgressBar and passing currQuestion as prop to it */}
      <ProgressBar currQuestion={currQuestionId} />
      {/* Render current question text */}
      <h3>{question}</h3>
      <div className='options-container'>
        {/* render 4 answer options */}
        {/* Use shuffled property as source for mapping the options */}

        {/* How shuffled looks inside */}
        {/* shuffled = [ [ 2, 0, 3, 1 ], [ 0, 3, 2, 1 ] ... ] */}
        {/* real indexes   0  1  2  3      0  1  2  3         */}

        {/* Example: */}
        {/* shuffled[currQuestionId] = [ 2, 0, 3, 1 ] */}
        {/* [ 2, 0, 3, 1 ].map((shuffled, realId) => */}
        {/* <button key={realId} >{options[shuffledId]}</button> ) */}

        {/* shuffledId - element of the shuffled array */}
        {/* realId - index of this shuffled element (0...3) */}

        {/* realId     [ 0, 1, 2, 3 ] */}
        {/* shuffledId [ 2, 0, 3, 1 ] */}

        {/* Render result: */}
        {/* <button key=0 >{ element of options array with index 2 }</button> */}
        {/* <button key=1 >{ element of options array with index 0 }</button> */}
        {/* <button key=2 >{ element of options array with index 3 }</button> */}
        {/* <button key=3 >{ element of options array with index 1 }</button> */}
        {shuffled[currQuestionId].map((shuffledId, realId) => (
          <button
            key={realId}
            className={clsx(
              // highlight the correct option if it was clicked
              isAnswered && isCorrect(shuffledId) && "correct",
              // highlight the wrong option if it was clicked
              isAnswered && realId === selectedWrongOptionId && "wrong"
            )}
            // process the answer:
            // a) set isAnswered to true
            // b) check if the answer was right or not
            // c) remember wrong option id if it was clicked
            onClick={() => processAnswer(shuffledId, realId)}
            // disable all options if question was answered
            disabled={isAnswered}
          >
            {/* render option in order that shuffledId states */}
            {options[shuffledId]}
          </button>
        ))}
      </div>
      {/* call switchQuestion handler if NExt button was clicked */}
      {/* disable Next button if user didn't answer the question */}
      <button onClick={switchQuestion} disabled={!isAnswered}>
        {/* if this is the last question, change Next button caption to "To Result" */}
        {isLastQuestion ? "To Result" : "Next Question"}
      </button>
    </>
  );
};
