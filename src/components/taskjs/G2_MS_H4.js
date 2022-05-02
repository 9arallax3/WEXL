let task01 = {
  heading : "",
  question: "",
  valueArray: [], 
  answer: 0, 
  operator: "-",
  columns: 0
};

const substractionvalue = 2;
const maxValue = 99;
const minValue = 10;

export function taskOne() {
  task01.heading = "Subtract two two-digit numbers - without regrouping";
  task01.question = "Subtract:";
  task01.answer = 0;
  task01.columns = 2;
  task01.valueArray = []; 
  task01.answer = 0;

  let temp = 0;
  let temparry = [];
  for (let index = 0; index < substractionvalue; index++) {    
    temp = (Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue).toString().split('').sort((a, b) => b - a);
      for (let j = 0; j < temp.length; j++) {
        if(index < 1){
          temparry[j] = temp[j];
        }else{
          temparry[j] += temp[j];
        }
        
      }
  }
  task01.valueArray = temparry.map(function(item) {
    return parseInt(item, 10);
  });
  console.log(task01.valueArray);
  task01.answer = task01.valueArray[0];
  for (let index = 1; index < task01.valueArray.length; index++) {
    task01.answer -= task01.valueArray[index];
    
  }
  return task01;
};

