//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;


let resultFalsy = f1 || f2 || f3 || f4 || f5 || f6 || f7 

if(resultFalsy){ //f1~f7 중에 하나라도 Truthy한 값이 있다면 Truthy가 출력될 것이다.
    console.log("Truthy");
}else{
    console.log("Falsy");
}


//2. Truthy한 값
// => 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};


if(t1){ 
    console.log("Truthy");
}else{
    console.log("Falsy");
}

//3. 활용 사례 
function printName(person){
    // if(person === undefined){
    //     console.log("person의 값이 없음");
    //     return;
    // }

    if(person === null){
        console.log("person의 값이 없음");
    }

    if(!person){ 
        console.log("person은 Falsy한 값")
    }

    if(person){
        console.log("person은 Truthy한 값");
        console.log(person.name);
    }

    //console.log(person.name);
}

let person = null;
printName(person);

let man = {name: "Harry"}
printName(man);