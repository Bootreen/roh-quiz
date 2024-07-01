export const PageResult = ({ navHandler, correctAnswers, answersHandler }) => {
  const restartHandler = () => {
    answersHandler(0);
    navHandler();
  };

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
      <h2>ROH Quiz</h2>
      <h3>Your result</h3>
      <div>
        {correctAnswers === 0 && <p>You answered 0 questions correctly.</p>}
        {correctAnswers === 1 && <p>You answered 1 question correctly.</p>}
        {correctAnswers > 1 && correctAnswers <= 7 && (
          <p>You answered {correctAnswers} questions correctly.</p>
        )}
      </div>

      <img src={resultImages[correctAnswers]} alt="Ergebnis-GIF" />
      <br />
      <button onClick={restartHandler}>Homepage</button>
    </>
  );
};
