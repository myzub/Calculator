// noinspection TypeScriptValidateTypes

import { useState } from "react";
import Button from "./components/Button";
import Sun from "./img/Sun";
import Burger from "./img/Burger";
import Cross from "./img/Cross";
import Square from "./img/Square";
import Dash from "./img/Dash";

const btnValues = [
  ["AC", "<", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["+-", 0, ",", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  const defaultResultFontSize = 88;
  const [resultFontSize, setResultFontSize] = useState(defaultResultFontSize);
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 13) {
      if (removeSpaces(calc.num).length > 5) {
        console.log(resultFontSize);
        if (resultFontSize < 68) {
          return;
        } else setResultFontSize((prevState) => prevState - 9);
      } else setResultFontSize(defaultResultFontSize);

      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const backspaceClickHandler = () => {
    if (removeSpaces(calc.num).length > 6)
      setResultFontSize((prevState) => prevState + 9);
    else setResultFontSize(defaultResultFontSize);

    setCalc((prev) => ({
      ...prev,
      num: toLocaleString(
        Number(removeSpaces(prev.num.toString().slice(0, -1)))
      ),
    }));
  };

  const resetClickHandler = () => {
    setResultFontSize(defaultResultFontSize);
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <>
      <div className="w-[428px] h-[896px] bg-white rounded-[20px] outline mx-auto mt-[50px]">
        <div className="flex justify-end gap-10 pt-5 px-5">
          <Dash />
          <Square />
          <Cross />
        </div>
        <div className="flex gap-[34px] items-center px-5 pt-5">
          <Burger />
          <div className="flex gap-5">
            <button className="w-[126px] px-5 py-2 bg-func-button-color rounded-[100px] text-white text-base font-semibold font-['Poppins']">
              Calculator
            </button>
            <button className="w-[126px] px-5 py-2 rounded-[100px] text-black text-base font-semibold font-['Poppins'] focus:bg-color-red">
              Converter
            </button>
          </div>
          <Sun />
        </div>
        <div className="mt-[80px] px-5">
          <div className="text-zinc-600 text-2xl font-light font-['Poppins'] flex justify-end">
            100 + 49 / 7 - 451 * 30
          </div>
          <div
            id="resultContainer"
            className="flex justify-end text-stone-950 h-[132px] max-w-[388px] truncate items-end font-light font-['Poppins']"
          >
            <span
              id="resultSpan"
              style={{ transition: "font-size 0.3s", fontSize: resultFontSize }}
            >
              {calc.num ? calc.num : calc.res}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-flow-row gap-x-3 gap-y-3.5 m-5 font-normal text-center text-[34px] font-['Poppins']">
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                dark={!(typeof btn === "number" || btn === "+-" || btn === ",")}
                addClass={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "AC"
                    ? resetClickHandler
                    : btn === "<"
                    ? backspaceClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
