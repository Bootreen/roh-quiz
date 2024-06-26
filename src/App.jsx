import "./App.css";
import { useState } from "react";
import { HOME, QUIZ, ADV, RESULT } from "./data/pages";
import { PageHome } from "./components/PageHome";
import { PageQuiz } from "./components/PageQuiz";
import { PageAdv } from "./components/PageAdv";
import { PageResult } from "./components/PageResult";

const App = () => {
  const [currPage, setCurrPage] = useState(HOME);
  return (
    <>
      {currPage === HOME && <PageHome navHandler={() => setCurrPage(QUIZ)} />}
      {currPage === QUIZ && <PageQuiz navHandler={() => setCurrPage(ADV)} />}
      {currPage === ADV && <PageAdv navHandler={() => setCurrPage(RESULT)} />}
      {currPage === RESULT && (
        <PageResult navHandler={() => setCurrPage(HOME)} />
      )}
    </>
  );
};

export default App;
