//1. 함수 표현식
//이름 있는 원래 함수
function funcA(){
    console.log("funcA");
}

let varA = funcA; 


let varB = function () {
    console.log("funcB");
}


//2. 화살표 함수
// 이름 없는 함수 
let varC = function() {
    return 1;
}

//펑션 키워드 삭제 => 화살표 키워드 추가  
let varD = () => {
    return 1;
}

//중괄호 생략
let varE = () => 1;

//매개변수가 있는 화살표 함수
let varF = (value) => value + 1;


let varG = (value) => {
    console.log(value);
    return value + 1;
}


varA(); //출력: funcA
varB(); //출력: funcB
console.log(varC()); //출력: 1
console.log(varD()); //출력: 1 
console.log(varE()); //출력: 1
console.log(varF()); //출력: NaN
console.log(varF(10)); //출력: 11
console.log(varG(10)) //출력: 10 11


