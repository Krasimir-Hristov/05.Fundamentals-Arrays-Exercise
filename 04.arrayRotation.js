function solve(arr,rotationNum){
//  let arrayOfElements = arr;
//  let rotations = rotationNum;
 

//  for(let index = 0; index < rotations; index++){
    
    
//     let numberToMove = arrayOfElements.shift();
//     arrayOfElements.push(numberToMove);
//  }
//  console.log(arrayOfElements.join(" "))

rotationNum -= arr.length * Math.floor(rotationNum / arr.length);
arr.push.apply(arr, arr.splice(0, rotationNum));

console.log(arr.join(' '));


}
solve([51, 47, 32, 61, 21], 2);

solve([2, 4, 15, 31], 5)