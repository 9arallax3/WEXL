import {randomArrayNumbers} from './Utility/randomNumGen';

let task01 = {
  heading: "Review - writing addition sentences - sums to 18",
  question: "Which picture shows 1+2=3?",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  solutionArray : [],
  columns: 0,
  displayArray :[]
};

const maxValue = 18;
const minValue = 1;
const findInMaxNumber = 18;
const showbtn = 4;

export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.displayArray = [];
  task01.valueArray = [];
  task01.columns = 2;
  
  let opts = [];
  let ans = [];
  for (let i = 1; i < findInMaxNumber; i++) {
    for (let j = 1; j < findInMaxNumber; j++) {
      let a = i+"-"+j+"="+(i - j);
      if (task01.questionValue == (i - j)) {          
          ans.push(a);
      }else{
        opts.push(a);
      }
    }    
  }

  task01.valueArray = randomArrayNumbers(showbtn,opts.length,0,opts);
  task01.answer = ans[Math.floor(Math.random() * ans.length)];
  
  task01.question = "Which picture shows "+task01.answer+"?";
  let tempNum = Math.floor(Math.random() * task01.valueArray.length);
  task01.valueArray[tempNum] = task01.answer; 
  task01.solutionArray =  task01.answer.split('-');  
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer = tempNum;
  for (let index = 0; index < task01.valueArray.length; index++) {
    task01.displayArray[index] = Math.abs(task01.valueArray[index].split('=')[1]);
    
  }
  console.log( task01.displayArray);
  
  return task01;

}

