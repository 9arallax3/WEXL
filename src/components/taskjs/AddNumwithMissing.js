let task01 = {
  heading : "",
  question: "Type the missing digit:",
  valueArray: [],
  answer: [],
  operator: "+",
  displayValues:[],
  columns: 0
};

let columns = 0;
let maxValue = 0;
let minValue = 0;
let heading = "";
let question = "";
let maxInputs = 2;


export function MaxandMin(max, min,col,headingtext,qst, maxinput) {
  minValue = min;
  maxValue = max;
  columns = col;
  heading = headingtext;
  question = qst; 
  maxInputs = maxinput;
}

export function taskOne() {

  task01.heading = heading;
  task01.question = question;
  task01.answer = [];
  task01.columns = columns;
  task01.valueArray = [];
  task01.displayValues = [];
 
  let sum = 0;
  for (let i = 0; i < columns; i++) {
    task01.valueArray[i] = Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue; 
    sum += task01.valueArray[i];   
  }
  let a = sum.toString().split('');
 
  
  let tempArray = [];

  task01.valueArray.forEach(element => {    
    task01.displayValues.push(element.toString().split('').reverse());
  });

  task01.displayValues.push(sum.toString().split('').reverse());

  for (let index = 0; index < task01.displayValues.length; index++) {
    tempArray[index] = [...task01.displayValues[index]];    
  }
  
  let tempRandom = 0;
  let tempRandomInput = 0; 
  
 
  for (let index = 0; index < maxInputs; index++) {      
  tempRandom = Math.floor(Math.random() * task01.displayValues.length);
  tempRandomInput = Math.floor(Math.random() * task01.displayValues[tempRandom].length);
    if(task01.displayValues[tempRandom][tempRandomInput] == 'i'){
      while(task01.displayValues[tempRandom][tempRandomInput] == 'i'){              
        tempRandom = Math.floor(Math.random() * task01.displayValues.length);
        tempRandomInput = Math.floor(Math.random() * task01.displayValues[tempRandom].length);      
      }
      
      task01.displayValues[tempRandom][tempRandomInput] = 'i'; 
    
    }else{     
      task01.displayValues[tempRandom][tempRandomInput] = 'i';   
      
    }
  }

  
let tempId = 0;
  for (let i = 0; i <  task01.displayValues.length; i++) {
    
      for (let j = 0; j <  task01.displayValues[i].length; j++) {

          if(task01.displayValues[i][j] == 'i'){
            task01.displayValues[i][j] = ('i'+tempId);
            tempId++;
            task01.answer.push(tempArray[i][j]);
          }
        
      }
  }

  return task01;
}
