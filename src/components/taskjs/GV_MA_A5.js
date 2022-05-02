import {roundUp} from './Utility/roundUpNear';

let task01 = {
  question: "",
  displayValue: 0,
  answer: 0,
  randomAnswer: 0,
  options: [1, 10, 100],
};

const tenthousands = 10000;

const hundreds = 100;
const tens = 10;

export function taskOne() {
  task01.randomAnswer = Math.floor(Math.random() * task01.options.length);

  if (task01.randomAnswer == 0) {
    task01.displayValue = (Math.random() * tens).toFixed(2);
  } else {
    task01.displayValue =
      Math.floor(Math.random() * (tenthousands - hundreds)) + hundreds;
  }
  task01.question =
    "What is " +
    task01.displayValue +
    " rounded to the nearest " +
    task01.options[task01.randomAnswer] +
    " ?";
  task01.answer = roundUp(
    task01.displayValue,
    task01.options[task01.randomAnswer]
  );
  return task01;
}


