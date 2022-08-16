import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabledClick, setDisabledClick] = useState(0)
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
  useEffect(()=> {
    let autoDecrement = null;
    if(!counter) {
      setDisabledClick(false)
    }
    if(disabledClick) {
      autoDecrement = setInterval(()=> {
        if(counter && counter < 1000) {
          setCounter(count => count -1)
        }
      }, 1000)
    }
    return () => clearInterval(autoDecrement)
  }, [counter])


  return (
    <div className="App">
       <h1>Task with counter using react</h1>
       <h2>Previous task with modernised autodecrement</h2>
      <div className="counter">
      <h2>Counter</h2>
      <span className="counter__output">
        <input className='input_place' type={'number'} value={counter} placeholder = {"Insert your number"} 
        onChange={e=>{
            setCounter(+e.target.value> 1000 ? counter : e.target.value)
            setDisabledClick(true)
        }}  />
      </span>
      <div className="btn__container">
        <button className="control__btn" onClick={increaseCounter}>+</button>
        <button className="control__btn" onClick={decreaseCounter}>-</button>
        <button className="reset" onClick={resetCounter}>Reset</button>
        
      </div>
      </div>
    </div>
  );
}

export default App;

