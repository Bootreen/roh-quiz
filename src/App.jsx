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
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [shuffled] = useState(shuffle(quizQuestions.length));

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
          answersHandler={setCorrectAnswers}
          correctAnswers={correctAnswers}
        />
      )}
    </>
  );
};

export default App;
