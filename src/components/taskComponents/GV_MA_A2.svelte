<script>
    import {taskOne} from '../taskjs/GV_MA_A2.js';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
 
   
    let task01 = taskOne();
    let answer ;
    let showNext = "none";
    let randomQst = 0;
    let showPopUp;
 
    let getRandomQuestion = function(){
         randomQst = Math.floor(Math.random() * 4);   
     }
 
     
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
        task01 = taskOne();
        answer = null;
        showNext = "none";
     };
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">Convert between place values</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2>Solve : </h2>
            <div class="d-inline-flex p-2">   
                <input type="text" style="margin-left: 5px;" bind:value="{answer}">  
                <h4 >  = </h4>                   
                <h4 style="margin-left: 5px;">{task01.endValue} {task01.endText}</h4>  
            </div>    
        </div>
 
        
 
          <div class="mt-3">
              <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
              <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
              <button type="button" class="btn toggle-btn" >Exit This Skill</button>
              
          </div>
  
          <div>
             <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
          </div>
  
      </div>
     </div>
  </div>
 