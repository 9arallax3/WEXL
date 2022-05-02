let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "-",
  columns: 0
};


const maxValue = 10;
const minValue = 1;

export function taskOne() {
  task01.heading = "Subtract doubles";
  task01.question = "Subtract:";
  task01.answer = 0;
  task01.columns = 2;
  task01.valueArray = [];
  task01.valueArray[1] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;   
  task01.valueArray[0] = task01.valueArray[1] * 2;  

  task01.answer = task01.valueArray[1];

  return task01;
};

