//함수 선언

// function greeting(){
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후")


// function getArea(width, height){
//     let area = width * height;

//     console.log(area);
// }

// getArea(10, 20);




let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);


//호이스팅 
// -> 끌어오린다는 뜻 

function getArea(width, height){

    //중첩 함수
    function another(){
        console.log("another");
    }

    another();
    let area = width * height;

    console.log(area);
}