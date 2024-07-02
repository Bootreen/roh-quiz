export const PageResult = ({ navHandler, correctAnswers, answersHandler }) => {
  const restartHandler = () => {
    answersHandler(0);
    navHandler();
  };

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

  return (
    <>
      <h2>Quiz Result</h2>
      <p className='result'>
        You answered {correctAnswers} questions correctly.
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
    </>
  );
};

{
  /* <button class="button-56" role="button">Button 56</button> */
}
