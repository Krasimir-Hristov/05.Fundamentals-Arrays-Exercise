function solve(firstArr,secondArr){

    // let firstArray = firstArr;
    // let secondArray = secondArr;
    // let outputArrey = [];
    // let firstArrayL = firstArray.length;

    // for(let i = 0; i < firstArrayL; i ++){
    //     let sum;
    //     if(i % 2 === 0){
    //          sum = Number(firstArray[i]) + Number(secondArray[i]);
    //     }else{
    //         sum = firstArray[i] + secondArray[i];
    //     }
    //     outputArrey.push(sum)
        
    // }
    // console.log(outputArrey.join(" - "))

    let thirArray = firstArr.map( (el, i) => i % 2 == 0 ? Number(el) + Number(secondArr[i]) : el + secondArr[i] ) ;
    console.log(thirArray.join(` - `));

     
    


}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])