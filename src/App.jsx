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
      {currPage === 1 && <PageHome />}
      {currPage === 2 && <PageQuiz />}
      {currPage === 3 && <PageAdv />}
      {currPage === 4 && <PageResult />}
      {/* Temporary button for testing page switching */}
      <button onClick={() => onSwitchPage(currPage === 4 ? 1 : currPage + 1)}>
        Next page
      </button>
    </>
  );
};

export default App;
