<script>

    import {taskOne} from '../taskjs/GV_MA_B4.js';
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
     
     
     
 
 
 
 
 </script>
 
 <style>
 
 
 
 </style>
 
 
 
 <div class="container mt-5">
     <div class="shadow-sm  bg-white rounded">
      <div class = "bg-info rounded-top p-2">
          <h2 class = "text-center display-4 mb-0">Fill in the missing digits</h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >
            <h2>{task01.question}</h2>
            <div >   
              
                <div class="row ">                 
                 
                    <div class = 'col-3'>                       
                        {#each task01.displayValues.one as value,i}
                            {#if task01.displayValues.one[i] === 'input'}
                            <input type="text" style="width : 30px;" bind:value="{answer}" maxlength = 1>
                                {:else}                               
                                <h5 style="display: inline-block; width : 30px; text-align: center;">{value}</h5>
                            {/if}
                        {/each}   
                       
                        
                    </div>
                </div>   
               

                <div class="row">
                    
                   <h5 style="display: inline-block; width : 30px; text-align: center;">{task01.operator}</h5>

                    <div class = 'col-3' style="display: inline-block;">
                       
                        {#each task01.displayValues.two as value,i}
                            {#if task01.displayValues.two[i] === 'input'}
                                <input type="text" style="width : 30px;" bind:value="{answer}" maxlength = 1>
                                {:else}                                
                                <h5 style="display: inline-block; width : 30px; text-align: center;">{value}</h5>
                            {/if}
                        {/each}   
                       
                        
                    </div>
                </div> 

               
                <div class="row">                 
                   

                    <div class = 'col-5 '>                                              
                        {#each task01.displayValues.three as value,i}
                            {#if task01.displayValues.three[i] === 'input'}
                            <input type="text" style="width : 30px;" bind:value="{answer}" maxlength = 1>
                                {:else}
                                <h5 style="display: inline-block; width : 30px; text-align: center;">{value}</h5>
                            {/if}
                        {/each} 
                    </div>
                </div> 

                <h6>{task01.answer}</h6>
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
 