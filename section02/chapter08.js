//5가지 요소 순회 및 탐색 메서드
//1. forEach 
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행하는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){ //순서: 요소, 인덱스, 배열
    console.log(idx, item * 2);
});
//출력
//0 2
//1 4
//2 6

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr); //출력: [2, 4, 6]

//2. includes
//배열에 특정 요소가 있는지 확인하는 그런 메서드 
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

console.log(isInclude); //출력: false

//3. indexOf
//특정 요소의 첫 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index1 = arr3.indexOf(20); //없으면 -1를 반환한다.
console.log(index1); //출력: -1

let index2 = arr3.indexOf(2); //없으면 -1를 반환한다.
console.log(index2); //출력: 0

//4. findIndex
//모든 요소를 순회하면서, 콜백함수를 만족하는 그런
//특정 요소의 인덱스(위치)를 반환하는 메서드 
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
    (item) => item === 999
);

console.log(findedIndex); //출력: -1

const A = arr4.findIndex(
    (item) => {
        if(item === 2) return true;
    }
);

console.log(A); //출력: 1


//(심화) indexOf와 findIndex의 차이점
//객체의 위치를 찾게 되면, 
//indexOf는 객체의 메모리 참조 주소를 기준으로 비교하게 되는 얕은 비교를 하지만,
//findIndex는 객체의 프로퍼티를 기준으로 비교하는 깊은 비교를 하게 된다. 
//따라서 객체의 위치를 찾고 싶다면, findIndex를 사용해야 한다. 

let objetArr = [
    {name: "James"},
    {name: "Peter"},
];

console.log(
    objetArr.indexOf({name: "Peter"})
); //출력: -1


console.log(
    objetArr.findIndex(
        (item) => item.name === "Peter"
    )
); //출력: 1


//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {fish: "꽁치"},
    {fish: "고등어"},
];

const finded = arr5.find(
    (item) => item.fish === "고등어"
);

console.log(finded); //출력: {fish: '고등어'}


