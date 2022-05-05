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
    task01.heading = "Add a multiple of ten ";
    task01.question = "Add:";
    task01.answer = 0;
    task01.columns = 2;
    task01.valueArray = [];
    
    task01.valueArray[0] = Math.floor(Math.random()* 7 + 1 ) * 10  ;   
    task01.valueArray[1] = Math.floor(Math.random()* 30 + 1 )  ;  
      
   
    //task01.answer = task01.valueArray[0]  =  task01.valueArray[1]  ;
    
    task01.answer = task01.valueArray[0] + task01.valueArray[1]  ;
    return task01;
  };