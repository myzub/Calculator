import { useState } from "react";
import Button from "./components/Button";
import Sun from "./img/Sun";
import Burger from "./img/Burger";
import Cross from "./img/Cross";
import Square from "./img/Square";
import Dash from "./img/Dash";
import Backspace from "./img/Backspace";

function App() {
  const defaultResult = 0;
  const defaultResultFontSize = 88;
  const [result, setResult] = useState(defaultResult);
  const [resultFontSize, setResultFontSize] = useState(defaultResultFontSize);

  function enterDigit(value) {
    const newResult = result * 10 + value;
    const newLength = newResult.toString().length;

    if (newLength > 13) {
      return;
    } else if (newLength > 6) {
      setResultFontSize((prevState) => prevState - 8);
    }
    setResult(newResult);
  }

  function deleteDigit() {
    const newResult = result / 10;
    const newLength = newResult.toString().length;

    setResult(Math.floor(newResult));

    if (newLength > 7) {
      setResultFontSize((prevState) => prevState + 8);
    } else {
      setResultFontSize(defaultResultFontSize);
    }
  }

  function clearResult() {
    setResult(defaultResult);
    setResultFontSize(defaultResultFontSize);
  }

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
            100 + 49 + 7 + 451 + 30 {/*TODO*/}
          </div>
          <div
            id="resultContainer"
            className="flex justify-end text-stone-950 h-[132px] max-w-[388px] truncate items-end font-light font-['Poppins']"
          >
            <span
              id="resultSpan"
              style={{ transition: "font-size 0.3s", fontSize: resultFontSize }}
            >
              {result}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-x-3 gap-y-3.5 m-5 font-normal text-center text-[34px] font-['Poppins']">
          <Button
            value="AC"
            dark={true}
            addClass="text-center text-[34px] font-medium"
            onClick={() => clearResult()}
          />
          <Button
            dark={true}
            value={<Backspace />}
            onClick={() => deleteDigit()}
          />
          <Button
            value="%"
            dark={true}
            addClass="text-5xl"
            onClick={setResult}
          />
          <Button
            value="÷"
            dark={true}
            addClass="text-5xl"
            // onClick={setResult}
          />

          <Button value={7} onClick={() => enterDigit(7)} />
          <Button value={8} onClick={() => enterDigit(8)} />
          <Button value={9} onClick={() => enterDigit(9)} />
          <Button
            value="x"
            dark={true}
            addClass="text-5xl rotate-45"
            // onClick={setResult}
          />

          <Button value={4} onClick={() => enterDigit(4)} />
          <Button value={5} onClick={() => enterDigit(5)} />
          <Button value={6} onClick={() => enterDigit(6)} />
          <Button
            value="-"
            dark={true}
            addClass="text-5xl"
            // onClick={setResult}
          />

          <Button value={1} onClick={() => enterDigit(1)} />
          <Button value={2} onClick={() => enterDigit(2)} />
          <Button value={3} onClick={() => enterDigit(3)} />
          <Button
            value="+"
            dark={true}
            // onClick={setResult}
          />

          <Button
            value={
              <img
                src="src/img/plus-minus.png"
                alt="&#177;"
                className=" w-[24px] m-auto"
              />
            }
          />
          <Button value={0} onClick={() => enterDigit(0)} />
          <Button
            value="."
            addClass="text-[44px]"
            // onClick={setResult}
          />
          <Button
            value="="
            dark={true}
            addClass="text-[44px]"
              // onClick={setResult}
          />
        </div>
      </div>
    </>
  );
}

export default App;
