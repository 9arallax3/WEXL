let task01 = {    
    question: "Fill in the missing number.",
    displayValues: [], 
    answer: 0,
    operator : '+'
  };
  
  const maxValue = 99999;
  const minValue = 1;
  const maxArrayValue = 5;
  const minArrayValue = 3;


  export function taskOne() {   
      
    const arraySize = Math.floor(Math.random() * (maxArrayValue - minArrayValue)) + minArrayValue;
     for (let index = 0; index < arraySize; index++) {
        task01.displayValues[index] = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        task01.answer += task01.displayValues[index];      
     }
    
      return task01;
  }

