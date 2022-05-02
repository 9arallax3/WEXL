let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "+",
  columns: 0
};

let columns = 2;
let maxValue = 18;
let minValue = 1;


export function taskOne() {
  task01.heading = "Addition word problems - sums up to 18";
  task01.question = "A school book fair sold 2 chapter books and 9 picture books. How many books were sold in all?";
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
    task01.question = "A school book fair sold "+task01.valueArray[0]+" chapter books and "+task01.valueArray[1]+" picture books. How many books were sold in all?";
  return task01;
}
