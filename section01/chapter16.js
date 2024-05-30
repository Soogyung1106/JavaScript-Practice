//1. 상수 객체 
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; // 삭제 

console.log(animal); 
//출력:
//age: 2
//name: "까망이"
//type: "고양이"

//animal = 10;
//console.log(animal); //에러뜸, 상수 객쳋이기 때문에 값 변경이 불가하다.

//2. 메서드 
//-> 값이 함수인 프로퍼티를 말함

const person = {
    name: "스누피",

    //메서드
    sayHi() {
        console.log("안녕");
    },
    
};

person.sayHi();
person["sayHi"]();