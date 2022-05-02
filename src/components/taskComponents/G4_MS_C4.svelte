<script>

    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import {taskOne} from '../taskjs/G4_MS_C4';

    let showNext = "none";
    let showPopUp;
    let task01 = taskOne();
    let answer = [];
     
     let CheckAnswer = function(){
        for (let index = 0; index < answer.length; index++) {
            if(answer[index] != task01.answer * task01.Options[index]){
                showPopUp = randomWrong();
                showNext = "inline-block";
                console.log('01');
                break;
            }
            if(index == answer.length -1){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
                console.log('02');
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
          <h2 class = "text-center display-4 mb-0">Subtraction patterns over increasing place values</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2> {task01.question}</h2>
            <div class=" p-2">   

                    {#each  task01.Options as optionValue,i }
                    <div>
                        {#each  task01.valueArray as value,j }
                        {#if j == task01.valueArray.length - 1}  
                        <h4 style="display: inline;">=</h4>
                        {/if} 
                        {#if j == task01.valueArray.length - 2 }  
                        <h4 style="display: inline;">-</h4>
                        {/if} 

                        {#if value == 'i'}  
                        <input type="text" style="margin-left: 5px;" bind:value="{answer[i]}">
                        {:else}
                        <h4 style="display: inline;">{value * optionValue}</h4>
                        {/if}            
                        {/each}  
                    </div>                
                {/each}                  

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
 