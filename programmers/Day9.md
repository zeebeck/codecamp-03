# Day9



## [프로그래머스 Level-1] x만큼 간격이 있는 n개의 숫자

###### 문제 설명

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

##### 제한 사항

- #### 제한 조건

  - x는 -10000000 이상, 10000000 이하인 정수입니다.
  - n은 1000 이하인 자연수입니다.

##### 입출력 예

| x    | n    | answer       |
| ---- | ---- | ------------ |
| 2    | 5    | [2,4,6,8,10] |
| 4    | 3    | [4,8,12]     |
| -4   | 2    | [-4, -8]     |

##### 내 풀이

```js
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}
```



## [프로그래머스 Level-1] 자릿수 더하기

###### 문제 설명

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

##### 제한사항

- N의 범위 : 100,000,000 이하의 자연수

##### 제한 사항

- `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

##### 입출력 예

| N    | answer |
| ---- | ------ |
| 123  | 6      |
| 987  | 24     |

##### 입출력 예 설명

**입출력 예 #1**
문제의 예시와 같습니다.

**입출력 예 #2**
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

**내 풀이**

```js
const solution = (n) => String(n).split("").reduce((acc, cur) => acc + parseInt(cur), 0) 
```