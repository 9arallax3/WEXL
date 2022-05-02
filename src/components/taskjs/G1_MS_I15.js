let task01 = {
    heading: "Subtract  a one-digit number to a two-digit number - without regrouping",
    question: "Subtract  : ",
    questionValue : 0,
    valueArray: [],
    answer: 0,
    randomAnswer: 0,
    columns: 0,
    operator: "-",
    solutionArray : []
  };
  
  const maxValue = 18;
  const minValue = 1;
  const findInMaxNumber = 18;
  export function taskOne() {
    task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
   
    task01.valueArray = [];
    task01.solutionArray = [];
    task01.columns = 2;
      
    for (let i = 0; i < findInMaxNumber; i++) {
      for (let j = 0; j < findInMaxNumber; j++) {
        if (task01.questionValue == (i + j)) {
          let a = i+"-"+j+"="+(i+j);
            task01.valueArray.push(a);
        }
      }
    }
  
    task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
    
    
    let tempnum = task01.valueArray[task01.randomAnswer].split('=');
    task01.solutionArray =  tempnum[0].split('-');
    let n = Math.floor(Math.random() * 2);
    let numb = parseInt(Math.floor(Math.random() * 2) * 10);
    task01.solutionArray[n] = (parseInt(task01.solutionArray[n]) + numb).toString();
    task01.solutionArray = task01.solutionArray.sort((a, b) => b - a);
    task01.answer = task01.solutionArray[0] - task01.solutionArray[1];
    return task01;
  }
  
  