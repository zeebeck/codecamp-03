# Day7



## [프로그래머스 Level-1] 짝수와 홀수

##### **문제 설명**

##### 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.제한 조건

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

##### 제한 조건

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

##### 입출력 예

| num  | return |
| ---- | :----: |
| 3    | "Odd"  |
| 4    | "Even" |

**내 풀이**

```js
function solution(num) {
    let answer = '';
    answer = (num % 2 == 0) ? "Even" : "Odd"
    return answer;
}
```



## [프로그래머스 Level-1] 평균 구하기

###### 문제 설명

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요

##### 제한사항

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

------

#### 입출력 예

| arr       | return |
| --------- | :----: |
| [1,2,3,4] |  2.5   |
| [5,5]     |   5    |

##### 내 풀이

```js
function solution(arr) {
    let answer = 0;
    answer = arr.reduce((item, arr) => item + arr) / arr.length;
    return answer
}
```



## [프로그래머스 Level-1] 가운데 글자 가져오기

###### 문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

###### 재한사항

- s는 길이가 1 이상, 100이하인 스트링입니다.

##### 입출력 예

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

**내 풀이**

```js
function solution(s) {
    let answer = '';
    if (s.length % 2 == 0) {
        const a = s.length / 2;
        const b = a - 1;
        answer += s[b];
        answer += s[a];
        
    } else {
        answer += s[parseInt(s.length / 2)];
    }
    return answer;
}
```

