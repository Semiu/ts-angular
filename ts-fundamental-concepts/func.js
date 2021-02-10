
//Understanding let and var in JavaScript (Note const cannot be used in Loop because it does
//not allow changing values)

function printVar(num){
  for(var i = 0; i < num; i++){
    console.log("Inside var loop " + i);
  }
  console.log("Finally for var " + i);
  //Using var, variable is scoped to the function
}

function printLet(num){
  for(let i = 0; i < num; i++){
    console.log("Inside let loop " + i);
  }
  console.log("Finally for let " + i);
  //ReferenceError: i is not defined
  //Using let, variable is scoped to the nearest bloc, which is the for loop here
}
printVar(5);

printLet(5);