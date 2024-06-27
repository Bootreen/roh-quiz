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

1. Convert questions.md to js-object format [Henning]
2. Write page state management and page switching in App.jsx [Oleksii]
3. Write component for Home Page [Henning]
4. Write component for Quiz Page [Oleksii]
5. Write css-template for page component that will be used as base for othe page styles

### 27.06

Completed

1. Make a copy of options array
2. Shuffle the copy
3. Render shuffled copy to the screen
4. During render conditionally assign onClick event handler to options buttons
5. For the right answer onClick has to call answersHandler and increment correctAnswers
6. For the wrong answer onClick has to do nothing (for now)
7. Prohibit multiply answers for the same question
   1. Introduce new state - isAnswered +
   2. When isAnswered, make options buttons disabled and highlight right answer by green color
   3. When isAnswered AND wrong option was selected, additionaly highlight wrong answer by red
   4. Next Question button has to be disabled if NOT isAnswered
8. Prevent additional options shuffle after the answer
