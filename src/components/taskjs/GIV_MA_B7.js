let task01 = {    
    question: " Choose numbers with a particular sum ",
    ValueOne: 0,
    ValueTwo: 0,
    answer: 0,
    sum:'+',
    option : [0,0],
    displayValues : [],
    
  };
  let arraylenght = 8;
  
  export function taskOne() {
    let arraySize =  Math.floor(Math.random() * (arraylenght - 4)) + 4;;
    task01.displayValues = randomNumbers(arraySize,1000,1);
    let temp = randomNumbers(task01.option.length,task01.displayValues.length,0);
    for (let i = 0; i < temp.length; i++) {
        task01.option[i]=task01.displayValues[temp[i]];
    }    
    task01.answer = Math.abs(task01.option[0] + task01.option[1]);     
   
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
  