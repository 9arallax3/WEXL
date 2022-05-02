
import {roundUp} from './Utility/roundUpNear';


let task01 = {
  question: "Zach just transferred ₹777 out of his bank account. As a result, the account now has ₹944 left in it. About how much money was in the account before the transfer? Choose the better estimate.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [10, 100],
  Disoptions: [ "ten", "hundred"],
  opraters : ['+' , '-'],
  operatorNum : [0,0],
  qstOpt : ""
    
};
const maxNumber = 1000;
const minNumber = 10;

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    let tempNum = Math.floor(Math.random() * (task01.opraters.length));
    task01.displayValue = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;   
    
    

    if(tempNum === 0){ 
        task01.displayValueTwo = Math.floor(Math.random() *(maxNumber - minNumber)) + minNumber;
        task01.operatorNum[0] = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
        task01.operatorNum[1] = Math.abs(roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]));  
        task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
        
    }else{  
      task01.displayValueTwo = Math.floor(Math.random() *(task01.displayValue - minNumber)) + minNumber;   
      task01.operatorNum[0] = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
      task01.operatorNum[1] = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
        
     
        task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    }
    task01.question = "Zach just transferred "+ task01.displayValue + " out of his bank account. As a result, the account now has " + task01.displayValueTwo +" left in it. About how much money was in the account before the transfer? Choose the better estimate. "
    return task01;
}


