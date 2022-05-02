let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "+",
    columns: 2
  };
  
  
  let maxValue = 20;
  let minValue = 1;

  
  
 
  
  export function taskOne() {
    task01.heading = "Add zero";
    task01.question = "Add :";
    task01.answer = 0;
    
    task01.valueArray = [];
    task01.valueArray[0] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
    task01.valueArray[1] = 0; 
    task01.answer = task01.valueArray[0];   
    return task01;
  }
  