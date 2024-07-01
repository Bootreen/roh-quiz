## Project structure

- Folder structure
  - src - main source folder
    App.jsx
    - components - all children components of App.jsx
    - data - quiz questions
- Every page - is separate React Component
  ```js
  const App = () => {
    return (
      <>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </>
    );
  };
  ```
- State management - via React useState hook
- All state variables - inside App.jsx, state to children components - via props

## To Do

### 26.06

1. Convert questions.md to js-object format [Henning] (Completed)
2. Write page state management and page switching in App.jsx [Oleksii] (Completed)
3. Write component for Home Page [Henning] (Completed)
4. Write component for Quiz Page [Oleksii] (Completed)

### 27.06

1. Finish PageQuiz component [Oleksii] (Completed)
   1. Make a copy of options array
   2. Shuffle the copy
   3. Render shuffled copy to the screen
   4. During render conditionally assign onClick event handler to options buttons
   5. For the right answer onClick has to call answersHandler and increment correctAnswers
   6. For the wrong answer onClick has to do nothing (for now)
   7. Prohibit multiply answers for the same question
      - Introduce new state - isAnswered +
      - When isAnswered, make options buttons disabled and highlight right answer by green color
      - When isAnswered AND wrong option was selected, additionaly highlight wrong answer by red
      - Next Question button has to be disabled if NOT isAnswered
   8. Prevent additional options shuffle after the answer
2. PageAdv component [Rainer] (Completed)
3. PageResult component [Henning] (Completed)
4. Progress Bar component [Henning] (Completed)

### 28.06

1. The correctAnswers counter does not reset to zero when navigating from the results page to the home page. We need to solve this problem. [Henning] (Completed)
   - tip: we can pass the setCorrectAnswers handler (see code of PageQuiz call in App.jsx) as prop to the PageResult

### 01.07

1. We need proper visualisation for the prosgress bar. [Henning] [Rainer]
   - tip: we can use flexbox with 7 elements with backgrounds that change it colors
2. We need an awesome Result Page. I've prepared 6 funny gifs to illustrate the user final result, the task is - to add a conditional render of this images depending on the result. [Rainer] [Henning]

| Correct answers | File name          | Image                                           |
| :-------------- | :----------------- | :---------------------------------------------- |
| 7               | excited.gif        | ![excited](../public/excited.gif)               |
| 6               | cheers.gif         | ![cheers](../public/cheers.gif)                 |
| 5               | nod.gif            | ![nod](../public/nod.gif)                       |
| 3-4             | not-bad.gif        | ![not-bad](../public/not-bad.gif)               |
| 1-2             | dissapointment.gif | ![dissapointment](../public/dissapointment.gif) |
| 0               | zero.gif           | ![zero](../public/zero.gif)                     |

3. Write css-template for page component that will be used as base for othe page styles [Oleksii]
