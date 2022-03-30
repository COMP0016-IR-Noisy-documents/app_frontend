import React from "react";
import { useState } from "react";

import "./FilterElement.css";

// By Tim Widmayer, Thatchawin Leelawat

function FilterElement(props) {
  const [click, setClick] = useState("+");

  return (
    <div className={`filterElement ${props.isFirst ? "" : "notFirst"}`}>
      <div
        className="filterName"
        onClick={() => {
          if (click === "+") {
            setClick("v");
          } else {
            setClick("+");
          }
        }}
      >
        {props.name}
        <span className={click === "+" ? "add" : "v"}> {click} </span>
      </div>
      {/* only display child element when clicked */}
      {click === "v"
        ? props.elementList.map((array) => {
            return (
              <div
              className={`filterList ${props.status.includes(array.language) ? "isChosen" : ""}`}
              key={array.key}
                onClick={() => {
                  //args = current status, current filter, type
                  props.onClick(array.language, props.name);
                }}
              >
                <p>{array.language}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default FilterElement;
