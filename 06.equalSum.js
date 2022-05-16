function solve(arr) {

  let hasEqualsu = false;

  for (let index = 0; index < arr.length; index++) {

    let leftSum = 0;
    let rightSum = 0;

    for (let j = index - 1; j >= 0; j--) {
      leftSum += arr[j];

    }
    for (let num = index + 1; num < arr.length; num++) {
      rightSum += arr[num];

    }

    if (leftSum === rightSum) {
      console.log(index);
      hasEqualsu = true;
    }
  }


if(!hasEqualsu){
  console.log(`no`)
}
// arr.map( (el, i) => (el == arr.slice(0, i) && el == arr.slice(i+1) ) ? `el[i] -> left sum & right sum is arr.slice(i + 1).reduce((el1, el2) => el1 + el2) : '0' ` ;
}
solve([1, 2, 3, 3]);

//   solve([1,2]);

//   solve([1,2,3]);

 // solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
  // solve([1])
