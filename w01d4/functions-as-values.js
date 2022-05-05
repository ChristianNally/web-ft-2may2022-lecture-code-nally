// Functions can be values just like any other variable's value
// e.g. literally or as a convenience variable

let x = 5;

const firstName = 'Nally';

function sum(a,b){
  return a + b;
}

const add = function sum(a,b){
  return a + b;
};

//

console.log('x',x);
console.log('name',firstName);
console.log('sum',sum);
console.log('add',add);

//

const myFuncs = [add,sum];

function monkeyfuzz(){
  console.log('monkey fuzz');
}

function doActionThreeTimes(action, x){

  action(x);
  action(x);
  action(x);

  const yy = 3 + anotherAction;

}


doActionThreeTimes(monkeyfuzz, 33);
