# Day8



## [프로그래머스 Level-1] 서울에서 김서방 찾기

###### 문제 설명

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

##### 제한 사항

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

##### 입출력 예

| seoul           | return              |
| --------------- | ------------------- |
| ["Jane", "Kim"] | "김서방은 1에 있다" |

##### 내 풀이

```js
function solution(seoul) {
    var answer = '';
    answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`   
    return answer;
}
```



## [프로그래머스 Level-1] 문자열 다루기 기본

###### 문제 설명

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

##### 제한 사항

- `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

##### 입출력 예

| s      | return |
| ------ | ------ |
| "a234" | false  |
| "1234" | true   |

##### 내 풀이

```js
# indexOf 메소드 사용
function solution(s) {
    var answer = true;
    if ((s.length == 4 || s.length == 6) && (+s == parseInt(s))) {
        answer = true;
        } else {
        answer = false;
    }
    return answer;
}

# filter 메소드 사용
function solution(seoul) {
  let answer = '';
  seoul.filter((item, index) => (item === "Kim") ? answer = index: "")
  return `김서방은 ${answer}에 있다`
}
```



## [프로그래머스 Level-1] 약수의 합

###### 문제 설명

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

##### 제한 사항

- `n`은 0 이상 3000이하인 정수입니다.

##### 입출력 예

| n    | return |
| ---- | ------ |
| 12   | 28     |
| 5    | 6      |

###### 입출력 예 설명

입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

**내 풀이**

```js
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        (n % i == 0) ? answer += i : answer
    }
    return answer;
}
```

