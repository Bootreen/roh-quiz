import "./App.css";
import { useState } from "react";
import { HOME, QUIZ, ADV, RESULT } from "./data/pages";
import { quizQuestions } from "./data/questions";
import { shuffle } from "./utils/shuffle";
import { PageHome } from "./components/PageHome";
import { PageQuiz } from "./components/PageQuiz";
import { PageAdv } from "./components/PageAdv";
import { PageResult } from "./components/PageResult";

const App = () => {
  const [currPage, setCurrPage] = useState(HOME);
  // array of all given answers - correct and wrong
  const [answers, setAnswers] = useState([]);
  // array of shuffled option indexes
  // (reshuffles on the app start)
  const [shuffled] = useState(shuffle(quizQuestions.length));

  return (
    <>
      {currPage === HOME && <PageHome navHandler={() => setCurrPage(QUIZ)} />}
      {currPage === QUIZ && (
        <PageQuiz
          navHandler={() => setCurrPage(ADV)}
          answers={answers}
          setAnswers={setAnswers}
          shuffled={shuffled}
        />
      )}
      {currPage === ADV && <PageAdv navHandler={() => setCurrPage(RESULT)} />}
      {currPage === RESULT && (
        <PageResult
          navHandler={() => setCurrPage(HOME)}
          answers={answers}
          setAnswers={setAnswers}
        />
      )}
    </>
  );
};

export default App;
