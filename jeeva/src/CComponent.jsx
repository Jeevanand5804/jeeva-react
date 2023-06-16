import React from "react";

function CComponent(props) {
  return (
    <div style={{ backgroundColor: "red", color: "white",padding:"10px"}}>
      <label for="cComponent">C-ComponentInput</label>
      <input
        type="text"
        name="C"
        id="cComponent"
        onChange={(e) => props.onChangeFromC(e.target.value)}
      />
      <h4>CComponent:</h4>
      <h6>Value From A Component:</h6>
      <p style={{ backgroundColor: "yellow", color: "black" }}>
        {props.CComponentValue}
      </p>
    </div>
  );
}

export default CComponent;
