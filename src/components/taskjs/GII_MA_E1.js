let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 2;
let maxValue = 10;
let minValue = 1;


export function taskOne() {
  task01.heading = "Addition facts - sums up to 10";
  task01.question = "Add : ";
  task01.answer = 0;
  task01.columns = columns;
  task01.valueArray = [];

      for (let i = 0; i < columns; i++) {
        task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
        task01.answer += task01.valueArray[i];        
      }
    while(task01.answer > maxValue){
      console.log('enter');
        task01.answer = 0;
      for (let i = 0; i < columns; i++) {
        task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
        task01.answer += task01.valueArray[i];        
      }
    }

  return task01;
}
