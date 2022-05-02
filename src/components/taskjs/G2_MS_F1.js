import { randomArrayNumbers } from "./Utility/randomNumGen";

let task01 = {
  heading: "Subtraction sentences using number lines - sums up to 18",
  question: "Which addition sentence does this model show?",
  questionValue: 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 0,
  solutionArray: [],
  verticalLinePos: [],
  lineMaxWidth: 0,
};

const lineWidth = 600;
const findInMaxNumber = 18;

let maxValue = 18;
let minValue = 0;
export function taskOne() {
  task01.randomAnswer = [];
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;

  task01.lineMaxWidth = lineWidth;

  for (let i = 0; i < findInMaxNumber; i++) {
    task01.verticalLinePos[i] = (lineWidth / (findInMaxNumber + 1)) * (i + 1);
  }

  for (let i = 0; i < task01.columns; i++) {
    task01.valueArray[i] =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  task01.valueArray = task01.valueArray.sort((a, b) => b - a);
  task01.answer = task01.valueArray[0];
  for (let index = 1; index < task01.valueArray.length; index++) {
    task01.answer -= task01.valueArray[index];
  }
  console.log(task01.valueArray.sort((a, b) => b - a));
  return task01;
}
