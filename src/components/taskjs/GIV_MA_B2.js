let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 2;
let maxValue = 9999;
let minValue = 1000;


export function taskOne() {
  task01.heading = "Add numbers up to five digits: word problems";
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
  task01.question = "A car company produced  "+task01.valueArray[0]+" cars in North America and "+task01.valueArray[1]+" cars in Europe. How many cars is that in all?";
  return task01;
}
