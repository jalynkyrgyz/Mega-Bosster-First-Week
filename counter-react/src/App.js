import React, {useState} from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(1000);

  // increse
  const increaseCounter = () => {
    setCounter(count => count + 1);
  }

  //decrease counter
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
    
  };
 
  //reset counter 
  const resetCounter = () =>{
    setCounter(0)
  }

   // autodecrement
   const autoDecrement = () => {
    
    setInterval(() => {     
       setCounter((count) => count - 1)
   },1000)      
   }


  return (
    <div className="App">
       <h1>Task with counter using react</h1>
      <div className="counter">
      <h2>Counter</h2>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increaseCounter}>+</button>
        <button className="control__btn" onClick={decreaseCounter}>-</button>
        <button className="reset" onClick={resetCounter}>Reset</button>
        <button className='auto_decrement' onClick={autoDecrement}> Auto decrement </button>
      </div>
      </div>
    </div>
  );
}

export default App;

