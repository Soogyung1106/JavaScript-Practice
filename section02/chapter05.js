//1. 원시 타입
let p1 =1;
let p2 = p1;

P2 = 2; 
//p2의 값이 1에서 2로 바뀔 때, 메모리 상으로 1이 차지하던 공간은 그대로이고 2라는 값을 저장하는 새로운 공간이 생기게 된다. 
//그리고 p2가 그 새로운 메모리를 가리킨다. 
//즉 실제 메모리리의 값은 수정되지 않는다. 

//원시타입
// 불변값이다(메모리 값 수정 x)
//Number, String, Boolean 등..

//2. 객체 타입 
//2-1. 객체의 얕은 복사 
let o1 = {name: "James"};
let o2 = o1;  

//o2는 o1의 메모리 주소와 프로퍼티를 공유하게 된다. 
//원본 객체가 수정될 수 있어 위험하다.

//원시타입
//가변값이다(메모리 값 수정 o)
//Object, Array, Function 등..


//2-2. 객체의 깊은 복사 
let o3 = {...o1};  

//Spread 연산자를 사용하면, 새로운 객체를 생성하된다.
// 메모리 주소가 따로 생성이 되고, 프로퍼티 값만 복사된다. 
//원본 객체가 수정될 일이 없어 안전하다. 



//3. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다. 
console.log(o1 === o2); //출력: true
console.log(o1 === o3); //출력: false


//JSON.stringfy() : 자바스크립트 내장함수
//-> 객체를 문자열로 반환하는 기능
console.log(
    JSON.stringify(o1) === JSON.stringify(o3) //출력: true
); 

console.log(
    JSON.stringify(o1) === JSON.stringify(o2) //출력: true
);

console.log(JSON.stringify(o1)); //출력: {"name": "홍길동"}

