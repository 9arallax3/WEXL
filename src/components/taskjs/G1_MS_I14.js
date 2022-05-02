let task01 = {
    heading: "Addition sentences: true or false?",
    question: "Here are the ways to make 4. Find the pattern and type the missing addition number sentence.",
    questionValue : 0,
    valueArray: [],
    answer: 0,
    randomAnswer: 0,
    columns: 0,
    solutionArray : [],
    isTrue : true
  };
  
  const maxValue = 10;
  const minValue = 1;
  const findInMaxNumber = 10;
  export function taskOne() {
    task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    task01.isTrue = Boolean(Math.round(Math.random()));
    task01.question = "Which sentence is "+ task01.isTrue+ "?";    
    task01.valueArray = [];
    task01.solutionArray = [];
    task01.columns = 2;
    let temparry = [];
    for (let i = 0; i < findInMaxNumber; i++) {
      for (let j = 0; j < findInMaxNumber; j++) {
        if (task01.questionValue == (i - j)) {
          let a = i+"-"+j+"="+(i-j);
          temparry.push(a);
        }
      }
    }
  
    task01.randomAnswer = Math.floor(Math.random() * temparry.length);
    task01.valueArray [0] =  temparry[task01.randomAnswer];
    task01.valueArray [1] =  Math.floor(Math.random() * maxValue)+"-"+Math.floor(Math.random() * maxValue)+"="+(task01.questionValue);
    if(task01.isTrue){
        task01.answer =  0;
    }else{
        task01.answer =  1;
    }
    let tempnum = task01.valueArray [0].split('=');
    task01.solutionArray =  tempnum[0].split('+');
    console.log(task01.solutionArray);
    return task01;
  }
  
  