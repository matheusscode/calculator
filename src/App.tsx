import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");

  function calc() {
    if (number.length >= 1 && number.slice(-1) !== " ") {
      setNumber(eval(number).toString());
    }
  }

  function deleteNumber() {
    if (number.slice(-1) === " ") {
      setNumber(number.substring(0, number.length - 3));
    } else if (number.slice(-2) === "0.") {
      setNumber(number.substring(0, number.length - 2));
    } else {
      setNumber(number.substring(0, number.length - 1));
    }
  }

  function addSimbol(simbol: string) {
    if (number.slice(-1) !== " " && number.slice(-1) !== ".") {
      setNumber(number + simbol);
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-header">
          <h1>Calculator</h1>
          <div className="screen">
            <p>{number}</p>
          </div>
        </div>
        <div className="calculator-body">
          <div className="line 5">
            <button onClick={() => setNumber("")}>c</button>
            <button onClick={() => number.length >= 1 && addSimbol("**")}>
              √
            </button>
            <button onClick={() => number.length >= 1 && addSimbol("%")}>
              %
            </button>
            <button onClick={() => number.length >= 1 && addSimbol("/")}>
              ÷
            </button>
          </div>

          <div className="line 4">
            <button onClick={() => setNumber(number + "7")}>7</button>
            <button onClick={() => setNumber(number + "8")}>8</button>
            <button onClick={() => setNumber(number + "9")}>9</button>
            <button onClick={() => number.length >= 1 && addSimbol("*")}>
              x
            </button>
          </div>

          <div className="line 3">
            <button onClick={() => setNumber(number + "4")}>4</button>
            <button onClick={() => setNumber(number + "5")}>5</button>
            <button onClick={() => setNumber(number + "6")}>6</button>
            <button onClick={() => number.length >= 1 && addSimbol("-")}>
              -
            </button>
          </div>

          <div className="father">
            <div>
              <div className="line">
                <button onClick={() => setNumber(number + "1")}>1</button>
                <button onClick={() => setNumber(number + "2")}>2</button>
                <button onClick={() => setNumber(number + "3")}>3</button>
              </div>
              <div className="line">
                <button onClick={() => setNumber(number + "0")}>0</button>
                <button onClick={() => number.length >= 1 && addSimbol(".")}>
                  .
                </button>
                <button onClick={calc}>=</button>
              </div>
            </div>

            <div className="plus">
              <button onClick={() => number.length >= 1 && addSimbol("+")}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
