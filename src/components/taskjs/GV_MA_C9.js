let task01 = {
  question: "A soda factory makes 574 litres of ginger ale each day. About how many litres of ginger ale will the factory make in 53 days? Choose the better estimate.",
  displayValue: 0,
  displayValueTwo: 0,
  answer: 0,
  randomAnswer: 0,
  options: [10, 100],
  Disoptions: [ "ten", "hundred"],
  opraters : ['+' , '-'],
  operatorNum : [0,0],
  qstOpt : ""
    
};

export function taskOne() {
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    let tempNum = Math.floor(Math.random() * (task01.opraters.length));
    task01.displayValue = Math.floor(Math.random() * (100 - 10)) + 10;
    task01.displayValueTwo = Math.floor(Math.random() *(1000 - 10)) + 10;
    console.log(tempNum);
    task01.question = "A soda factory makes "+ task01.displayValue + " litres of ginger ale each day. About how many litres of ginger ale will the factory make in " + task01.displayValueTwo +"days? Choose the better estimate."
    task01.operatorNum[0] = roundUp(task01.displayValue,10) * task01.displayValueTwo;
    task01.operatorNum[1] = roundUp(task01.displayValue,10) * roundUp(task01.displayValueTwo,10);
    
    task01.answer = roundUp(task01.displayValue,10) * roundUp(task01.displayValueTwo,10);
     
    
    return task01;
}

function roundUp(num, precision) {
  num = parseFloat(num);
  if (!precision) return num;
  return Math.round(num / precision) * precision;
}
