<script>
    import {randomClock} from './jsfiles/clock.js';
    import {randomWrong} from './jsfiles/wrong.js';
    import {randomCorrect} from './jsfiles/right.js';
  
  
    let clockObj = randomClock();
    let minutes;
    let hours;
    let WrongAns ;
  
  
    function CheckAnswer(){
     if(minutes == clockObj.minutes && hours == clockObj.hours){
  
      WrongAns = randomCorrect();    
      showNext = "inline-block";
      return;
     }else{
      WrongAns = randomWrong();
      showNext = "inline-block";
     }   
  }
  
  function NextQuestion(){
      minutes = null;
      hours= null;
      clockObj = randomClock();
      showNext = "none";
  }
  
  let showNext = "none";
  
  </script>
  
  
  
  
  <style>
      
  
   
  * {
   
            transform-origin: inherit;
  }
   
  
   
  .clock {
    width: 50vmin;
    height: 40vmin;
    color: #3F3F3F;
    fill: currentColor;
    transform-origin: 50px 50px;
    animation-name: fade-in;
    animation-duration: 500ms;
    animation-fill-mode: both;
  }
   
  .clock line {
    stroke: currentColor;
    stroke-linecap: round;
  }
   
  .lines {
   
    stroke-width: 0.5px;
  }
   
  
   
  .line {
    stroke-width: 1.5px; 
  }
   
  /* .line-second {
    color: var(--color-accent);
    stroke-width: 1px;
  } */
  </style>
  
  
  
  
  <div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
     <div class = "bg-info rounded-top p-2">
         <h2 class = "text-center display-4 mb-0">Analog Clock</h2>
     </div>
     <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
    
      <div class = "row">
        <div class = "col-6">
            
          <svg class="clock" viewBox="0 0 100 100">
            <g class="lines">
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(30deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(60deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(90deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(120deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(150deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(180deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(210deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(240deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(270deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(300deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(330deg);"></line>
                <line class="line " x1="50" y1="5" x2="50" y2="10" style="transform: rotate(360deg);"></line>
            </g>
        
            <line class="line line-hour" x1="50" y1="25" x2="50" y2="50" style="transform: rotate({clockObj.setHourPos}deg); color : #56965e;"></line>
            <line class="line line-minute" x1="50" y1="15" x2="50" y2="50" style="transform: rotate({clockObj.setMinutesPos}deg);color : #56965e;"></line>
            <circle cx="50" cy="50" r="3"></circle>
        
            <!-- <g class="line line-second">
                <line x1="50" y1="10" x2="50" y2="60"></line>
                <circle cx="50" cy="50" r="1.5"></circle>
            </g> -->
        </svg>      
          </div>
          <div class = "col-6">
  
              <h3>What is the time now ?  </h3>
           
              <div>
                <label for=""> hours :</label>
                <input type="number" bind:value="{hours}">
                <label for=""> Minutes :</label>
                <input type="number" bind:value="{minutes}">
  
              </div>
            </div>
  
            <div>
              <div>
                <button class="btn btn-primary" on:click={CheckAnswer}>Submit</button>
                <button class="btn btn-primary " style=" display: {showNext};" on:click={NextQuestion}>Next</button>
            </div>
            <div>
              <h5 style=" display: {showNext};" class="mt-5">{WrongAns}</h5>                   
          </div>
            <div>
              <h5 style=" display: {showNext};" class="mt-2">The time is {clockObj.hours} hours : {clockObj.minutes } minutes </h5>   
            </div>
            </div>
      </div>
        
  
     </div>
    </div>
  </div>
  