import {roundUp} from './Utility/roundUpNear';


let task01 = {
  question: "Estimate the sum by rounding each number to the nearest thousand and then adding.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [1000, 10, 100,10000],
  Disoptions: ["thousand", "ten", "hundred", "ten thousand"],
  opraters : ['+' , '-'],
  operatorNum : 0,
  qstOpt : ""

};

const maxNumber = 1000000;
const minNumber = 100000;

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    let tempNum = Math.floor(Math.random() * (task01.opraters.length));
    task01.displayValue = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    task01.displayValueTwo = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    console.log(tempNum);
    if(tempNum === 0){
       
        task01.question = "Estimate the sum by rounding each number to the nearest "+ task01.Disoptions[task01.randomAnswer] 
        task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    }else{
        console.log("SUB");
        task01.displayValueTwo = Math.floor(Math.random() * (task01.displayValue - minNumber)) + minNumber;
        task01.question = "Estimate the difference by rounding each number to the nearest "+ task01.Disoptions[task01.randomAnswer] 
        task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) - roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    }    
    task01.qstOpt = task01.displayValue + " " +  task01.opraters[tempNum] + " " + task01.displayValueTwo;
   
    return task01;
}

