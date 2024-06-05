//1. pending 상태 
const promise1 = new Promise(() => {
    //executor: 비동기 작업을 실행하는 함수 
    
    setTimeout(() => {
        console.log("안녕");
    }, 2000);
});

console.log(promise1);

//출력:
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined
// 안녕



//2. fulfilled 상태, rejected 상태
const promise2 = new Promise((resolve, reject)=> {
    //executor: 비동기 작업을 실행하는 함수 
    
    setTimeout(() => {
        console.log("안녕");
        //resolve();
        //resolve("안녕");
        reject("왜 실패했는지 이유")
    }, 2000);
});


setTimeout(()=>{
    console.log(promise2);
}, 3000);

//출력1:
// 안녕
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fullfilled"
// [[PromiseResult]]: undefined


//출력2:
// 안녕
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fullfilled"
// [[PromiseResult]]: "안녕"


//출력3:
// 안녕
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "왜 실패했는지 이유"


//3. promise 객체를 이용한 예제 실습

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // const num = 10;
//         const num = null;

//         if(typeof num === "number"){
//             resolve(num + 10);
//         }else{
//             reject("num이 숫자가 아닙니다");
//         }
//     }, 2000);
// });

//console.log(promise3);
//출력
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fullfilled"
// [[PromiseResult]]: 20

// then 메서드 : promise 객체의 성공 결과를 인자로 받아서 출력 가능
// promise3.then((value) => {
//     console.log(value);
// }); 


//catch 메서드 : promise 객체의. 실패 결과를 출력 가능
// promise3.catch((error)=>{
//     console.log(error);  //출력: num이 숫자가 아닙니다
// }); 

//promise 체이닝
// promise3
// .then((value) => {
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);  //출력: num이 숫자가 아닙니다
// }); 


//4. promise 객체를 반환하는 함수 작성하기 
function add10(num){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof num === "number"){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);
});


//5. 콜백지옥을 해겷하는 promise 체이닝
add10(0)
.then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error)
}); 

//출력: 
//10 20 30