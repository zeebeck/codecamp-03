export default function MapFruitsPage() {

  const fruits = [
    { number: 1, title: "레드향" },  // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 레드향</div>
    { number: 3, title: "산청딸기" }, // <div>3 레드향</div>
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ]


  // const aaa = fruits.map(item => (<div>{item.number}. {item.title}</div>))
  // <div>1 레드향</div>y


  return (
    // <div>{aaa}</div>
    <div>
      { fruits.map((item) => {
        <div>
          <span>{item.number}</span>
          <h1>{item.title}</h1>
        </div>
      })
      }
    </div>
  )
}

