let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 2;
let maxValue = 9;
let minValue = 1;


export function taskOne() {
  task01.heading = "Write the addition sentence - one digit";
  task01.question = "When Jill first moved into her house, there were no flowers in her back garden. Since then, Jill has planted 6 roses and 5 daisies. How many flowers are in her back garden now?";
  task01.answer = 0;
  task01.columns = columns;
  task01.valueArray = [];
      for (let i = 0; i < columns; i++) {
        task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
        task01.answer += task01.valueArray[i];        
      }
        while(task01.answer > maxValue){
            task01.answer = 0;
        for (let i = 0; i < columns; i++) {
            task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
            task01.answer += task01.valueArray[i];        
        }
        }
    task01.question = "When Jill first moved into her house, there were no flowers in her back garden. Since then, Jill has planted "+task01.valueArray[0]+" roses and "+task01.valueArray[1]+" daisies. How many flowers are in her back garden now?";
  return task01;
}
