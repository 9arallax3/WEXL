let task01 = {
  question: "Estimate the sum by rounding each number to the nearest thousand and then adding.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [1000, 10, 100,10000],
  Disoptions: ["thousand", "ten", "hundred", "ten thousand"],
  opraters : ['+' , '-'],
  operatorNum : 0,
  qstOpt : ""

};

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    let tempNum = Math.floor(Math.random() * (task01.opraters.length));
    task01.displayValue = Math.floor(Math.random() * (99 - 11)) + 11;
    task01.displayValueTwo = Math.floor(Math.random() * (99 - 11)) + 11;
   
         
        task01.question = "Estimate the product. Round each factor to the nearest ten, then multiply."
        task01.answer = roundUp(task01.displayValue,10) * roundUp(task01.displayValueTwo,10);
   
    
    task01.qstOpt = task01.displayValue +  " X " + task01.displayValueTwo;
   
    return task01;
}

function roundUp(num, precision) {
  num = parseFloat(num);
  if (!precision) return num;
  return Math.round(num / precision) * precision;
}
