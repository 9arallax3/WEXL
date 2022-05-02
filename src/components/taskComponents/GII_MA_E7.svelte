<script>

    import {taskOne} from '../taskjs/GII_MA_E7';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import Solution from './ReusableComponent/AdditionSolution.svelte'


    let task01 = taskOne();
    let answer ;
    let showNext = "none";   
    let showPopUp;
    let showSolution= false;
 
     
     let CheckAnswer = function(){
         
        if(answer.replaceAll(' ','') == task01.answer){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                showSolution = true;
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
     }
     
     let NextQuestion = function(){
        showSolution = false;
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
          <h2 class = "text-center display-4 mb-0">{task01.heading}</h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >
            <h4>{task01.question}</h4>
            {#each task01.solutionArray as col, i }                      
                        {#if i == (task01.solutionArray.length - 1) } 
                        {task01.operator}
                        {/if}      
                            <tr>
                                {#each Array(parseInt(col)) as val}
                                <td align="right"> <svg width="60" height="60">
                                    <rect x="3" y="3" width="50" height="50" style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />  
                                    </svg></td>
                                {/each}
                            </tr>
                            
                        {/each}   
            <div > 
                <input type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=15>       
                <h6>answer {task01.answer}</h6>               
            </div>    
        </div>  

        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
         </div>
         <Solution num_qnty={task01.columns} usr_resp={answer} num={task01.solutionArray} ans_submit={showSolution} answerchange={task01.answer}/> 

        <div class="mt-3">
            <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>
        </div>
      </div>
     </div>
  </div>
 