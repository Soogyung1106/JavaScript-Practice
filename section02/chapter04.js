//1. Spread 연산자
//-> Spread : 흩뿌리다, 펼치다 라는 뜻
//-> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr[1], arr[2], 5, 6];
let arr2  = [4, ...arr1, 5, 6];
console.log(arr2); //출력: {4, 1, 2, 3, 5, 6}

let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2); //출력: {a: 1, b: 2, c: 3, d: 4}

function funcA(p1, p2, p3){
    console.log(p1, p2, p3); //출력: 1 2 3
}

funcA(...arr1); 

//2. Rest 매개변수
//Rest 키워드 사용
//-> Rest는 나머지, 나머지 매개변수
function funcB(...rest){
    console.log(rest); //출략: [1, 2, 3]
}

funcB(...arr1); 


function funcC(one, ...rest){
    console.log(rest); //출략: [2, 3]
}

funcC(...arr1); 

//Rest 키워드의 잘못된 사용 사례 
//에러 발생 : Rest 매개변수는 마지막에 있어야함

// function funcC(one, ...rest, three){
//     console.log(rest); //출략: [2, 3]
// }
