function   solve(arr){
    
    let array = arr;
    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;
    let arrayL = array.length;

    for(let i = 0; i < arrayL; i++){
       let currentNum = array[i]
       sumArray += currentNum;
       let currSum; 
        if(currentNum % 2 === 0){
           currSum = currentNum + i;
          
        }else{
            currSum = currentNum - i
        }
        sumNewArray += currSum;
        newArray.push(currSum);
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray)


}
solve([5, 15, 23, 56, 35])