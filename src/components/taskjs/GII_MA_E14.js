let task01 = {    
    question: "Add.",
    displayValues: [], 
    answer: 0,
    operator : '+'
  };
  
  const maxValue = 9;
  const minValue = 0;
  const maxArrayValue = 4;
  const minArrayValue = 3;


  export function taskOne() {   
    task01.answer = 0;
    const arraySize = Math.floor(Math.random() * (maxArrayValue - minArrayValue)) + minArrayValue;
     for (let index = 0; index < arraySize; index++) {
        task01.displayValues[index] = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        task01.answer += task01.displayValues[index];      
     }
     console.log(task01.displayValues   ,    task01.answer);
      return task01;
  }

