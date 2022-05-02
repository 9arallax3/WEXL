<script>

  import {taskOne} from '../taskjs/GIII_MA_C5';
  import {randomCorrect} from '../taskjs/right';
  import {randomWrong} from '../taskjs/wrong';
  import {MaxandMin} from '../taskjs/AddNum';
  import Solution from './ReusableComponent/AdditionSolution.svelte'


  let heading = "Addition facts - sums up to 10";
  let question = "Add :";
  const max = 10;
  const min = 0;
  const numberofColumn = 2;
  let maxandmin = MaxandMin(max,min,numberofColumn,heading,question);
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

              <table width="200">
                <tr>
                  <td align="right"><span style="margin-right: 20px">
                     
                    {#each task01.valueArray as col, i }                        

                                {#each col as a, i}
                                  {#if a == 'i'}
                                  <input class='input-user'  type="text" style=" width : 30px" bind:value="{answer}" maxlength=7> 
                                    {:else}
                                    {a}
                                  {/if}
                                  {#if i < col.length-1}                                  
                                  +
                                  {/if}                                  
                                {/each}
                                {#if i < task01.valueArray.length-1}                                  
                                  =
                                {/if}   
                      {/each}
                     
                    </td> 
                    </tr>                
              </table>
                 
                  <h6>answer {task01.answer}</h6>
          </div>    
      </div>  
       
      <div>
          <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
       </div>
       <Solution num_qnty={task01.columns} usr_resp={answer} num={task01.solutionArray} ans_submit={showSolution}/>
      <div class="mt-3">
          <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
          <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
          <button type="button" class="btn toggle-btn" >Exit This Skill</button>          
      </div>
    </div>
   </div>
</div>
