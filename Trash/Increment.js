import React, { useState } from 'react';




export default function Increment() {
      // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1); 
  };

    // Function to increment count by 1
    const desc = () => {
        // Update state with incremented value
        setCount(count -1); 
      };
  return (
    <div>
        <button onClick={incrementCount}>Click Here</button>
        <button onClick={desc}>Click Here</button>
        {count}
    </div>
  )
}


