<script>

    import {taskOne} from '../taskjs/SubNumwithMissing.js';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';     
    import {MaxandMin} from '../taskjs/SubNumwithMissing';
  

    let question = "Subtract:";
    let heading = "Complete the addition sentence - sums up to 10";
    const max = 999;
    const min = 1;
    const maxInputs = 1;
    const numberofColumn = 2;
    let showSolution= false;

    let maxandmin = MaxandMin(max,min,numberofColumn,heading,question,maxInputs);   
    let task01 = taskOne();
    let answer  = [];
    let showNext = "none";   
    let showPopUp;
    let tempString = '';



    let CheckAnswer = function(){
            for (let index = 0; index < task01.answer.length; index++) {
                if(answer[index] != task01.answer[index]){
                 showPopUp = randomWrong();
                 showNext = "inline-block";
                 showSolution = true;
                 return;
             }else{
               
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
             } 
                
            }     
    
     }
     
     let NextQuestion = function(){
        showSolution = false;
        answer = [];
        task01 = taskOne();
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
            <h2>{task01.question}</h2>
            <div >   
              
                <table width="100">                  
                    
                    {#each task01.displayValues as value , i}   
                                        
                       {#if i == (task01.displayValues.length-1)}
                       <hr>
                       <tr class="tablerow">
                        {#each value as val}
                       
                        {#if val[0] == 'i'}
                        <td align="right"><input class='input-user'  type="text" style=" width : 30px" bind:value="{answer[val[1]]}" maxlength=7>   </td> 
                        {:else}
                            <td align="right">{val} </td>
                        {/if}                       
                        {/each}
                    </tr>
                           {:else}
                           <tr class="tablerow">
                            {#each value as val}

                            {#if val[0] == 'i'}
                            <td align="right"><input class='input-user'  type="text" style=" width : 30px" bind:value="{answer[val[1]]}" maxlength=7>   </td> 
                            {:else}
                                <td align="right">{val} </td>
                            {/if}
                           
                            {/each}
                        </tr>      
                       {/if}                  
                    {/each}   
            </table>
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
 