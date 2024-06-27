export const PageResult = ({ navHandler, correctAnswers }) => (
  <>
    <h2>ROH Quiz</h2>
    <h3>Your result</h3>
    <p>Du hast {correctAnswers} richtig beantwortet.</p>
    <button onClick={navHandler}>Homepage</button>
  </>
);
