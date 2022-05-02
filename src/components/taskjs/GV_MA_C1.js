let task01 = {
    question: "",
    displayValue: 0,
    displayValuetwo: 0,
    answer: 0,
    randomAnswer: 0,
    options: [1, 10, 100],
  };
  
  export function taskOne() {
        task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));     
    
          task01.displayValuetwo = Math.floor(Math.random() * 11);
               
          task01.displayValue = Math.floor(Math.random() * (1000 - 100)) + 100;
     
      
      task01.answer = task01.displayValuetwo * task01.displayValue;
      return task01;
  }