import React, { useState, useEffect } from "react";
import GenericPie from "./pieCharts/GenericPie";

import "./pie.css";

function Pies() {
  const [pieVal, setpieVal] = useState(null);

  const options = ["region", "topic", "country", "pestle", "source"];
  const onOptionChangeHandler = (event) => {
    setpieVal(event.target.value);
    // console.log("User Selected Value - ", event.target.value)
  };

  useEffect(() => {
    setpieVal("region");
    console.log("pies");
  }, []);

  return (
    <div className="alignment">
      <select
        onChange={onOptionChangeHandler}
        defaultValue={options[0]}
        // style={Mystyles}
        className="Mystyles"
      >
        {/* <option></option> */}
        {options.map((option, index) => {
          return (
            <option key={index}
              // style={aligned}
              className="big"
            >

              {option}
            </option>
          );
        })}
      </select>

      <GenericPie param={pieVal} />
    </div>
  );
}

// const Mystyles = {
//   borderColor: "rgb(53, 162, 235)",
//   backgroundColor: "rgba(53, 162, 235, 0.5)",
//   height: 40,
//   width: 120,
//   textTransform: "capitalize",
// };

// const aligned = {
//   textTransform: "capitalize",
//   // alignItem: 'center',
//   color: "grey",

//   fontWeigth: 800,
//   // textAligne:"center",
//   // margin:"10px 10px 10px"
// };
export default Pies;
