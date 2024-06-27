import "./PageQuiz.css";
import { useState } from "react";
import { quizQuestions } from "../data/questions";
// import { shuffle } from "../utils/shuffle";

export const PageQuiz = ({
  navHandler,
  answersHandler,
  correctAnswers,
  shuffled,
}) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const { question, options } = quizQuestions[currQuestion];
  const switchQuestion = () =>
    setCurrQuestion(
      currQuestion === quizQuestions.length - 1 ? 0 : currQuestion + 1
    );

  // Completed
  // 1. Make a copy of options array
  // 2. Shuffle the copy
  // 3. Render shuffled copy to the screen
  // 4. During render conditionally assign onClick event handler to options buttons
  // 5. For the right answer onClick has to call answersHandler and increment correctAnswers
  // 6. For the wrong answer onClick has to do nothing (for now)

  // 8. Prevent additional options shuffle after the answer

  // ToDo
  // 7. Prohibit multiply answers for the same question
  //    7.1 - Introduce new state - isAnswered
  //    7.2 - When isAnswered, make options buttons disabled and highlight right answer by green color
  //    7.3 - When isAnswered AND wrong option was selected, additioonaly highlight wrong answer by red
  //    7.4 - Next Question button has to be disabled if NOT isAnswered

  return (
    <>
      <h1>Correct answers: {correctAnswers}</h1>
      <h2>Question {currQuestion + 1}</h2>
      <h3>{question}</h3>
      <div className='options-container'>
        {shuffled[currQuestion].map((id) => (
          <button
            key={id}
            onClick={
              options[id] === options[0]
                ? () => {
                    answersHandler(correctAnswers + 1);
                  }
                : () => {}
            }
          >
            {options[id]}
          </button>
        ))}
      </div>
      <button onClick={switchQuestion}>Next Question</button>
    </>
  );
};
