let task01 = {
  heading: "Ways to make a number - subtraction sentences",
  question: "Here are the ways to make 4. Find the pattern and type the missing addition number sentence.",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 0,
  solutionArray : []
};

const maxValue = 10;
const minValue = 0;
const findInMaxNumber = 10;
export function taskOne() {
  task01.questionValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  task01.question = "Here are the ways to make "+task01.questionValue+". Find the pattern and type the missing addition number sentence.";
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;

  for (let i = 0; i < findInMaxNumber; i++) {
    for (let j = 0; j < findInMaxNumber; j++) {
      if (task01.questionValue == (i - j)) {
        let a = i+"-"+j+"="+(i-j);
          task01.valueArray.push(a);
      }
    }
  }
  
  task01.randomAnswer = Math.floor(Math.random() * task01.valueArray.length);
  task01.answer =  task01.valueArray[task01.randomAnswer];
  let tempnum = task01.valueArray[task01.randomAnswer].split('=');
  task01.solutionArray =  tempnum[0].split('+');
    
  return task01;
}

