import { useState } from 'react';
export const MyComponent = () => {
  useEffect(() => {
    console.log('counter ::>', counter);
  }, [counter]);
  const currentDate = new Date().toISOString();
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const increment = () => setCounter(counter + 1);
  const reset = function () {
    setCounter(0);
  };

  return (
    <>
      <div>{counter}</div>;<button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <h1>Current Date: {currentDate} </h1>
    </>
  );
};
