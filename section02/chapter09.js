//5가지 배열 변형 메서드 
//1. filter
//기존 배열에서 조건을 만족하는 요소만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "A", hobby: "테니스"},
    {name: "B", hobby: "테니스"},
    {name: "C", hobby: "독서"},
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);

console.log(tennisPeople); 
//출력: 
//{name: 'A', hobby: '테니스'}
//{name: 'B', hobby: '테니스'}


//2. map
//배얄의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map(
    (item, idx, arr) => {return item * 2}
);

console.log(mapResult1); //출력:  [2, 4, 6]

let names = arr1.map((item)=>item.name); 

console.log(names); //출력:  ['A', 'B', 'C']

//3. sort
//배열을 사전순으로 정렬하는 메서드 
let arr3 = [10, 3, 5];
arr3.sort();

console.log(arr3); //출력: [10, 3, 5]

arr3.sort((a, b) => {
    if(a > b){
        //b가 a 앞에 와라 
        return 1; //b -> a 
    }else if(a < b){ 
        //a가 b 앞에 와라 
        return -1; //a -> b 
    }else{
        //두 값의 자리를 바꾸지 마라
        return 0; //a, b 자리를 그대로 유지
    }
});

console.log(arr3); //출력: [3, 5, 10]s

//4. toSorted
//정렬된 새로운 배열을 만드는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(sorted); //출력: 'a', 'b', 'c']

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드 
let arr6 = ["hi", "im", "wintewood"];
const joined = arr6. join(" ");
console.log(joined); //출력: hi im wintewood
