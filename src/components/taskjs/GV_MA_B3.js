let task01 = {    
    question: "Fill in the missing number.",
    displayValueOne: 0,
    displayValueTwo: 0,
    answer: 0,
    randomAnswer: 0,
    operators: ["-", "+"],
    operator : '',
    variation : 0
  };
  
  const maxValue = 100000;
  const minValue = 10000;


  export function taskOne() {
    task01.variation = Math.floor(Math.random() * (task01.operators.length));
      task01.randomAnswer = Math.floor(Math.random() * (task01.operators.length));
      task01.displayValueOne = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
     
        task01.operator = task01.operators[task01.randomAnswer];      
      if(task01.operator == "-"){
        task01.displayValueTwo = Math.floor(Math.random() * (task01.displayValueOne - minValue)) + minValue;
        task01.answer = task01.displayValueOne - task01.displayValueTwo;
      }else{
        task01.displayValueTwo = task01.displayValueOne + task01.displayValueTwo;
        task01.answer = task01.displayValueOne + task01.displayValueTwo;
      }

      
      return task01;
  }

