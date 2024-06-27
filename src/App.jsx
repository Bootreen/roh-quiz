import "./App.css";
import { useState, useEffect } from "react";
import { HOME, QUIZ, ADV, RESULT } from "./data/pages";
import { shuffle } from "./utils/shuffle";
import { PageHome } from "./components/PageHome";
import { PageQuiz } from "./components/PageQuiz";
import { PageAdv } from "./components/PageAdv";
import { PageResult } from "./components/PageResult";

const App = () => {
  const [currPage, setCurrPage] = useState(HOME);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [shuffled, setShuffled] = useState();

  useEffect(() => {
    setShuffled(shuffle(7));
  }, []);

  return (
    <>
      {currPage === HOME && <PageHome navHandler={() => setCurrPage(QUIZ)} />}
      {currPage === QUIZ && (
        <PageQuiz
          navHandler={() => setCurrPage(ADV)}
          answersHandler={setCorrectAnswers}
          correctAnswers={correctAnswers}
          shuffled={shuffled}
        />
      )}
      {currPage === ADV && <PageAdv navHandler={() => setCurrPage(RESULT)} />}
      {currPage === RESULT && (
        <PageResult
          navHandler={() => setCurrPage(HOME)}
          correctAnswers={correctAnswers}
        />
      )}
    </>
  );
};

export default App;
