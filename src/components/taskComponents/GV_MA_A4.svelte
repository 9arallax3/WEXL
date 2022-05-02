<script>

    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import {taskOne} from '../taskjs/GV_MA_A4';
    import {taskTwo} from '../taskjs/GV_MA_A4';

    let answer ;
    let showNext = "none";
    let randomQst = 0;
    let showPopUp;
    let task01 = taskOne();
    let task02 = taskTwo();

    let getRandomQuestion = function(){
         randomQst = Math.floor(Math.random() * 2);   
     }
     getRandomQuestion();
     
     let CheckAnswer = function(){
        if(randomQst == 0){
            if(answer === task01.answer){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
        } else{
            if(answer === task02.answer){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
        } 
       
     }
     
     let NextQuestion = function(){        
        task01 = taskOne();
        task02 = taskTwo();
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
          <h2 class = "text-center display-4 mb-0">Heading</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
       {#if randomQst == 0}
       <div >
        <h2>{task01.question}</h2>
        <h4>{task01.displayValue}</h4>
        <div class=" p-2">         
            {#each task01.options as  option,i}
            <button class="btn btn-outline-success d-block mt-2 w-50" on:click={handleClick(i)}>{option}</button>
            {/each}             
            
           
        </div>    
    </div> 
    {:else}
        <div >
            <h2>{task02.question}</h2>
            <h4 >{task02.displayValue}</h4>
            <div class=" p-2">  
                {#each task02.options as  option,i}
                <button class="btn btn-outline-success d-block mt-2 w-50" on:click={handleClick(i)}>{option}</button>
                {/each}                      
           
            </div>    
        </div>
       {/if}
        
 
 
       <div>
        <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
     </div>
 
        <div class="mt-3">
            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Exit This Skill</button>
            
          </div>
        
         
  
      </div>
     </div>
  </div>
 