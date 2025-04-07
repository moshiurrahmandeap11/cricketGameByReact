import './App.css';
import Batsman from './batsman';
import Counter from './counter';

function App() {

  // const handleClick = () => {
  //   alert('I am clicked')
  // }

  // const handleClick5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum)
  // }

  return (
    <>
      <h1>React Core Concept Part 2</h1>
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => handleClick5(10)}>Click Me1</button> */}
      <Batsman></Batsman>
      <Counter></Counter>
    </>
  )
}

export default App
