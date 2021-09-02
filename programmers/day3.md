# day 3

**18. 조건문 연습**

> **`문제 설명`**
>
> input1, input2에는 boolean 타입인 true, false가 입력됩니다.
>
> 둘 중에 하나라도 true라면 "true"
>
> 두 개 모두 false면 "false"라는 문구를 띄워주세요.
>
> **`입력 인자`**
>
> - input1 - boolean 타입인 true / false
> - input2 - boolean 타입인 true / false
>
> **`주의 사항`**
>
> - || (OR) 연산자 또는 &&(AND) 연산자를 이용해 보세요.
>
> **`예상 결과`**
>
> ```js
> boolean(true, false) // true
> boolean(false, true) // true
> boolean(false, false) // false
> ```
>
> **My Answer**
>
> ```js
> function boolean(input1, input2) {
> 
> 	if(조건1) {
> 		console.log("")
> 	}
> }
> 
> 
> function boolean(input1, input2) {
>   if((input1 === true) || (input2 === true)) {
>     console.log(true);
>   } else {
>     console.log(false);
>   }
> }
> ```

**19. 홀짝**

> **`문제 설명`**
>
> 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.
>
> 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.
>
> **`입력 인자`**
>
> - num은 0 이상인 자연수
>
> **`주의 사항`**
>
> - if는 함수 안에서 사용됩니다.
> - console.log("Even")으로 입력하면 "Even"이라는 값이 출력됩니다.
>
> **`예상 결과`**
>
> ```js
> evenOdd(12) // "Even"
> evenOdd(15) // "Odd"
> evenOdd(0)  // "Zero"
> ```
>
> **My Answer**
>
> ```js
> function evenOdd(num){
> 	if (조건1) {
> 		console.log("조건1 결과");
> 	} else if (조건2) {
> 		console.log("조건2 결과");
> 	} else if (조건3) {
> 		console.log("조건3 결과");
> 	}
> }
> 
> //
> 
> function evenOdd(num) {
> 	if (num === 0) {
> 		console.log("Zero");
> 	} else if (num % 2 === 0) {
> 		console.log("Even");
> 	} else {
> 		console.log("Odd");
> 	}
> ```

**20. 온도**

> **`문제 설명`**
>
> 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
>
> 입력된 값에 따라 알맞은 문구를 띄워주세요
>
> 18이하면 "조금 춥네요"
>
> 19~23이면 "날씨가 좋네요"
>
> 24이상이면 "조금 덥습니다"
>
> **`입력 인자`**
>
> - num은 10~30까지의 자연수
>
> **`주의 사항`**
>
> - && 연산자가 필요합니다.
>
> **`예상 결과`**
>
> ```js
> temperature(13)  // "조금 춥네요"
> temperature(23)  // "날씨가 좋네요"
> temperature(27)  // "조금 덥습니다"
> ```
>
> **My Answer**
>
> ```js
> function temperature(num){
> 	if (조건1) {
> 		console.log("조건1 결과");
> 	} else if (조건2) {
> 		console.log("조건2 결과");
> 	} else if (조건3) {
> 		console.log("조건3 결과");
> 	}
> }
> 
> 
> //
> function temperature(num) {
>   if (num > 24) {
>     console.log('조금 덥습니다.');
>   } else if (num >19) {
>     console.log('날씨가 좋네요.');
>   } else {
>     console.log('조금 춥네요.');
>   }
> }
> ```

**21. 며칠**

> **`문제 설명`**
>
> 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
>
> 각 조건에 해당하는 알맞은 값을 입력해주세요.
>
> **`입력 인자`**
>
> - month는 1~12의 숫자
>
> **`주의 사항`**
>
> - || 연산자가 필요합니다.
> - 2월은 28일로 계산합니다.
>
> **`예상 결과`**
>
> ```js
> days(1) // 31
> days(2) // 28
> days(4) // 30
> ```
>
> **My Answer**
>
> ```js
> // 1월 : 31일
> // 2월 : 28일
> // 3월 : 31일
> // 4월 : 30일
> // 5월 : 31일
> // 6월 : 30일
> // 7월 : 31일
> // 8월 : 31일
> // 9월 : 30일
> // 10월 : 31일
> // 11월 : 30일
> // 12월 : 31일
> 
> //
> function days(month) {
> 	if (month == 1 || month == 3 || month == 5 || 
>       month == 7 || month == 8 || month == 10 ||
>       month == 12) 
>     {
> 		  console.log("31")
> 	  } else if(month == 4 || month == 6 ||
>               month == 9 || month == 11) 
>     {
> 		  console.log("30")
> 	  } else {
> 			console.log("28")
> 	  }
> }
> ```
