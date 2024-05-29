// for(초기식; 조건식; 증감식){
//     console.log("반복!");
// }


// for(let idx = 0; idx < 10 ; idx++){
//     console.log(idx)   //출력: 1..9 
// }


for(let idx = 1; idx <= 10 ; idx++){
    
    if (idx % 2 === 0){
        continue;
    }

    console.log(idx); //출력: 1, 3, 5

    if(idx >= 5){
        break;
    }
}



