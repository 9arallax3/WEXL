<script>
import { each } from 'svelte/internal';


    import {taskOne} from '../taskjs/G2_MS_F7';
    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';

   

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
               {#each task01.displayArray as value,i}
               <button class="btn toggle-btn " on:click={handleClick(i)}>                
                
                        {#each Array(value) as _,a }
                            <svg width="60" height="60">
                                <rect x="3" y="3" width="50" height="50" style="fill:blue;stroke:blue;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />  
                                </svg>  
                        {/each}
                   
                
            </button>   
               {/each}                                    
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
 