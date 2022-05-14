function solve(firstArr,secondArr){

    let firstArray = firstArr;
    let secondArray = secondArr;
    

    for (let element1 of firstArray) {
        for (let element2 of secondArray) {
            if(element1 === element2){
                console.log(element1)
            }
        }
    }


}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])