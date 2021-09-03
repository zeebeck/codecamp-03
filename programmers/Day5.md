# day 5

#### 41. 조건문 실전 적용 - 점수에 따른 등급

> 
>
> **`문제 설명`**
>
> <img width="365" alt="1" src="https://user-images.githubusercontent.com/79819941/131931392-4936ee36-0b52-441f-b6ad-2f761bfed37d.png"> 
>
> 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
>
> 100~90 → "A"
>
> 89~80 → "B"
>
> 79~70 → "C"
>
> 69~60 → "D"
>
> 59점 이하는 "F"
>
> 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.
>
> **`입력 인자`**
>
> - score - 숫자열
>
> **`주의 사항`**
>
> - 
>
> **`예상 결과`**
>
> ```jsx
> grade(105)  // "잘못된 점수입니다"
> grade(-10)  // "잘못된 점수입니다"
> grade(97)   // "A"
> grade(86)   // "B"
> grade(75)   // "C"
> grade(66)   // "D"
> grade(52)   // "F"
> ```
>
> **My Answer**
>
> ```js
> function grade(score) {
>   let result = "";
>   
>   if (score >= 90 && score === 100) {
>     result = "A"
>   } else if (score >= 80 && score <= 89) {
>     result = "B"
>   } else if (score >= 70 && score <= 79) {
>     result = "C"
>   } else if (score >= 60 && score <= 69) {
>     result = "D"
>   } else if (score = 0 && score <= 59) {
>     result = "F"
>   } else if (score <= 0 || score > 100) {
>     result = "잘못된 점수입니다."
>   }
>   return result
> }
> 
> grade(-1)
> ```

#### 43. 마이페이지

> **`문제 설명`**
>
> ![2](https://user-images.githubusercontent.com/79819941/131932281-3fc9952c-c1cd-47a7-a41c-3f3d869c5606.png) 
>
> 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.
>
> 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고,
>
> "의류"를 구매한 횟수에 따라 등급을 나타내세요.
>
> 등급표 "0~2"  ⇒ Bronze
>
> "3~4" ⇒ Silver
>
> 5이상 ⇒ Gold
>
> **`입력 인자`**
>
> - X
>
> **`주의 사항`**
>
> - 반복문을 통해 문제를 풀어야 합니다.
> - myShopping 내용을 직접 수정하면 안 됩니다.
> - 예상 결과에 나온 문구와 형식이 같아야 합니다.
>
> **`예상 결과`**
>
> ```m
> 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.
> ```
>
> **My Answer**
>
> ```js
> const myShopping = [
> 		{ category: "과일", price: 12000　},
> 		{ category: "의류", price:10000　 },
> 		{ category: "의류", price: 20000　},
> 		{ category: "장난감", price: 9000 },
> 		{ category: "과일", price: 5000　 },
> 		{ category: "의류", price: 10000  },
> 		{ category: "과일", price: 8000　　},
> 		{ category: "의류", price: 7000　　},
> 		{ category: "장난감", price: 5000  },
> 		{ category: "의류", price: 10000　 },
> ]
> 
> let count = (myShopping.length - 1)
> 
> let price = myShopping.reduce((acc, cur) => {
>   return acc + cur.price
> }, 0)
> 
> let grade = ((count > 0 && count < 3) ? "Bronze" : (count > 2 && count < 5) ? "Silver" : (count > 4) ? "Gold" : "해당 등급이 없습니다.")
> 
> console.log("의류를 구매한 횟수는 총 " + count + "회 금액은 " + price + "원이며 등급은 " + grade + "입니다.")
> 
> // '의류를 구매한 횟수는 총 9회 금액은 96000원이며 등급은 Gold입니다.'
> ```