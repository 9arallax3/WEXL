<script>

    import {randomCorrect} from '../taskjs/right';
    import {randomWrong} from '../taskjs/wrong';
    import {taskOne} from '../taskjs/GV_MA_A6';
   

    let answer ;
    let showNext = "none";
    let showPopUp;
    let task01 = taskOne();
  
     
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
          <h2 class = "text-center display-4 mb-0">Even or odd: arithmetic rules</h2>
      </div>
 
 
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
         
        <div >
            <h2>Question</h2>
            <div class="d-inline-flex p-2">   
                <h4 >{task01.question} </h4>                      
                
            </div> 
            <div >                      
                <button class="btn btn-outline-success d-block mt-2 w-50" on:click={handleClick(0)}>Even</button>
                <button class="btn btn-outline-success d-block mt-2 w-50" on:click={handleClick(1)}>Odd</button>
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
 