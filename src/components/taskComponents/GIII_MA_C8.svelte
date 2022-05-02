<script>

    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import {taskOne} from '../taskjs/GIII_MA_C8';
   

    
    let showNext = "none";
    let showPopUp;
    let task01 = taskOne();
    let answer = new Array(task01.Options.length);
     
     let CheckAnswer = function(){
        
        
     
        if(task01.variations == 0){
            for (let index = 0; index < answer.length; index++) {
            
            if(answer[index] != (task01.displayValueTwo  * task01.Options[index])){
                showPopUp = randomWrong();
                showNext = "inline-block";
                break;
            }
            if(index == answer.length -1){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
            }
        }
        }else if(task01.variations == 1){
            for (let index = 0; index < answer.length; index++) {
           
            if(answer[index] != ((task01.displayValueOne +task01.displayValueTwo)  * task01.Options[index])){
                showPopUp = randomWrong();
                showNext = "inline-block";
                break;
            }
            if(index == answer.length -1){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
            }
        }
        }else {
            for (let index = 0; index < answer.length; index++) {
            
            if(answer[index] != (task01.displayValueOne  * task01.Options[index])){
                showPopUp = randomWrong();
                showNext = "inline-block";
                break;
            }
            if(index == answer.length -1){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
            }
        }
        }
     }
     
     let NextQuestion = function(){
        answer = []; 
        task01 = taskOne();
        answer = new Array(task01.Options.length);
        showNext = "none";
     };
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">Multiplication patterns over increasing place values</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2> {task01.question}</h2>
            <div class=" p-2">   
               
                {#if 0 == task01.variations}
                    {#each  task01.Options as optionValue,i }
                    <div>{task01.displayValueOne *optionValue} + <input type="text" style="margin-left: 5px;" bind:value="{answer[i]}"> = {(task01.displayValueOne +task01.displayValueTwo) * optionValue}</div>                     
                {/each}                  
               {/if} 
                       
               {#if 1 == task01.variations}
               {#each  task01.Options as optionValue,i }
               <div>{task01.displayValueOne *optionValue} + {task01.displayValueTwo *optionValue} = <input type="text" style="margin-left: 5px;" bind:value="{answer[i]}"> </div>                     
           {/each}                  
          {/if} 
          {#if 2 == task01.variations}
                    {#each  task01.Options as optionValue,i }
                    <div><input type="text" style="margin-left: 5px;" bind:value="{answer[i]}">+ {task01.displayValueTwo *optionValue} = {(task01.displayValueOne +task01.displayValueTwo) * optionValue}</div>                     
                {/each}                  
               {/if} 
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
 