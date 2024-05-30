//스코프
//-> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
//-> 전역 스코프 : 전체 영역에서만 접근 가능
//-> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA(){
    let b = 2; //지역 스코프 
    console.log(a);
}

funcA(); //출력 : 1
//console.log(b); //출력 : Error

if(true){
    let c = 1;
}

for(let i = 0; i < 10; i++){ //지역 스코프
    let d = 1; 
}

//console.log(i); //출력 : Error


for(let i = 0; i < 10; i++){ //지역 스코프
    let d = 1; 
    function funcB() { //전역 스코프(흔하지 않은 케이스)
        console.log("funcB")
    }
}

funcB();
