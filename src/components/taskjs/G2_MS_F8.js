import {randomNumbers} from './Utility/randomNumGen';

let task01 = {
  heading : "Subtraction input/output tables - sums to 18",
  question: "Complete the table.",
  qstNum : 0,
  valueArray: [], 
  answer: [], 
  operator: "-",
  columns: 4,
  input : 0
};

const maxValue = 18;
const minValue = 6;
const tablesize = 4;

export function taskOne() {

  task01.valueArray = [];
  task01.answer = []; 

   let displayBtn = randomNumbers(tablesize,maxValue,minValue);
   task01.qstNum =  Math.floor(Math.random() * 5);
   for(let i = 0 ; i < displayBtn.length;i++){
      task01.valueArray[i] = [displayBtn[i], displayBtn[i]-task01.qstNum]
      task01.answer[i] = [displayBtn[i]-task01.qstNum];
   }
   task01.input = Math.floor(Math.random() * task01.valueArray.length);
   for(let i = 0 ; i < displayBtn.length;i++){
     if(i != task01.input){
      task01.valueArray[i] = [displayBtn[i], ['i']]
     }
 }
  
  return task01;
}
