export default function Certification() {


  function CertiNumber() {
    let certiNumber = document.getElementById('count').innerText
    certiNumber = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('count').innerText = certiNumber;
  }


  return (
    <>
      <div id="count">000000</div>
      <button id="btn" onClick= { CertiNumber }>인증번호전송</button>
    </>
  )
}