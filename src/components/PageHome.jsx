export const PageHome = ({ navHandler }) => (
  <>
    <h2>ROH Quiz</h2>
    <h3>Welcome! </h3>
    <p>
      Test your coding knowledge! Click through the questions and select the
      correct answer. You can continue by clicking the Next button. You can see
      your progress in the quiz at the top. At the end you will find out whether
      you are already a coding pro or whether you still have a lot to learn...
      Have fun!
    </p>
    
    <button onClick={navHandler}>Start Quiz</button>
  </>
);
