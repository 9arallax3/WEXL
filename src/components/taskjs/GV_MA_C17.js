let task01 = {
  question: "Multiply numbers ending in zeroes",
  displayValue: [],
  randomValue: 0,
  answer: 1
 
};

export function taskOne() {
    task01.randomValue = Math.floor(Math.random() * (5 - 3)) + 3;
    for (let index = 0; index < task01.randomValue; index++) {
        task01.displayValue[index] = Math.floor(Math.random() * (10 - 1)) + 1;
        task01.answer *= task01.displayValue[index];        
    }

 
  
  task01.question = "Tony bought" +task01.displayValue+ "bags of marbles. There were "+task01.displayValuetwo+" marbles in each bag. How many marbles did Tony buy?";
  return task01;
}


