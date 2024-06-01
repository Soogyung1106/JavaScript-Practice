//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three); //출력: 1, 2, 3

let [a, b] = arr;
console.log(a, b); //출력: 1, 2

let [A, B, C, D] = arr;
console.log(D); //출력: undefined

let [e, f, g, h=4] = arr;
console.log(e, f, g, h);

//2. 객체의 구조 분해 할당 
let person = {
    name: "James",
    age: 26,
    hobby: "독서",
};

//let {name, age, hobby, extra} = person;
//console.log(name, age, hobby, extra); //출력: James, 26, 독서, undefined


let {
    age: myAge, //person 객체의 age 변수가 myAge에 전달된다.
    hobby,
    name,
    extra = "hello",
} = person;

console.log(name, myAge, hobby, extra); //출력: James, 26, 독서, hello


//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra})=>{
    console.log(name, age, hobby, extra);  //출력: James 26 독서 undefined
}

func(person);

