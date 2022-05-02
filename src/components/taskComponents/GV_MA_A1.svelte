<script>
   import {taskOne} from '../taskjs/GV_MA_A1';
   import {taskTwo} from '../taskjs/GV_MA_A1';
   import {taskThree} from '../taskjs/GV_MA_A1';
   import {taskFour} from '../taskjs/GV_MA_A1';
   import {randomCorrect} from '../taskjs/right';
   import {randomWrong} from '../taskjs/wrong';

  
   let task01 = taskOne();
   let task02 = taskTwo();
   let task03 = taskThree();
   let task04 = taskFour();
   let answer ;
   let showNext = "none";
   let randomQst = 0;
   let showPopUp;

   let getRandomQuestion = function(){
        randomQst = Math.floor(Math.random() * 4);   
    }

    
    let CheckAnswer = function(){
        
        if(randomQst == 0){
            if(answer == task01.answer){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
                return;
            }else{
                showPopUp = randomWrong();
                showNext = "inline-block";
            } 
        return ;
        }
        if(randomQst == 1){
            if(answer == task02.answer){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
                return;
            }else{
                showPopUp = randomWrong();
                showNext = "inline-block";
            } 
        return ;
        }
        if(randomQst == 2){
            if(answer.toLowerCase() == task03.answer.toLowerCase()){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
                return;
            }else{
                showPopUp = randomWrong();
                showNext = "inline-block";
            } 
        return ;
        }
        if(randomQst == 3){
            if(answer == task04.answer){
                showPopUp = randomCorrect(); 
                showNext = "inline-block";
                return;
            }else{
                showPopUp = randomWrong();
                showNext = "inline-block";
            } 
        return ;
        }
    }
    
    let NextQuestion = function(){
        answer = null ;
        task01 = taskOne();
        task02 = taskTwo();
        task03 = taskThree();
        task04 = taskFour();
       getRandomQuestion();
       showNext = "none";
    };
    
    
    
    getRandomQuestion();



</script>

<style>



</style>



<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
     <div class = "bg-info rounded-top p-2">
         <h2 class = "text-center display-4 mb-0">Place values and number sense</h2>
     </div>


     <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
        

        {#if randomQst == 0}
             <!-- 01 -->
            <div >
                <h2>Solve : </h2>
                <div class="d-inline-flex p-2">   
                    <h4 >{task01.startValue} {task01.startText} = </h4>
                    <input type="text" style="margin-left: 5px;" bind:value="{answer}">           
                    <h4 style="margin-left: 5px;">{task01.endText}</h4>  
                </div>    
            </div>
        {:else if randomQst == 1}
            <!-- 02 -->
            <div >
                <h2>What is the Missing Number</h2>
                <div class="d-inline-flex p-2">        
                    {#each task02.displayArray as value,i}
                               
                        {#if i == task02.inputNumber}
                        <span><input type="text"  bind:value="{answer}"></span>  
                        {:else}
                            <h1 >{value}</h1> 
                        {/if}
                        {#if i < 3 }
                        <h1 >+</h1>                  
                        {/if}  
                           
                    {/each}
                <h1>=</h1>
                <h1>{task02.endValue}</h1>
                </div>            
            </div>
        {:else if randomQst == 2}
            <!-- 03 -->
            <div >
                <h2>What is the value of Blue digit</h2>
                <h2>        
                    {#each task03.displayValue as value,i} 
                                
                        {#if i == task03.colorValue}
                            <span style="color:blue">{value}</span>
                            {:else}
                            <span >{value}</span>
                        {/if}            
                    {/each}
                </h2>
                <div>        
                    <span><input type="text" bind:value="{answer}"></span>       
                </div>     
            </div>
            {:else}
                <!-- 04 -->
                <div>
                    <h2>What number has {task04.thousands} thousands, {task04.hundreds} hundreds, {task04.tens} tens and {task04.ones} ones </h2>
                    <div>        
                        <span><input type="text" bind:value="{answer}"></span>       
                    </div>              
                </div>

        {/if}    
 

       
       


        <div>
            <p style=" display: {showNext};" class="mt-5">{showPopUp}</p>          
         </div>

         <div class="mt-3">
             <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
             <button type="button" class="btn toggle-btn" on:click={NextQuestion}>Rerun</button>
             <button type="button" class="btn toggle-btn" >Exit This Skill</button>
            
         </div>
 
         
 
     </div>
    </div>
 </div>
