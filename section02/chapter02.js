function returnFalse() {
    console.log("returnFalse()가 실행됨")
    return false;
}

function returnTrue() {
    console.log("returnTrue()가 실행됨")
    return true;
}

console.log("&&")
console.log(returnFalse() && returnTrue()); //왼쪽까지만 실행됨
console.log(returnTrue() && returnTrue()); //오른쪽까지 실행됨



console.log("||")
console.log(returnFalse() || returnTrue()); //오른쪽까지만 실행됨
console.log(returnTrue() || returnFalse()); //왼쪽까지만 실행됨


//단락 평가 활용 사례 
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName(); //출 력: person의. 값이 없음
printName({name: "Mark"}); //출력. : Mark

