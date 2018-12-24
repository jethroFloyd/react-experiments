// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const App = () => {
  const buttonText = [10, "Hi"];

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Text
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it in the browser

ReactDOM.render(<App />, document.querySelector("#root"));
