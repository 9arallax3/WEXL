let task01 = {
  heading : "Subtraction sentences for word problems - numbers up to 10",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "-",
  columns: 0
};


let maxValue = 10;
let minValue = 0;




export function taskOne() {

  task01.answer = "";
  task01.columns = 2;
  task01.valueArray = [];
  
  for (let i = 0; i < task01.columns; i++) {
    task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;   
  }

  task01.valueArray = task01.valueArray.sort((a, b) => b - a);
  task01.answer = task01.valueArray[0] +'-'+task01.valueArray[1]+'='+(task01.valueArray[0] - task01.valueArray[1]);
  task01.question = task01.valueArray[1] + " of the pairs of shoes in a shoe store are black. There are "+task01.valueArray[0]+" pairs of shoes in the store in all.  How many of the pairs of shoes are not black?"
  console.log(task01.valueArray.sort((a, b) => b - a));
  return task01;
};

