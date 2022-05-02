let task01 = {    
    question: "Which addition statement describes the array?",
    displayArray: [4,6,8,9,10],
    displayValue:[],
    answer: 0,
    randomQust: 0
  };
  





  export function taskOne() {

    
    task01.randomQust = task01.displayArray[Math.floor(Math.random() * task01.displayArray.length)];
    task01.displayValue = [];
    if(task01.randomQust == 6 || task01.randomQust == 9){
        for (let index = 0; index < (task01.randomQust/3); index++) {
            task01.displayValue[index] = 3;            
        }
    }else{
        for (let index = 0; index < (task01.randomQust/2); index++) {
            task01.displayValue[index] = 2;            
        }
    }
    

      return task01;
  }

