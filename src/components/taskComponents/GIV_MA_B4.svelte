<script>

    import {taskOne} from '../taskjs/GIV_MA_B4.js';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
 
   
    let task01 = taskOne();
    let answer ;
    let showNext = "none";   
    let showPopUp;
 
 
     
     let CheckAnswer = function(){
         
        if(answer == task01.answer){
                 showPopUp = randomCorrect(); 
                 showNext = "inline-block";
                 return;
             }else{
                 showPopUp = randomWrong();
                 showNext = "inline-block";
             } 
     }
     
     let NextQuestion = function(){
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
          <h2 class = "text-center display-4 mb-0">Properties of addition </h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >
            <h2>{task01.question}</h2>
            <div >   
               {#if task01.startValue == 0}
                    <h2>{task01.optionTextArray[task01.endValue]}</h2>
                    <div>
                        {#each  task01.options as optionValue,i }
                        <button class="btn btn-outline-success" on:click={handleClick(i)}>{optionValue}</button>                        
                        {/each}
                    </div>
                   {:else}
                   <div>
                    {#each  task01.optionTextArray as optionValue, i}
                    <button class="btn btn-outline-success" on:click={handleClick(i)}>{optionValue}</button>  
                    {/each}
                </div>
               {/if}
                
               <h3>{task01.answer}</h3>
            </div>    
        </div> 
 

        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
         </div>
    
        <div class="mt-3">

            <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>
        </div>  
      </div>
     </div>
  </div>
 