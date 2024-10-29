import React from "react";

function InputBox({ currency, currencyList, onSelectChange, className="", disabled=false, amount, onInputChange}) {
  return (
    <span className={"h-fit w-fit bg-yellow-800" + ` ${className}`}>
      <select name="Select Currency" id="Select Currency" value={currency} onChange={(e)=>onSelectChange(e)}>
        {Object.keys(currencyList).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <input type="number" disabled={disabled} value={amount} onChange={(e)=>onInputChange(e)}/>
    </span>
  );
}

export default InputBox;
