export const PageResult = ({ navHandler, correctAnswers, answersHandler }) => {
  const restartHandler = () => {
    answersHandler(0);
    navHandler();
  };

  return (
    <>
      <h2>ROH Quiz</h2>
      <h3>Your result</h3>
      <p>Du hast {correctAnswers} Fragen richtig beantwortet.</p>
      <button onClick={restartHandler}>Homepage</button>
    </>
  );
};
