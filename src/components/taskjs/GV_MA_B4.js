let task01 = {    
    question: "Type the missing digit:",
    ValueOne: 0,
    ValueTwo: 0,
    ValueThree: 0,
    answer: 0,
    randomAnswer: 0,
    operators: ["-", "+"],
    operator : '',
    displayValues : {
        one : [],
        two : [],
        three : []
    }
  };

  const maxValue = 10000;
  const minValue = 100;
  const variations = 3;
  const numberofInputsMax = 3;
  
  export function taskOne() {
      task01.randomAnswer = Math.floor(Math.random() * (task01.operators.length));
      task01.ValueOne = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    
      task01.operator = task01.operators[task01.randomAnswer];      
      if(task01.operator == "-"){
        task01.ValueTwo = Math.floor(Math.random() * (task01.ValueOne - minValue)) + minValue;
        task01.ValueThree = task01.ValueOne - task01.ValueTwo;
      }
      else if(task01.operator == "+"){     
        task01.ValueTwo = Math.floor(Math.random() * (maxValue - minValue)) + minValue;   
        task01.ValueThree = task01.ValueOne + task01.ValueTwo;     
      }


      task01.displayValues.one = Array.from(task01.ValueOne.toString());
      task01.displayValues.two = Array.from(task01.ValueTwo.toString());
      task01.displayValues.three = Array.from(task01.ValueThree.toString());

      let randomValue = Math.floor(Math.random() * 3);
      let numberofInputsMax = Math.floor(Math.random() * 3);

      if(randomValue == 0){
        let randomInput = Math.floor(Math.random() * task01.displayValues.one.length)
        task01.answer =  task01.displayValues.one[randomInput];
        task01.displayValues.one[randomInput] = 'input';
      }else if(randomValue == 1){
        let randomInput = Math.floor(Math.random() * task01.displayValues.two.length)
        task01.answer =  task01.displayValues.two[randomInput];
        task01.displayValues.two[randomInput] = 'input';
      }else if(randomValue == 2){       
        let randomInput = Math.floor(Math.random() * task01.displayValues.three.length)
        task01.answer =  task01.displayValues.three[randomInput];
        task01.displayValues.three[randomInput] = 'input';
      }

      return task01;
  }

  