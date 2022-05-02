<script>

    import {taskOne} from '../taskjs/G2_MS_H4_4';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';

    let task01 = taskOne();
    let answer ;
    let showNext = "none";   
    let showPopUp;
    let showSolution= false;    

    let CheckAnswer = function(){
        showNext = "inline-block";
        if(answer == task01.answer){
                showPopUp = randomCorrect();                  
                return;
             }else{
                showSolution = true;
                showPopUp = randomWrong();                
            } 
     }
     
     let NextQuestion = function(){
        answer = null;
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

                <table width="100">
                    <tr>
                        {#each task01.valueArray as col, i }                        
                            {#if i == (task01.valueArray.length - 1) }                            
                                <td align="right"><span style="margin-right: 20px">{task01.operator}</span>{col} </td>
                            {:else}                            
                                <td align="right">{col} </td>                          
                            {/if}
                        {/each} 
                        <td align="right"> = </td>     
                        <td align="right"><input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=7>  </td> 
                     
                </tr>   
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
 