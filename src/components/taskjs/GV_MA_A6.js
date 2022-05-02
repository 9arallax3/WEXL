


let task01 = {
    question: "",
    displayValueOne: 0,
    displayValueTwo: 0,
    answer: 0,
    randomAnswer: 0,
    operators: ["-", "+"],
  };
  
  const thousands = 1000;

  export function taskOne() {
      task01.randomAnswer = Math.floor(Math.random() * (task01.operators.length));
      task01.displayValueOne = Math.floor(Math.random() * thousands);
      task01.displayValueTwo = Math.floor(Math.random() * thousands);     
      task01.question = "Is "+ task01.displayValueOne +" "+ task01.operators[task01.randomAnswer] + " " + task01.displayValueTwo + " even or odd?";
      task01.answer = (task01.displayValueOne + task01.displayValueTwo) %2;
      return task01;
  }
  
