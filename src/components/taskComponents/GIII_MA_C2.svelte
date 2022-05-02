<script>

    import {taskOne} from '../taskjs/GIII_MA_C2';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
   


    let task01 = taskOne();
    let answer = [] ;
    let showNext = "none";   
    let showPopUp;
    let showSolution= false;    

    let CheckAnswer = function(){
        
        showNext = "inline-block";
        for (let index = 0; index < answer.length; index++) {
            if(task01.input != index){
                if(answer[index] != task01.answer[index]){
                    showPopUp = randomWrong(); 
                    showSolution = true;                
                 return;
             }else{
                showPopUp = randomCorrect();           
             } 
            }
           
            
        }
     }
     
     let NextQuestion = function(){
         answer = [];
        answer.length = task01.answer.length;
        task01 = taskOne();
        showSolution = false;
        showNext = "none";
     };
   
 </script>
 
 <style>
 
    
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">{task01.heading}</h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >


            <h4>{task01.question}</h4>
     
            <div >   
                <h4>Rule: add {task01.qstNum}</h4>
                <table width="100">
                    
                        {#each task01.valueArray as col, i }                        
                        <tr>
                            {#each col as a}                          
                                {#if a == 'i'}
                                <td align="right"><input class='input-user'  type="text" style=" width : 60px" bind:value="{answer[i]}" maxlength=7> </td>
                                {:else}
                                <td align="right">{a}</td>
                                {/if}                            
                            {/each}
                        </tr>
                        {/each}                  
                </table>
                 
                     
                    <h6>answer {task01.answer}</h6>
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
 