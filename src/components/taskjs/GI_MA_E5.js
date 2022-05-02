import {randomNumbers} from './Utility/randomNumGen';

let task01 = {
  heading: "Make a number using addition - sums up to 10",
  question: "John is building a cabinet. He needs 2 one-inch bolts and 3 one-and-a-half inch bolts. How many bolts in all does John need?",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  displayBtn : [],
  columns: 0
};

const maxValue = 10;
const minValue = 1;
const findInMaxNumber = 10;
const showbtn = 4;

export function taskOne() {
  task01.answer = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.valueArray = [];
  task01.columns = 2;
  let ans = []
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      let a = i+"+"+j;
      if (task01.answer == (i + j)) {          
          ans.push(a);
      }
    }    
  }  

  task01.valueArray = ans[Math.floor(Math.random() * ans.length)].split('+');
  task01.question = "John is building a cabinet. He needs "+task01.valueArray[0]+" one-inch bolts and "+task01.valueArray[1]+" one-and-a-half inch bolts. How many bolts in all does John need?";
  task01.displayBtn = randomNumbers(showbtn,maxValue,minValue);
  if(!task01.displayBtn.includes(task01.answer)){      
    let tempnum = Math.floor(Math.random() * task01.displayBtn.length);
    task01.displayBtn[tempnum] = task01.answer;
  }
  return task01;
}

