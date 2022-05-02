<script>

    import {randomCorrect} from './js/right';
    import {randomWrong} from './js/wrong';
    import {taskOne} from './js/GV_MA_C1';
   

    let answer ;
    let showNext = "none";
    let showPopUp;
    let task01 = taskOne();
  
     
     let CheckAnswer = function(){
         
        if(answer == task01.answer){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
     }
     
     let NextQuestion = function(){
        answer = null;
        task01 = taskOne();
        showNext = "none";
     };
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">Multiply by one-digit numbers</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2>Multiply.</h2>
            <div class=" p-2">   
                <h4 >{task01.displayValue} </h4>
                <h4 >X {task01.displayValuetwo} </h4>
                <input type="text" style="margin-left: 5px;" bind:value="{answer}">           
                
            </div>    
        </div>
        
 
 
        
 
          <div class="mt-3">
              <button class="btn btn-primary" on:click={CheckAnswer}>Submit</button>
              <button class="btn btn-primary " style=" display: {showNext};" on:click={NextQuestion}>Next</button>
          </div>
  
          <div>
             <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
          </div>
  
      </div>
     </div>
  </div>
 