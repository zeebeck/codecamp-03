import { useState } from 'react';

export default function IncreaseCount() {

  let [ count, setCount ] = useState(0); 

  function increaseCount() {
    setCount(count + 1)

  }

  return (
    <>
      <div> { count } </div>
      <button onClick = { increaseCount }>카운트증가</button>
    </>
  )
}