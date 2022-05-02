<script>

    import {taskOne} from '../taskjs/G4_MS_C5.js';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
 
   
    let task01 = taskOne();
    let answer01, answer02;
    let showNext = "none";   
    let showPopUp;
 
 
     
     let CheckAnswer = function(){
         
        if(answer01 == task01.option[0] && answer02 == task01.option[1]){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 
             }else if(answer01 == task01.option[1] && answer02 == task01.option[0]){
                    showPopUp = randomCorrect(); 
                 showNext = "inline-block";
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
     }
     
     let NextQuestion = function(){
        answer01 = null;
        answer02 = null;
        task01 = taskOne();
        showNext = "none";
     };
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
     <div class = "bg-info rounded-top p-2">
         <h2 class = "text-center display-4 mb-0">{task01.question}</h2>
     </div>
 
     <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
       <div >
           
           <div >   
               {#each task01.displayValues as displayValue}
                   <div><h1>{displayValue}</h1></div>
               {/each}       
               <input type="text" style="margin-left: 5px;" bind:value="{answer01}"> 
               <h2>-</h2>   
               <input type="text" style="margin-left: 5px;" bind:value="{answer02}"> 
               <h2>have a difference of {task01.answer}.</h2> 
               <h2> {task01.option}.</h2> 
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