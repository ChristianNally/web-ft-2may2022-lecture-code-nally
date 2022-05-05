// anonymous function

function doSomething(){
  console.log('things');
  const yy = 5 + 42;
  return yy;
}

const noReallyDoIt = function (){
  console.log('things');
  const yy = 5 + 42;
  return yy;
};



const doThingSixTimes = function(thing){
  for (let ii = 0; ii < 6; ii++){
    thing(ii);
  }
};


doThingSixTimes(function(addend){ 
  let zzz = 42 + addend; zzz++; console.log(zzz);
});

//  ARROW function

const runMyFunction = function(callback){
  callback('Monkey Fuzz!');
};

runMyFunction( function(param){ console.log('param',param); } );
runMyFunction( (param) => { console.log('param',param); } );
runMyFunction( param => console.log('param',param) );

const addThree = function (intValGetter){
  const yy = intValGetter(32) + 3;
  console.log('yy',yy);
  return yy;
};

addThree( function(param){ return param + 54; } );
addThree( (param) => { return param + 54;} );
addThree( x => x + 54 );


// real world use of a callback
