<script>

    import {randomCorrect} from './js/right';
    import {randomWrong} from './js/wrong';
    import {taskOne} from './js/GV_MA_C3';
   

    
    let showNext = "none";
    let showPopUp;
    let task01 = taskOne();
    let answer = new Array(task01.Options.length);
     
     let CheckAnswer = function(){
        
        for (let index = 0; index < answer.length; index++) {
            
            if(answer[index] != task01.answer){
                showPopUp = randomWrong();
                showNext = "inline-block";
                break;
            }
            if(index == answer.length -1){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
            }
        }
     
       
     }
     
     let NextQuestion = function(){
        answer = []; 
        task01 = taskOne();
        answer = new Array(task01.Options.length);
        showNext = "none";
     };
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">Multiplication patterns over increasing place values</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2> {task01.question}</h2>
            <div class=" p-2">   
               
                {#each  task01.Options as optionValue,i }
                    <div>{task01.displayValue} X <input type="text" style="margin-left: 5px;" bind:value="{answer[i]}"> = {(task01.displayValue * task01.answer)* optionValue}</div>                     
                {/each}           

            </div>    
        </div>
        
 
 
        
 
          <div class="mt-3">
              <button class="btn btn-primary" on:click={CheckAnswer}>Submit</button>
              <button class="btn btn-primary " style=" display: {showNext};" on:click={NextQuestion}>Next</button>
          </div>
  
          <div>
             <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
          </div>
  
      </div>
     </div>
  </div>
 