let task01 = {
    heading : "",
    question: "",
    valueArray: [], 
    answer: 0, 
    operator: "-",
    columns: 0
   
  };
  
 
  const MaxRange = 20;

  export function taskOne() {
    task01.heading = "Subtract Doubles :";
    task01.question = "Subtract.";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    
         
    task01.valueArray[1] = Math.floor(Math.random( )* MaxRange/2 + 1 )
         
    task01.valueArray[0] = task01.valueArray[1] * 2 ; 
    
    
  
  // task01.answer = task01.valueArray[0]   = task01.valueArray[1] ;
    
 
    return task01;
  };