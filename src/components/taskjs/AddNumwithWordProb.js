let task01 = {
  question: "Add",
  displayValueOne: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  operator: "+",
};

let maxValue = 0;
let minValue = 0;

export function MaxandMin(max, min) {
  minValue = min;
  maxValue = max;
}

export function taskOne() {
  task01.displayValueOne =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  task01.displayValueTwo =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  task01.answer = task01.displayValueOne + task01.displayValueTwo;
  task01.question =
    "After a natural disaster, a clothing company wanted to help. The company donated " +
    task01.displayValueOne +
    " shirts and " +
    task01.displayValueTwo +
    " pairs of trousers. How many pieces of clothing did the company donate?";
  return task01;
}
