let task01 = {
  heading: "Add a one-digit number to a two-digit number - without regrouping",
  question: "Add : ",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 0,
  operator: "+",
  solutionArray : []
};

const maxValue = 9;
const minValue = 1;
const findInMaxNumber = 10;
export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.answer = 0;
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;
    
  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      if (10 < (i + j)) {
        let a = i+"+"+j+"="+(i+j);
          task01.valueArray.push(a);
      }
    }
  }

  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  
  
  let tempnum = task01.valueArray[task01.randomAnswer].split('=');
  task01.solutionArray =  tempnum[0].split('+');
  let n = Math.floor(Math.random() * 2);  
  task01.solutionArray[n] = (parseInt(task01.solutionArray[n]) + 10).toString();
  for (let index = 0; index <task01.solutionArray.length; index++) {
      task01.answer += parseInt(task01.solutionArray[index]);
      
  }
  console.log(task01.solutionArray);     
  return task01;
}

