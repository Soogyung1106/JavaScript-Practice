//1. 간단한 콜백 예제

// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a + b; //3 
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value);
// }); //출력: 3 (3초 뒤에)


//2. 콜백 지옥 실습 
//음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback){
    setTimeout(() => {
        const coolDownFood = "식은" + food;
        callback(coolDownFood); 
    }, 2000);
}

function freezedFood(food, callback){
    setTimeout(() => {
        const freezedFood = "냉동된" + food;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    coolDownFood(food, (coolDownedFood) => {
        console.log(coolDownedFood);


        freezedFood(coolDownedFood, (freezedFood) => {
            console.log(freezedFood);
        });

    });
});