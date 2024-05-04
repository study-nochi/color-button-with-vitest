import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColorClass =
    buttonColor === "medium-violet-red"
      ? "medium-violet-blue"
      : "medium-violet-red";
  const nextColorTitleCalse = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? "gray" : buttonColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(nextColorClass)}
        disabled={disabled}
      >
        Change to {nextColorTitleCalse}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
