import {roundUp} from './Utility/roundUpNear';


let task01 = {
  question: "Estimate the sum by rounding each number to the nearest thousand and then adding.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [1000, 10, 100],
  Disoptions: ["thousand", "ten", "hundred"],
  variation : 0,
  operatorNum : 0,
  qstOpt : "",
  displayOptions : []

};

const maxNumber = 10000;
const minNumber = 100;

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    task01.variation = Math.floor(Math.random() * 2);
    task01.displayValue = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    task01.displayValueTwo = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    task01.answer = roundUp(task01.displayValue,task01.options[task01.randomAnswer]) + roundUp(task01.displayValueTwo,task01.options[task01.randomAnswer]);
    task01.qstOpt = task01.displayValue + " + " + task01.displayValueTwo; 
    task01.question = "Estimate the sum by rounding each number to the nearest "+ task01.Disoptions[task01.randomAnswer] ;

    return task01;
}

