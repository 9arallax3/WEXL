let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 3;
let maxValue = 9;
let minValue = 1;


export function taskOne() {
  task01.heading = "Add three or more one-digit numbers - word problems";
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
  task01.question = "In the equipment locker for gym class there are "+task01.valueArray[0]+" basketballs, "+task01.valueArray[1]+" soccer balls, and "+task01.valueArray[2]+" volleyballs. How many balls are in the equipment locker?";
  return task01;
}
