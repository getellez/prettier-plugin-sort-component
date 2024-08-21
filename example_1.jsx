import { useState } from "react";
export const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const reset = function(){
    setCounter(0);
  }
  useEffect(() => {
    console.log('counter ::>', counter)
  }, [counter])
  
  return (
  <>
    <div>{counter}</div>;
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
  </>
  )
};
