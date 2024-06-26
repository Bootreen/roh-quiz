import "./App.css";
import { useState } from "react";
import { PageHome } from "./components/PageHome";
import { PageQuiz } from "./components/PageQuiz";
import { PageAdv } from "./components/PageAdv";
import { PageResult } from "./components/PageResult";

const App = () => {
  const [currPage, setCurrPage] = useState(1);
  const onSwitchPage = (pageId) => setCurrPage(pageId);
  return (
    <>
      {currPage === 1 && <PageHome handler={() => onSwitchPage(2)} />}
      {currPage === 2 && <PageQuiz handler={() => onSwitchPage(3)} />}
      {currPage === 3 && <PageAdv handler={() => onSwitchPage(4)} />}
      {currPage === 4 && <PageResult handler={() => onSwitchPage(1)} />}
    </>
  );
};

export default App;
