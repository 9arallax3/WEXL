let task01 = {
  question: "Multiply numbers ending in zeroes",
  displayValue: 0,
  displayValuetwo: 0,
  answer: 0
 
};

export function taskOne() {
  task01.displayValue = Math.floor(Math.random() * 99+10) ;
  task01.displayValuetwo = Math.floor(Math.random() * 99+10); 
  task01.answer = task01.displayValue * task01.displayValuetwo;
  
  task01.question = "Tony bought" +task01.displayValue+ "bags of marbles. There were "+task01.displayValuetwo+" marbles in each bag. How many marbles did Tony buy?";
  return task01;
}


