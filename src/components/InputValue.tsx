import React, {useState} from "react";

function InputValue () {
    const [value, setValue] = useState<string>("");

    return (
      <>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      </>
    );
}

export default InputValue;