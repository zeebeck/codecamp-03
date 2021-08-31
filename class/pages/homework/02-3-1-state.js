import { useState } from 'react';

export default function Certification () {

  let [ certiNumber, setCertiNumber ] = useState("000000")

  function CertiNumber() {
    certiNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    setCertiNumber(certiNumber)
  }

  return (
    <>
      <div> { certiNumber } </div>
      <button onClick= { CertiNumber }>인증번호전송</button>
    </>
  )
}