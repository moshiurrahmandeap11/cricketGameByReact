import { useState } from "react";

export default function Batsman () {

    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);

    const countBalls = () => {
        const updateBalls = balls + 1;
        setBalls(updateBalls)
        if ( updateBalls === 6){
            setOvers(overs + 1)
            setBalls(0)
        } else{
            setBalls(updateBalls)
        }
    }

    const handleSingle = () => {
        const newSingle = runs + 1;
        // const updateBalls = balls + 1;
        // setBalls(updateBalls)
        countBalls()
        setRuns(newSingle)
    }

    const handleDouble = () => {
        const newDouble = runs + 2;
        // const updateBalls = balls + 1;
        // setBalls(updateBalls)
        countBalls()
        setRuns(newDouble)
    }

    const handleFour = () => {
        const newFour = runs + 4;
        countBalls();
        setRuns(newFour)
    }

    const handleSix = () => {
        const newSix = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        countBalls();
        setRuns(newSix)
    }

    const flexStyle = {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
    };

    const getMilestoneMessage = () => {
        if(runs >= 100){
            return "Century! Your're On fire🔥"
        } else if (runs >= 50){
            return "Half Century! Keep Going"
        } else{
            return null
        }
    }

    const resetGame = () => {
        setRuns(0);
        setSixes(0);
        setBalls(0);
        setOvers(0);
    }

    return(
        <div>
            <h3>Player : Bangladesh Batsman</h3>
            <p>Your Sixes : {sixes}</p>
            {
                getMilestoneMessage() && <p>{getMilestoneMessage()}</p>
            }
            <h1>Score : {runs} </h1>
            <div style={flexStyle}>
                <p>Total Balls : {balls} </p> 
                <p>Total Overs : {overs} </p>
            </div>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleDouble}>Doubles</button>
            <button onClick={handleFour}>Fours</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
}