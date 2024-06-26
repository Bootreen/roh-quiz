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
3. Write at least one page component (Home Page)
4. Write css-template for page component that will be used as base for othe page styles
