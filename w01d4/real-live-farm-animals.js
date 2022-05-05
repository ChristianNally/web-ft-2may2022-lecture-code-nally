
const noises = ['moo','oink','hee-haw','bahhh','caw','cluck','quack','awooo'];

const forEach = (stringArray, action) => {
  for (let element of stringArray){
    action(element);
  }
};

forEach(noises, console.log);

forEach(noises, function(str){
  console.log('sound size',str.length);
});

forEach(noises, (noise) => console.log(`<a href="/${noise}.html">${noise}</a>`) );

//  forEach(noises, 'monkeyfuzz');
