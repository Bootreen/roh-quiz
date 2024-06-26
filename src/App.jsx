import "./App.css";
import { useState } from "react";
import { HOME, QUIZ, ADV, RESULT } from "./data/pages";
import { PageHome } from "./components/PageHome";
import { PageQuiz } from "./components/PageQuiz";
import { PageAdv } from "./components/PageAdv";
import { PageResult } from "./components/PageResult";

const App = () => {
  const [currPage, setCurrPage] = useState(HOME);
  const onSwitchPage = (pageId) => setCurrPage(pageId);
  return (
    <>
      {currPage === HOME && <PageHome handler={() => onSwitchPage(QUIZ)} />}
      {currPage === QUIZ && <PageQuiz handler={() => onSwitchPage(ADV)} />}
      {currPage === ADV && <PageAdv handler={() => onSwitchPage(RESULT)} />}
      {currPage === RESULT && <PageResult handler={() => onSwitchPage(HOME)} />}
    </>
  );
};

export default App;
