let task01 = {
  question: "",
  displayValueOne: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  operators: ["-", "+"],
  operator: "",
};

const maxValue = 100000;
const minValue = 10000;

export function taskOne() {
  task01.randomAnswer = Math.floor(Math.random() * task01.operators.length);
  task01.displayValueOne =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;

  task01.operator = task01.operators[task01.randomAnswer];

  if (task01.operator == "-") {
    task01.displayValueTwo =
      Math.floor(Math.random() * (task01.displayValueOne - minValue)) +
      minValue;

    task01.answer = task01.displayValueOne - task01.displayValueTwo;
    task01.question =
    "A video game company sold a total of " +
    task01.displayValueOne +
    " white and black game consoles. They sold " +
    task01.displayValueTwo +
    " black consoles. How many white consoles did they sell?";
  } else {
    task01.displayValueTwo =
      Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    task01.answer = task01.displayValueOne + task01.displayValueTwo;
    task01.question =
    "After a natural disaster, a clothing company wanted to help. The company donated " +
    task01.displayValueOne +
    " shirts and " +
    task01.displayValueTwo +
    " pairs of trousers. How many pieces of clothing did the company donate?";
  }
  
  return task01;
}
