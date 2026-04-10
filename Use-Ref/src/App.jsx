import './App.css'
// import MyComponent from './MyComponent'
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(inputRef);
  });

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.background = "yellow";
    // inputRef.current = inputRef.current + 1;
    // console.log(inputRef.current);
  }

  function handleIncrement(){
    setNumber(number => number+1);
  }
  return (
    <div>
      <p>You clicked {number} timeskk</p>
      <button onClick={handleClick}>
        Add
        </button>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <input ref={inputRef} />
    </div>
  )
}

export default App
