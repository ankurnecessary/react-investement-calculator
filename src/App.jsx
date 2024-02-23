import { useState } from "react";
import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function changeUserInput(inputIdentifier, newValue) {
    setUserInput((currentUserInput) => {
      return { ...currentUserInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeUserInput}></UserInput>
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
      {inputIsValid && <Result input={userInput}></Result>}
    </>
  );
}

export default App;
