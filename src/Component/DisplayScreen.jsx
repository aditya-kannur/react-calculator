import React, { useState } from 'react';
import Buttons from './Buttons';
import './DisplayScreen.css';

function DisplayScreen() {
  const [inputValue, setInputValue] = useState("");
  const [res, setRes] = useState(0);

  function takeinput(value) {
    setInputValue((prev) => prev + value); // batching 
  }

  function calculateData() {
    setRes(eval(inputValue));
  }

  function deleteData() {
    setInputValue(inputValue.slice(0, -1));
  }

  function allClear() {
    setInputValue("");
    setRes(0);
  }

  return (
    <div>
      <h2>Calculator App</h2>
      <div className="calculator">
        <div className="input-container">
          <input type="text" placeholder='0' value={res} readOnly />
          <input type="text" placeholder='0' value={inputValue} readOnly />
        </div>
        <div className="buttons-container">
          <div className={"all-clear"}><Buttons value={"AC"} takeinput={allClear} /></div>
          <Buttons value={"DEL"} takeinput={deleteData} />
          <Buttons value={"+"} takeinput={takeinput} />

          <Buttons value={"1"} takeinput={takeinput} />
          <Buttons value={"2"} takeinput={takeinput} />
          <Buttons value={"3"} takeinput={takeinput} />
          <Buttons value={"-"} takeinput={takeinput} />

          <Buttons value={"4"} takeinput={takeinput} />
          <Buttons value={"5"} takeinput={takeinput} />
          <Buttons value={"6"} takeinput={takeinput} />
          <Buttons value={"*"} takeinput={takeinput} />

          <Buttons value={"7"} takeinput={takeinput} />
          <Buttons value={"8"} takeinput={takeinput} />
          <Buttons value={"9"} takeinput={takeinput} />
          <Buttons value={"/"} takeinput={takeinput} />

          <div className={"decimal"}><Buttons value={"."} takeinput={takeinput} /></div>
          <div className={"zero"}><Buttons value={"0"} takeinput={takeinput} /></div>
          <div className={"equals"}><Buttons value={"="} takeinput={calculateData} /></div>
        </div>
      </div>
    </div>
  );
}

export default DisplayScreen;
