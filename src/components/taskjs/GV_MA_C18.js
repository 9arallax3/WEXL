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

 
  
  task01.question = "A crayon company puts " + task01.displayValue[0] + " crayons in each box. The boxes of crayons are arranged "+task01.displayValue[1]+" across and "+task01.displayValue[2]+" deep in a crate. How many crayons are in the crate?";
  return task01;
}


