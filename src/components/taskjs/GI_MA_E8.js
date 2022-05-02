import {randomArrayNumbers} from './Utility/randomNumGen';

let task01 = {
  heading: "Addition sentences using number lines - sums up to 18",
  question: "Which addition sentence does this model show?",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 0,
  solutionArray : [],
  verticalLinePos : [],
  lineMaxWidth : 0,
};

const lineWidth = 600;

const findInMaxNumber = 18;


export function taskOne() {
  
  task01.randomAnswer = [];
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;

  task01.lineMaxWidth = lineWidth;

    for (let i = 0; i < findInMaxNumber; i++) {
      task01.verticalLinePos[i] = (lineWidth / (findInMaxNumber + 1)) * (i + 1);
        } 


  for (let i = 1; i < findInMaxNumber; i++) {
    for (let j = 1; j < findInMaxNumber; j++) {      
       
        if((i+j) < findInMaxNumber){
          let a = i+"+"+j+"="+(i+j);
          task01.randomAnswer.push(a);   
        }  
    }
  }
  
  task01.valueArray = randomArrayNumbers(4,task01.randomAnswer.length,0,task01.randomAnswer);
  let tempN = Math.floor(Math.random() * task01.valueArray.length );
  task01.answer =  task01.valueArray[tempN];
  
  let tempnum = task01.answer.split('=');
  task01.solutionArray =  tempnum[0].split('+').map(function(item) {
    return parseInt(item, 10);
});;
  

    while(task01.solutionArray[0] > task01.solutionArray[1]){
   
      task01.valueArray = randomArrayNumbers(4,task01.randomAnswer.length,0,task01.randomAnswer);
      tempN = Math.floor(Math.random() * task01.valueArray.length );
      task01.answer =  task01.valueArray[tempN];   
      let tempnum = task01.answer.split('=');
      task01.solutionArray =  tempnum[0].split('+').map(function(item) {
        return parseInt(item, 10);
    });      
    }
    task01.answer =  tempN; 
    
  return task01;
}

