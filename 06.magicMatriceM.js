function solve(input) {
    let arr1 = input[0];
    let arr2 = input[1];
    let arr3 = input[2];

    let sumarr1 = 0;
    let sumarr2 = 0;
    let sumarr3 = 0;

    let sumOfIndexs = 0

    for (let array1 of arr1) {
        sumarr1 += array1
    }
    for (let array2 of arr2) {
        sumarr2 += array2
    }
    for (let array3 of arr3) {
        sumarr3 += array3
    }


    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                sumOfIndexs = arr1[i] + arr2[j] + arr3[k];
            }

        }

    }
    if (sumOfIndexs === sumarr1 && sumOfIndexs === sumarr2 && sumOfIndexs === sumarr3) {
        console.log(`true`)
    } else {
        console.log(`false`)
    }

}
solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);

solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])