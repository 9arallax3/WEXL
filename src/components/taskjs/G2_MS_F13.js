import { randomArrayNumbers } from "./Utility/randomNumGen";

let task01 = {
  heading: "Balance subtraction equations - up to 18",
  question:
    "Here are the ways to make 4. Find the pattern and type the missing addition number sentence.",
  questionValue: 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  solutionArray: [],
  columns: 0,
};

const maxValue = 20;
const minValue = 1;
const findInMaxNumber = 10;


export function taskOne() {
  task01.questionValue =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.question = "How do you make " + task01.questionValue + " ?";
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;

  let opts = [];
  let ans = [];
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      let a = i + "-" + j;
      if (task01.questionValue == i - j) {
        ans.push(a);
      } else {
        opts.push(a);
      }
    }
  }

  let temparray = randomArrayNumbers(2, ans.length, 0, ans);
  for (let i = 0; i < temparray.length; i++) {
    task01.valueArray[i] = temparray[i].split("-").map(function (item) {
      return parseInt(item, 10);
    });
  }
  let RandomValue = Math.floor(Math.random() *  task01.valueArray.length);
  let randomINput = Math.floor(Math.random() *  task01.valueArray[RandomValue].length);
  task01.solutionArray = [...task01.valueArray[RandomValue]];
  task01.answer = task01.valueArray[RandomValue][randomINput];
 
  console.log(task01.answer);
  task01.valueArray[RandomValue][randomINput] = 'i';
  return task01;
}
