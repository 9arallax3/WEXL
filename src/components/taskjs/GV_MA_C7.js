let task01 = {    
    question: "Choose two numbers from the box to complete the multiplication number sentence.",
    ValueOne: 0,
    ValueTwo: 0,
    answer: 0,
    options: ["-", "+"],
    sum:'-',
    option : [0,0],
    displayValues : [0,0,0,0]
  };
  
  export function taskOne() {

    task01.displayValues = randomNumbers(task01.displayValues.length,9,1);
    let temp = randomNumbers(task01.option.length,task01.displayValues.length,0);
    for (let i = 0; i < temp.length; i++) {
        task01.option[i]=task01.displayValues[temp[i]];
    }
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    task01.sum = task01.options[task01.randomAnswer];
    task01.answer = task01.option[0] * task01.option[1];
    return task01;
  }
  

  function randomNumbers(count, max , min){
    var stop = count;
    var numbers = [];
    for (let i = 0; i < stop; i++) {
    var n =  Math.floor(Math.random() * (max - min)) + min;
    var check = numbers.includes(n);
        
        if(check === false) {
            numbers.push(n);
        } else {
            while(check === true){
            n =  Math.floor(Math.random() * (max - min)) + min;
            check = numbers.includes(n);
                if(check === false){
                numbers.push(n);
                }
            }
        }
        }
    return numbers;
  }
  