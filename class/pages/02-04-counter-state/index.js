import { useState } from 'react';

export default function CounterStatePage() {

  // const [ state이름, state저장도구 ] = useState("초기값");

  const [ count, setCount ] = useState(0);



  function IncreaseCount() {
    setCount(count + 1)
  }


  return (
    <>
      <div>{ count }</div>
      <button onClick= { IncreaseCount }>카운트증가</button>
    </>
  )
}