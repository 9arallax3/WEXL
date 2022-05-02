<script>

import {taskOne} from '../taskjs/GV_MA_B3.js';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
 
   
    let task01 = taskOne();
    let answer ;
    let showNext = "none";   
    let showPopUp;
 
 
     
     let CheckAnswer = function(){
         
        if(task01.variation == 1){
            if(answer == task01.displayValueOne){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
        }else{
            if(answer == task01.displayValueTwo){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
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
          <h2 class = "text-center display-4 mb-0">Complete addition and subtraction sentences</h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >
            <h2>{task01.question}</h2>
            <div >   
                    
                

            {#if task01.variation == 0}
                    <h4 style="padding-left: 16px;">{task01.displayValueOne} </h4>                        
                    {task01.operator}   <input type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=7>  
                  
                {:else}              
                       
                <input type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=7>  
                <h4 >{task01.operator} {task01.displayValueTwo} </h4> 
            {/if}

                <hr>
            <h4>{task01.answer}</h4>
            </div>    
        </div> 
 
        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
         </div>
 
        <div class="mt-3">
            <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>
        </div>
       
      </div>
     </div>
  </div>
 