import "./ProgressBar.css";
import { clsx } from "clsx";

import { quizQuestions } from "../data/questions";
export const ProgressBar = ({ currQuestion }) => {
  const renderProgress = () => {
    let content = [];
    for (let i = 0; i < quizQuestions.length; i++)
      content.push(
        <div
          className={clsx("progress-element", i <= currQuestion && "active")}
        ></div>
      );
    return content;
  };
  return (
    <>
      <div>
        {currQuestion + 1} of {quizQuestions.length}
      </div>
      <div className="progress-container">{renderProgress()}</div>
    </>
  );
};
