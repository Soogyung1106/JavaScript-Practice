//async 
//어떤 함수(동기)를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 해주는 키워드

async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "James",
                id: "1234",
            });
        }, 3000);
    });
}

console.log(getData());

//출력:
// Promise 
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// id: "1234"
// name: "James"


//await
//async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할
//.then을 굳이 안 써도 되도록 간소화함
//반드시 async와 쌍을 이루어 작성해야 함

async function printData(){
    const data = await getData();
    console.log(data);
}

printData(); //출력: {name: 'James', id: '1234'}
