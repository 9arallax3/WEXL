<script>

    import {taskOne} from '../taskjs/GIV_MA_B2';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import Solution from './ReusableComponent/AdditionSolution.svelte';

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
        answer = null;
        showSolution = false;
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
           <input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{answer}" maxlength=7> 
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