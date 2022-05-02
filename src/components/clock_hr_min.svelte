<script>
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';
    import * as toWord from './jsfiles/toWord.js';
    import {randomClock, rot_degree} from './jsfiles/clock.js';

    let clockObj = randomClock();
    let minutes;
    let hours;
    let WrongAns;

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;

    function init_clock_hrmin_detail() {
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        clockObj = randomClock();
        minutes=undefined;
        hours=undefined;
        ans_submit = false;
    };
    init_clock_hrmin_detail();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };
</script>

<!-- Markup Area-->
<div class="stack-large">
    <p style="color:gray">Practice telling time by the hour: </p>
    <h2>What time is it?</h2>
    <!-- drawing the clock -->    
    <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">
        <div class = "row">
            <div class = "col-6">
                <!-- Drawing the face of clock -->
                <svg class="clock" viewBox="-15 -12 100 125">
                <circle cx="50" cy="50" r="60" stroke="black" stroke-width="1" fill="yellow" />
                <circle cx="50" cy="50" r="40" stroke="grey" stroke-width="0" fill="white" />
                <circle cx="50" cy="50" r="45" stroke="grey" stroke-width="1" fill="white" />
                <g class="lines">
                    {#each rot_degree as rtn, i}
                        <line class="line " x1="50" y1="5" x2="50" y2="10" style={rtn}></line>
                        {#if (i <= 8)}
                            <text x="45" y="2" class="small" style={rtn}>{i+1}</text>
                        {:else}
                            <text x="43" y="2" class="small" style={rtn}>{i+1}</text>
                        {/if}
                    {/each}
                </g>
                <!-- Drawing the hands on the face of clock -->
                <defs>
                    <marker id="arrowhead-b" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto-start-reverse" markerUnits="strokeWidth" viewBox="0 0 20 20">
                        <path d="M0,0 L0,6 L9,3 z" fill="blue" />
                    </marker>
                    <marker id="arrowhead-r" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto-start-reverse" markerUnits="strokeWidth" viewBox="0 0 20 20">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <line class="line line-hour" x1="50" y1="25" x2="50" y2="50" marker-start="url(#arrowhead-r)" style="transform: rotate({clockObj.setHourPos}deg); color : red;"></line>
                <line class="line line-minute" x1="50" y1="15" x2="50" y2="50" marker-start="url(#arrowhead-b)" style="transform: rotate({clockObj.setMinutesPos}deg);color : blue;"></line>
                <circle cx="50" cy="50" r="3"></circle>

            
                <!-- <g class="line line-second">
                    <line x1="50" y1="10" x2="50" y2="60"></line>
                    <circle cx="50" cy="50" r="1.5"></circle>
                </g> -->
                </svg>      
            </div>

            <div class = "col-6">
                <h3>Enter the given time:</h3>
                <div>
                    <label for=""> hours :</label>
                    <input type="number" bind:value="{hours}">
                    <label for=""> Minutes :</label>
                    <input type="number" bind:value="{minutes}">
                </div>
            </div>

            <div>    
                {#if ans_submit}
                    {#if (hours == clockObj.hours)}
                        {#if (minutes == clockObj.minutes)}
                            <p>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</p>
                        {:else}
                            <p>The "hour" value is correct, but the "minutes" value is not correct!</p>
                        {/if}
                    {:else}
                        <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
                    {/if}
                {/if}
            </div>
        </div>
    
    </div>

    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_clock_hrmin_detail()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
</div>


<style>

* { 
    transform-origin: inherit;
}
     
.small { font: bold 13px sans-serif; color:chocolate}    
     
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