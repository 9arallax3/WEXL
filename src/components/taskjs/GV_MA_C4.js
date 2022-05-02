let task01 = {
  question: "Multiply numbers ending in zeroes",
  displayValue: 0,
  displayValuetwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [10, 100, 1000],
};

export function taskOne() {
  task01.randomAnswer = Math.floor(Math.random() * task01.options.length);

  task01.displayValuetwo = Math.floor(Math.random() * 9) + 1;;

  if(task01.randomAnswer === 0){
    task01.displayValue = roundUp((Math.floor(Math.random() * (1000 - 10)) + 10),task01.options[0]) ;
  }else if(task01.randomAnswer === 1){
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length-1));
    task01.displayValue = roundUp((Math.floor(Math.random() * (10000 - 100)) + 100),task01.options[task01.randomAnswer]);
  }else if(task01.randomAnswer ==2){
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    task01.displayValue = roundUp((Math.floor(Math.random() * (10000 - 100)) + 100),task01.options[task01.randomAnswer]);
  }

  task01.answer = task01.displayValue * task01.displayValuetwo;

 
  return task01;
}

function roundUp(num, precision) {
  num = parseFloat(num);
  if (!precision) return num;
  return Math.round(num / precision) * precision;
}
