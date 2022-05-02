let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "-",
  columns: 0
};

let columns = 2;
let maxValue = 18;
let minValue = 1;




export function taskOne() {
  task01.heading = "Subtraction with pictures";
  task01.question = "Subtract: ";
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
  console.log(task01.valueArray.sort((a, b) => b - a));
  return task01;
};

