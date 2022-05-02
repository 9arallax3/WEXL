<script>

    import {taskOne} from '../taskjs/GI_MA_E3';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import Solution from './ReusableComponent/AdditionSolution.svelte'
   

    let task01 = taskOne();
    let answer ;
    let showNext = "none";   
    let showPopUp;
    let showSolution= false;
    

     let CheckAnswer = function(){
         
        if(answer == task01.answer){
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
     
     
     const handleClick = (parameter) => () => {
        answer = parameter;
        CheckAnswer();
    }
 
 
 
 
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
               {#each task01.valueArray as value,i}
               <button class="btn toggle-btn " on:click={handleClick(i)}>{value}</button>   
               {/each}
                                     

            </div>    
        </div>  
         
        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
         </div>
        
         <Solution num_qnty={task01.columns} usr_resp={answer +1} num={task01.solutionArray} ans_submit={showSolution} answerchange={task01.answer+1}/> 
        <div class="mt-3">

            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>
          
        </div>
  
      

      </div>
     </div>
  </div>
 