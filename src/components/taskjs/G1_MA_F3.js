let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "+",
    columns: 0
   
  };
  
 
  const Value = 10;

  export function taskOne() {
    task01.heading = "Add using doubles minus one ";
    task01.question = "Add the near doubles.";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    
    task01.valueArray[0] = Math.floor(Math.random() * 10  + 1  ) ;   
    task01.valueArray[1] = Math.floor(Math.random() * 10  + 1  )  ;  
   
    task01.answer = task01.valueArray[1]  =  task01.valueArray[0] - 1 ;
    
    task01.answer = task01.valueArray[0] + task01.valueArray[1]  ;
    return task01;
  };