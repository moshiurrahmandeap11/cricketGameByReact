import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const counterStyle ={
        border: "3px solid green",
        borderRadius: "20px",
        padding: "10px",
        marginBottom: "5px"
    }
    return (
        <div style={counterStyle}>
            <h3>Count : {count} </h3>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}