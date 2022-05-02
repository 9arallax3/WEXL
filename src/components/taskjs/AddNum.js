let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 3;
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
    task01.answer += task01.valueArray[i];   
  }
  return task01;
};

