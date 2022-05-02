import {randomArrayNumbers} from './Utility/randomNumGen';

let task01 = {
  heading: "Make a number using addition - sums up to 10",
  question: "Here are the ways to make 4. Find the pattern and type the missing addition number sentence.",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  solutionArray : [],
  columns: 0,
};

const maxValue = 10;
const minValue = 1;
const findInMaxNumber = 10;
const showbtn = 4;

export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.question = "How do you make "+task01.questionValue+" ?";
  task01.valueArray = [];
  task01.columns = 2;
  
  let opts = [];
  let ans = [];
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      let a = i+"+"+j;
      if (task01.questionValue == (i + j)) {          
          ans.push(a);
      }else{
        opts.push(a);
      }
    }    
  }

  task01.valueArray = randomArrayNumbers(showbtn,opts.length,0,opts);
  task01.answer = ans[Math.floor(Math.random() * ans.length)];
  let tempNum = Math.floor(Math.random() * task01.valueArray.length);
  task01.valueArray[tempNum] = task01.answer; 
  task01.solutionArray =  task01.answer.split('+');  
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer = tempNum;
  console.log(task01.solutionArray);
  return task01;

}

