let task01 = {
  question: "",
  displayValue: 0,
  displayValueTwo: 0,
  displayValueThree: 0,
  Options: [1, 10, 100],
  variations: 0,
  randomAnswer: 0,
};
    const maxNumber = 10;
    const minNumber = 1;
    
export function taskOne() {

    task01.variations =  Math.floor(Math.random() * 3 - 1) + 1;
  task01.displayValueOne = Math.floor(Math.random() * maxNumber - minNumber) + minNumber;
  task01.displayValueTwo = Math.floor(Math.random() * maxNumber - minNumber) + minNumber; 
  console.log(task01.displayValueTwo);
  task01.question = "Complete the pattern:";  
  return task01;
}
