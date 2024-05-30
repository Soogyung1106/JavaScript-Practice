//1. 콜백함수
function main1(value){
    console.log(value);
}

function sub1(){
    console.log("I am sub");
}

main1(sub1); //출력: sub 함수가 통째로 출력됨


//2. 콜백함수
function main2(value){
    value();
}

function sub2(){
    console.log("I am sub");
}

main2(sub2); //출력: I am sub


//3. 콜백함수
function main3(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub3(){
    console.log("I am sub");
}

main3(sub3);
//출력:
//1
//2 
//I am sub
//end

//4. 콜백함수 
function main4(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

main4(function sub(){
    console.log("I am sub");
});

//출력: 
//1
//2
//I am sub 
//end 

//5. 콜백함수 
function main5(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

main5(()=>{
    console.log("I am sub");
});

//출력:
//1
//2
//I am sub
//end

//6. 콜백함수의 응용 사례 
function repeat1(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}

repeat1(5);

//출력:
//1
//2
//3
//4
//5

function repeat2(count, callback){
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat2(5, function(idx){
    console.log(idx);
});

//출력:
//1
//2
//3
//4
//5




