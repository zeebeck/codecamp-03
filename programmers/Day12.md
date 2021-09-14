# Day12



## [프로그래머스 Level-1] 자연수 뒤집어 배열로 만들기

###### 문제 설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

##### 제한 조건

- n은 10,000,000,000이하인 자연수입니다.

##### 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

##### 내 풀이

```js
function solution(n) {
    let answer = [];
    answer = String(n).split('').reverse().map(Number);
    return answer;
}
```



## [프로그래머스 Level-1] 이상한 문자 만들기

###### 문제 설명

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

##### 제한 사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

##### 입출력 예

| s                 | return            |
| ----------------- | ----------------- |
| "try hello world" | "TrY HeLlO WoRlD" |

##### 입출력 예 설명

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

**내 풀이**

```js
function solution(s) {
    return s.split(' ').map( item => {
        let result = '';
        for (let i = 0; i < item.length; i++) {
            if (i % 2) {
                result += item[i].toLowerCase();
            } else {
                result += item[i].toUpperCase();
            }
        }
        return result;
    }).join(' ');
}
```

# Day11



## [프로그래머스 Level-1] 자연수 뒤집어 배열로 만들기

###### 문제 설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

##### 제한 조건

- n은 10,000,000,000이하인 자연수입니다.

##### 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

##### 내 풀이

```js
function solution(n) {
    let answer = [];
    answer = String(n).split('').reverse().map(Number);
    return answer;
}
```



## [프로그래머스 Level-1] 나누어 떨어지는 숫자 배열

###### 문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

##### 제한 사항

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

##### 입출력 예

| arr           | divisor | return        |
| ------------- | ------- | ------------- |
| [5, 9, 7, 10] | 5       | [5, 10]       |
| [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
| [3,2,6]       | 10      | [-1]          |

##### 입출력 예 설명

입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

**내 풀이**

```js
function solution(arr, divisor) {
    let answer = [];
    for (let el of arr) {
      if (el % divisor === 0) {
        answer.push(el)
      }
      answer.sort((a, b) => a - b)
    }

    if (answer.length === 0) {
      answer.push(-1)
    }
  return answer;
}
```

