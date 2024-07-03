import { quizQuestions } from "../data/questions";
import { shuffle } from "../utils/shuffle";

export const PageResult = ({
  navHandler,
  answers,
  setAnswers,
  setShuffled,
}) => {
  const results = [
    "Time to debug! 🐞\nEvery great coder has been here – chin up!",
    "HTML Newbie! 🌱\nKeep learning!",
    "HTML Newbie! 🌱\nKeep learning!",
    "CSS Apprentice! 🎨\nPractice time!",
    "CSS Apprentice! 🎨\nPractice time!",
    "JS Juggler! 🤹\nKeep going!",
    "Code Rockstar! 🎸\nAlmost flawless!",
    "Frontend Wizard! 🧙\nYou nailed it!",
  ];

  const resultImages = [
    "/zero.gif",
    "/dissapointment.gif",
    "/dissapointment.gif",
    "/not-bad.gif",
    "/not-bad.gif",
    "/nod.gif",
    "/cheers.gif",
    "/excited.gif",
  ];

  // calculate total correct answers number
  const correctAnswers = answers.reduce(
    (acc, answer) => acc + (answer ? 1 : 0),
    0
  );

  const restartHandler = () => {
    // reset answers array
    setAnswers([]);
    // reshuffle answer options
    setShuffled(shuffle(quizQuestions.length));
    // back to the PageHome
    navHandler();
  };

  return (
    <div className='result-container'>
      <h2>Quiz Result</h2>
      <h3>Your answers:</h3>
      <p>
        {answers.map((answer, i) => (
          <span key={i} className={answer ? "answer-correct" : "answer-wrong"}>
            {i + 1}{" "}
          </span>
        ))}
      </p>
      <p>
        <strong>
          {correctAnswers} of {quizQuestions.length}
        </strong>{" "}
        answers {correctAnswers === 1 ? "is" : "are"} correct.
      </p>
      {/* split description to 2 separate paragraphs */}
      {results[correctAnswers].split("\n").map((element, id) => (
        <p key={id} className='result'>
          {element}
        </p>
      ))}
      <img
        className='result-gif'
        src={resultImages[correctAnswers]}
        alt='result-GIF'
      />
      <button onClick={restartHandler}>Back to Homepage</button>
    </div>
  );
};
