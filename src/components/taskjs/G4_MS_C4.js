let task01 = {
  question: "",
  valueArray: [],  
  Options: [1, 10, 100,1000],
  variations: 0,
  randomAnswer: 0,
  answer : 0
};
    const maxNumber = 10;
    const minNumber = 1;
    
export function taskOne() {

  task01.variations =  Math.floor(Math.random() * 3 - 1) + 1;
  task01.valueArray[0] = Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
  task01.valueArray[1] = Math.floor(Math.random() * (task01.valueArray[0] - minNumber + 1)) + minNumber;
  task01.valueArray[2] = task01.valueArray[0] - task01.valueArray[1];
  task01.question = "Complete the pattern:";  
  task01.answer = task01.valueArray[task01.variations];
  task01.valueArray[task01.variations] = 'i';
  console.log(task01.valueArray);
  console.log(task01.answer);
  return task01;
}
