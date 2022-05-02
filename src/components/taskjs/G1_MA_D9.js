let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "+",
    columns: 0
  };
  
  const additionvalue = 9;
  const maxValue = 18;
  const minValue = 1;
  
  export function taskOne() {
    task01.heading = "Adding 9";
    task01.question = "Add:";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    task01.valueArray[0] = Math.floor(Math.random() * (maxValue + minValue + 1) + minValue ) ;   
    task01.valueArray[1] = additionvalue;   
  
    task01.answer = task01.valueArray[0] + 9;
  
    return task01;
  };