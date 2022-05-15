function solve(arr){

 let array = arr
 let copyArr = arr.slice(0);
 let newArr = [];
 let lastNum = copyArr.pop();
 

for(let i = 0 ;i < array.length;i++){
let firstNum = array[i];
let secondNum = array[i + 1];

if(firstNum < lastNum){
    continue;
}

if(firstNum > secondNum){
    newArr.push(firstNum);
}

}
 
newArr.push(lastNum);
console.log(newArr.join(` `));
}
 solve([27, 19, 42, 2, 13, 45, 48]);

 solve([14, 24, 3, 19, 15, 17]);

solve([41, 41, 34, 20]);

solve([1, 4, 3, 2]);