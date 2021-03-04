import React from "react";
import "./style.css";

function Arrow() {
  return (
    <div id="arrowAnim" className="">
      <div className="arrowSliding">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay1">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay2">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay3">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Arrow;
