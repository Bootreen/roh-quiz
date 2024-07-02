import { quizQuestions } from "../data/questions";

export const PageResult = ({ navHandler, answers, setAnswers }) => {
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

  const correctAnswers = answers.reduce(
    (acc, answer) => acc + (answer ? 1 : 0),
    0
  );

  const restartHandler = () => {
    setAnswers([]);
    navHandler();
  };

  return (
    <div className='result-container'>
      <h2>Quiz Result</h2>
      <h3>Answers:</h3>
      <ol>
        {answers.map((answer, i) => (
          <li key={i}>{answer ? "Correct" : "Incorrect"}</li>
        ))}
      </ol>
      <p>
        You answered {correctAnswers} of {quizQuestions.length} question(s)
        correctly.
      </p>
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
