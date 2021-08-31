import { useState } from 'react';

export default function Greet() {
  let [ hello, setHello ] = useState('안녕하세요.');

  function ChangeGreet() {
    setHello('반갑습니다.');
  }

  return (
    <button id="btn" onClick= { ChangeGreet }> { hello }</button>
  )
}
