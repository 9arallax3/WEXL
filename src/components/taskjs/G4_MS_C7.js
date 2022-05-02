
import {roundUp} from './Utility/roundUpNear';


let task01 = {
  question: "There were originally 987 houses in Columbia County. During a housing boom, developers built 820 more. About how many houses are there now in Columbia County? Choose the better estimate.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [10, 100],
  Disoptions: [ "ten", "hundred"],

  operatorNum : [0,0],
  qstOpt : ""
    
};
const maxNumber = 1000;
const minNumber = 10;

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    task01.displayValue = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;   
    task01.displayValueTwo = Math.floor(Math.random() *(task01.displayValue - minNumber)) + minNumber;
    task01.operatorNum[0] = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    task01.operatorNum[1] = Math.abs(roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]));  
    task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    task01.question = "There were originally "+ task01.displayValue + " houses in Columbia County. During a housing boom, developers built " + task01.displayValueTwo +" more. About how many houses are there now in Columbia County? Choose the better estimate."
    return task01;
}


