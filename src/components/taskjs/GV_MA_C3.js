let task01 = {
  question: "",
  displayValue: 0,
  Options: [1,10,100,1000,10000,100000,100000],
  answer: 0,
  randomAnswer: 0
};

export function taskOne() {
  
  task01.answer = Math.floor(Math.random() * 9) + 1;

  task01.displayValue = Math.floor(Math.random() * 9) + 1;
  task01.question = "Complete the pattern:";

  
  return task01;
}
