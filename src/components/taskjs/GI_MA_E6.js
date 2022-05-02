let task01 = {
  heading: "Addition sentences for word problems - sums up to 10",
  question: "Anna has a chest of coins. Inside, there are 3 gold coins and 1 silver coin. How many coins are in the chest?",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 2,
  solutionArray : []
};

const maxValue = 5;
const minValue = 1;
const findInMaxNumber = 10;


export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;  
  task01.valueArray = [];
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      if (task01.questionValue == (i + j)) {
        let a = i+"+"+j+"="+(i+j);
          task01.valueArray.push(a);
      }
    }
  }
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer =  task01.valueArray[task01.randomAnswer];  
  let tempnum = task01.answer.split('=');
  task01.solutionArray =  tempnum[0].split('+');
  task01.question = "Anna has a chest of coins. Inside, there are "+task01.answer[0]+" gold coins and "+task01.answer[2]+" silver coin. How many coins are in the chest?";
  return task01;  
}

