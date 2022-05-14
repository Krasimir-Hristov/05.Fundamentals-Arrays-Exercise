function solve(array){``

    let myArray = [];
    let num = 1;
  for (let i = 0; i < array.length; i++) {
         
      let command = array[i];
      if(command === `add`){
        myArray.push(num);
      }else{
          if(myArray.length > 0){
            myArray.splice(myArray.length - 1,1);
          }
         

      }

      num++;
      
  }

  if(myArray.length <=0){
      console.log("Empty")
  }else{
    console.log(myArray.join(` `))
  }
  
  



}
//  solve(['add', 'add', 'remove', 'add', 'add']);

//  solve(['add', 'add', 'add', 'add']);

// solve(['remove', 'remove', 'remove']);

solve(['add', 'add', 'add', 'add', 'remove', 'remove', 'remove', 'remove'])