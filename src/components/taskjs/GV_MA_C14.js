let task01 = {
  question: "Multiply numbers ending in zeroes",
  displayValue: 0,
  displayValuetwo: 0,
  answer: 0
 
};

export function taskOne() {
  task01.displayValue = Math.floor(Math.random() * 999+100) ;
  task01.displayValuetwo = Math.floor(Math.random() * 99+10); 
  task01.answer = task01.displayValue * task01.displayValuetwo; 
  return task01;
}


