function solve(arr){
    let array = arr;
    let steps = Number(array.pop());
    let resultArrey = [];

    
    for (let i = 0; i < array.length; i+=steps) {
        // if(i >= array.length){
        //     break;
        // }
        resultArrey.push(array[i]);
       
        
    }

    console.log(resultArrey.join(` `));


}
solve(['5', '20', '31', '4', '20', '2'])

solve(['dsa', 'asd', 'test', 'test', '2'])

solve(['1', '2', '3', '4', '5', '6'])