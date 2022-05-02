let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "-",
  columns: 0
};

let columns = 2;
let maxValue = 0;
let minValue = 0;
let heading = "";
let question = "";


export function MaxandMin(max, min,col,headingtext,qst) {
  minValue = min;
  maxValue = max;
  columns = col;
  heading = headingtext;
  question = qst;
}

export function taskOne() {
  task01.heading = heading;
  task01.question = question;
  task01.answer = 0;
  task01.columns = columns;
  task01.valueArray = [];
  
  for (let i = 0; i < columns; i++) {
    task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;   
  }

  task01.valueArray = task01.valueArray.sort((a, b) => b - a);
  task01.answer = task01.valueArray[0];
  for (let index = 1; index < task01.valueArray.length; index++) {
    task01.answer -= task01.valueArray[index];
  }

  task01.question = task01.valueArray[1] + " of the pairs of shoes in a shoe store are black. There are "+task01.valueArray[0]+" pairs of shoes in the store in all.  How many of the pairs of shoes are not black?"
  console.log(task01.valueArray.sort((a, b) => b - a));
  return task01;
};

