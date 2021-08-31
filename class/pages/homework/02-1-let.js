export default function Greet() {

  function ChangeGreet() {

    document.getElementById("btn").innerText = '반갑습니다.'

  }

  return (
    <button id="btn" onClick= { ChangeGreet }>안녕하세요.</button>
  )
}