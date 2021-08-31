export default function IncreaseCount() {

  function increaseCount() {
      let count = Number(document.getElementById('count').innerText) + 1
      document.getElementById('count').innerText = count;
  }

  return (
    <>
      <div id="count">0</div>
      <button id="increaseCount" onClick= { increaseCount }>카운트 증가</button>
    </>
  )
}

