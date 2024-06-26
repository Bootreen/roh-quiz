import "./App.css";
import { useState } from "react";

const App = () => {
  const [currPage, setCurrPage] = useState("Quiz");
  return (
    <>
      <h1>ROH Quiz</h1>
      {/* {currPage === "Homepage" && <PageHome />}
      {currPage === "Quiz" && <PageQuiz />}
      {currPage === "Advertising" && <PageAdv />}
      {currPage === "Result" && <PageResult />} */}
      {currPage === "Homepage" && <div>111</div>}
      {currPage === "Quiz" && <div>222</div>}
      {currPage === "Advertising" && <div>333</div>}
      {currPage === "Result" && <div>444</div>}
    </>
  );
};

export default App;
