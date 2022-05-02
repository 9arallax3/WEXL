let task01 = {
  heading: "Write addition sentences to describe pictures - sums to 20",
  question: "Write an addition number sentence based on the picture (for example, 2 + 1 = 3).",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 2,
  solutionArray : [],
  operator : '+'
};

const maxValue = 20;
const minValue = 1;
const findInMaxNumber = 10;


export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;  
  task01.valueArray = [];
  for (let i = 1; i < findInMaxNumber; i++) {
    for (let j = 1; j < findInMaxNumber; j++) {
      if (task01.questionValue == (i + j)) {
        let a = i+"+"+j+"="+(i+j);
          task01.valueArray.push(a);
      }
    }
  }
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer =  task01.valueArray[task01.randomAnswer];
  
  console.log(task01.answer);
  let tempnum = task01.answer.split('=');
  task01.solutionArray =  tempnum[0].split('+');  
  console.log(task01.solutionArray );
  return task01;  
}

