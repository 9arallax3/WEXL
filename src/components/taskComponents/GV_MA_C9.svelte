<script>

    import {taskOne} from './js/GV_MA_C9.js';
    import {randomCorrect} from './js/right';
    import {randomWrong} from './js/wrong';
 
   
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
          <h2 class = "text-center display-4 mb-0">Estimate sums and differences: word problems</h2>
      </div>
  
      <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
        <div >
            <h2>{task01.question}</h2>
            <div >   
                <h4 >{task01.qstOpt}</h4> 
                
                <button class="btn btn-outline-success" on:click={handleClick(task01.operatorNum[0])}>{task01.operatorNum[0]}</button>  
                <button class="btn btn-outline-success" on:click={handleClick(task01.operatorNum[1])}>{task01.operatorNum[1]}</button>  
                <h6>answer{task01.answer}</h6>
            </div>    
        </div> 
 
        <div class="mt-3">
            
            <button class="btn btn-primary " style=" display: {showNext};" on:click={NextQuestion}>Next</button>
        </div>
  
        <div>
           <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
        </div>

      </div>
     </div>
  </div>
 