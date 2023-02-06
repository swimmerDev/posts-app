import React, {useState} from "react";

function Counter () {
    const [count, setCounter] = useState<number>(0);

    function Increment () {
        setCounter((prev:number) => prev + 1)
    }
  
    function Decrement () {
        setCounter((prev:number) => prev - 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Counter;