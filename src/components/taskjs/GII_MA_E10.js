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
  task01.heading = "Addition word problems - one digit";
  task01.question = "When Laura painted her house, she used 5 litres of white paint and 5 litres of brown paint. How many litres of paint did Laura use in all?";
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
    task01.question = "When Laura painted her house, she used "+task01.valueArray[0]+" litres of white paint and "+task01.valueArray[1]+" litres of brown paint. How many litres of paint did Laura use in all?";
  return task01;
}
