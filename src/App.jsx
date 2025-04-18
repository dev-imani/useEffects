import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <h1>I am a software Engineer</h1>
      <Timer />
      <Timer2/>
      <Counter/>
    </div>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup to avoid memory leaks
  }, [count]); // Dependency array to control re-renders

  return <h1>I've rendered {count} times!</h1>;
}


function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}



function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}


export default App;