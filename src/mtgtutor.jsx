import { select, option } from "@material-tailwind/react";
import React from "react";
import D4 from "../icons/d4.png";
import D6 from "../icons/d6.png";
import D10 from "../icons/d10.png";
import D12 from "../icons/d12.png";
import D20 from "../icons/d20.png";
import background from "../icons/background.jpg";

function mtgTutor() {
  const [value, setValue] = React.useState(D20);
  const [rollValue, setRollValue] = React.useState();
  const [dicerotate, setDicerotate] = React.useState("w-20 h-20");
  const [dicevaluezindex, setDicevaluezindex] = React.useState("");

  const nonShakedDice = dicerotate == "w-20 h-20";

  const handleSelectValue = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  const d4Arr = [1, 2, 3, 4];
  const d6Arr = [1, 2, 3, 4, 5, 6];
  const d10Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const d12Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const d20Arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const handleShake = () => {
    setDicerotate("w-20 h-20 animate-spin ");
    setDicevaluezindex("hidden");
  };
  const handleRoll = () => {
    if (value == D4) {
      const d4RandomValue = d4Arr[Math.floor(Math.random() * d4Arr.length)];
      setRollValue(d4RandomValue);
      setDicerotate("transform:rotateY(360deg) duration-1000");
    } else if (value == D6) {
      const d6RandomValue = d6Arr[Math.floor(Math.random() * d6Arr.length)];
      setRollValue(d6RandomValue);
    } else if (value == D10) {
      const d10RandomValue = d10Arr[Math.floor(Math.random() * d10Arr.length)];
      setRollValue(d10RandomValue);
    } else if (value == D12) {
      const d12RandomValue = d12Arr[Math.floor(Math.random() * d12Arr.length)];
      setRollValue(d12RandomValue);
    } else if (value == D20) {
      const d20RandomValue = d20Arr[Math.floor(Math.random() * d20Arr.length)];
      setRollValue(d20RandomValue);
    }
    setDicerotate("w-20 h-20");
    setDicevaluezindex("");
  };

  return (
    <>
      <div
        id="maincontainer"
        style={{ backgroundImage: `url(${background})` }}
        className="rounded-2xl"
      >
        <div>
          <p className="text-3xl"> Shake & Roll</p>
        </div>
        <div className="p-2">
          <h2 className="text-2xl">Choose Dice Type</h2>
        </div>
        <div className="w-70 p-4">
          <select
            value={value}
            onChange={handleSelectValue}
            className="flex items-center"
            id="selectValue"
          >
            <option value={D4}>D4</option>
            <option value={D6}>D6</option>
            <option value={D10}>D10</option>
            <option value={D12}>D12</option>
            <option value={D20}>D20</option>
          </select>
        </div>
        <div className="p-1 flex justify-center items-center ">
          <div className="p-3">
            <img className={dicerotate} src={value} alt="" />
          </div>
          <div className={dicevaluezindex}>
            <h1 className="text-white">{rollValue}</h1>
          </div>
        </div>
        <div className="flex justify-around w-60 ">
          <button
            addclassname={`text-white px-4 m-4 py-2 rounded focus:outline-none  ${
              nonShakedDice
                ? "custom-button-color border m-4 custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1 grayscale disabled-button"
                : "bg-amber-200 m-4"
            } rounded text-lg `}
            disabled={nonShakedDice}
            onClick={handleRoll}
          >
            Roll
          </button>
          <button onClick={handleShake}>Shake</button>
        </div>
      </div>
    </>
  );
}
export default mtgTutor;
