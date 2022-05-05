let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "+",
    columns: 0
   
  };
  
 
  //const Value = 10;

  export function taskOne() {
    task01.heading = "Add three numbers - use doubles ";
    task01.question = "Add:";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    
    task01.valueArray[0] = Math.floor(Math.random() * 5 + 1  ) ;   
    task01.valueArray[1] = Math.floor(Math.random() * 5  + 1  )  ;  
    task01.valueArray[2] = Math.floor(Math.random() * 5  + 1  )  ;  
   
    task01.answer = task01.valueArray[0]  =  task01.valueArray[2]  ;
    
    task01.answer = task01.valueArray[0] + task01.valueArray[1] + task01.valueArray[2];
    return task01;
  };