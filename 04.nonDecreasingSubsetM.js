function solve(arr){

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let resultArray = [];

     for(let currNum of arr){
        if(currNum < biggestNum){
            continue;
        }else{
            biggestNum = currNum;
             resultArray.push(biggestNum);
         }
     }
  // let result = arr.filter(x => x >= biggestNum )
    console.log(resultArray.join(` `));
   // console.log(result)
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])

solve([ 1, 2, 3, 4])

solve([ 20, 3, 2, 15, 6, 1])