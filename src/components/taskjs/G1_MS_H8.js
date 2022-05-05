let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "-",
    columns: 0
  };
  
  const substractionvalue = 8;
  const maxValue = 23;
  const minValue = 8;
  
  export function taskOne() {
    task01.heading = "Subtracting 8";
    task01.question = "Subtract:";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    task01.valueArray[0] = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue ) ;   
    task01.valueArray[1] = substractionvalue;   
  
    task01.answer = task01.valueArray[0] - minValue;
  
    return task01;
  };