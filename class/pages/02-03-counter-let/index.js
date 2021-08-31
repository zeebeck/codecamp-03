

export default function CounterLetPage() {

  function IncreaseCount() {
    let count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById('count').innerText = count;
  }


  return (
    <>
      <div id="count">0</div>
      <button onClick= { IncreaseCount }>카운트증가</button>
    </>
  )
}