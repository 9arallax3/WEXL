<script>

    import {taskOne} from '../taskjs/AddNum';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import {MaxandMin} from '../taskjs/AddNum';
    import Solution from './ReusableComponent/AdditionSolution.svelte'


    let heading = "Add three or more numbers up to five digits each";
    let question = "Add :";
    const max = 9999;
    const min = 1;
  
    
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
        let numberofColumn = Math.floor(Math.random() * (5 - 3)) + 3;
        let maxandmin = MaxandMin(max,min,numberofColumn,heading,question);
        answer = null;
        task01 = taskOne();
        showSolution = false;
        showNext = "none";
     };
     NextQuestion();
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
                    
                        {#each task01.valueArray as col, i }                        
                            {#if i == (task01.valueArray.length - 1) }
                            <tr>
                                <td align="right"><span style="margin-right: 20px">{task01.operator}</span>{col} </td>
                            </tr>
                            {:else}
                            <tr>
                                <td align="right">{col} </td>
                            </tr>
                            {/if}
                        {/each}                  
                </table>
                    <hr style="width:100px;text-align:left;margin-left:5px;border: 1px solid">
                    <input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=7>  
                    <h6>answer {task01.answer}</h6>
            </div>    
        </div>  
         
        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
         </div>
         <Solution num_qnty={task01.columns} usr_resp={answer} num={task01.valueArray} ans_submit={showSolution}/>
        <div class="mt-3">
            <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>          
        </div>
      </div>
     </div>
  </div>
 