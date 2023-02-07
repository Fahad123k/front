import React, { useState, useEffect } from "react";
import GenericLine from "./genericGraph/GenericLine";

function Lines() {


    let val1 = "start_year";
    let val2 = "end_year";

    const [lineVal, setlineVal] = useState(val2);
    const options = [val1, val2];
    const onOptionChangeHandler = (event) => {
        setlineVal(event.target.value);
        // console.log("User Selected Value - ", event.target.value)
    };

    useEffect(() => {
        setlineVal(lineVal);
        // console.log("lineVal",lineVal);
    }, [lineVal]);
    return (
        <div  >
            <select
                onChange={onOptionChangeHandler}
                defaultValue={options[1]}
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
            <GenericLine year={lineVal} />
        </div>
    )
}

export default Lines