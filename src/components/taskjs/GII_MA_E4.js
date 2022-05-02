let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "+",
    columns: 2
  };
  
  
  let maxValue = 10;
  let minValue = 1;

  
  
 
  
  export function taskOne() {
    task01.heading = "Add doubles";
    task01.question = "Add the doubles.";
    task01.answer = 0;
    
    task01.valueArray = [];
    let temp = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
    for (let i = 0; i < task01.columns; i++) {
      task01.valueArray[i] = temp;
      task01.answer += task01.valueArray[i];   
    }
    return task01;
  }
  