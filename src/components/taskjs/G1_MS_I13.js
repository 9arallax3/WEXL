import {randomArrayNumbers} from './Utility/randomNumGen';

let task01 = {
  heading: "Related addition facts",
  question: "Which is the related addition fact for ",
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
  
  task01.valueArray = [];
  task01.columns = 2;
  
  let opts = [];
  let ans = [];
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      let a = i+"-"+j;
      if (task01.questionValue == (i - j)) {          
          ans.push(a);
      }else{
        opts.push(a);
      }
    }    
  }

  task01.valueArray = randomArrayNumbers(showbtn,opts.length,0,opts);

  task01.question = "Which is the related addition fact for "+ans[Math.floor(Math.random() * ans.length)]+"?";
  task01.answer = ans[Math.floor(Math.random() * ans.length)];
  
  let tempNum = Math.floor(Math.random() * task01.valueArray.length);
  task01.valueArray[tempNum] = task01.answer; 
  task01.solutionArray =  task01.answer.split('-');  
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer = tempNum; 
  return task01;

}

