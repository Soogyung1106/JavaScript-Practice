//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20"

const result = num + str //숫자를 String 형으로 형변환 했다. 
console.log(result) //출력결과 : 1020



//2. 명시적 형 변환
//-> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시하는 것
//-> 문자열 -> 숫자 
let str1 = "10"
let strToNum1 = Number(str1)
console.log(strToNum1) //출력결과 : 10

let str2 = "10개"
let strToNum2 = parseInt(str2)
console.log(strToNum2) //출력결과 : 10

//-> 숫자 -> 문자열 
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.") //출력결과 : 20입니다.
