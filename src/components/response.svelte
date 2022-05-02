<script>
import {randomCorrect, randomWrong} from './taskjs/taskResp_repo.js';
import {createEventDispatcher} from 'svelte';
import NPad from './Input_digits_10btn.svelte';
import ToyPad from './Input_digitpad.svelte';
import DrawNumbLine from './draw_numbLine.svelte';
import ShowAddSoln from './respShowAddSoln.svelte';
import ShowSubtSoln from './respShowSubtSoln.svelte';
import { custActConfig, renderedActivity, 
    number_line_object, count_Line_Obj, MAX_LINE_WIDTH } from './taskjs/taskObjDefn.js';
import {partial_string_compare } from './taskjs/Utility/commUtil.js';

export let rendAct = renderedActivity;
export let actConfig = custActConfig;
export let tObj = taskObject;
let showNumberLine = true;
let showDetailedAddition = false;
let showDetailedSubtraction = false;

// values used for displaying the number line
let numLineObj = number_line_object;
//values used in the counting on top of the std numberline
let countLineObj = count_Line_Obj;

// for triggering redoTask event in the parent component
const dispatch = createEventDispatcher();
    
function CheckAnswer(){
    rendAct.showNext = "inline-block";
    if (rendAct.usrResp == rendAct.correct_answer) {
        rendAct.showPopUp = randomCorrect();
    } else {
        rendAct.showSolution = true;
        rendAct.showPopUp = randomWrong();                
    }; 
};


function setup_solution_numberline() {
    // drawing the base numberline
    numLineObj.L_val = 0;
    numLineObj.R_val = tObj.task_info.highVal;
    numLineObj.hideNum = false;
    numLineObj.maxLineWidth = MAX_LINE_WIDTH;

    // countable portion of the numberline
    countLineObj.show_countLine = true;
    countLineObj.startVal = 0;
    countLineObj.endVal = rendAct.correct_answer;
    countLineObj.type = 'arc';
    //countLineObj.color = "green";

    if (numLineObj.question_type == "numberWords") {
        countLineObj.show_countLine = false;
    };

    // don't show the numberline if there are too many ticks to show on the numberline
    if (Math.abs(tObj.task_info.highVal - tObj.task_info.lowVal) > 20) {
        countLineObj.show_countLine = false;
        showNumberLine = false;
    };
};

function submitted () {
    rendAct.ans_submit = true;
    rendAct.showSolution = true;
    setup_solution_numberline();
    CheckAnswer();
};

function rerun_task() {
    rendAct.task_redo = true;
    rendAct.usrResp = null;
    rendAct.ans_submit = false;
    rendAct.showSolution = false;
    showDetailedAddition = false;
    showDetailedSubtraction = false;
    //show addition solution only if there is an addition operation in place
    if (partial_string_compare(tObj.presntn_data.heading.split(' '), "add")[0]) {
        showDetailedAddition = true; 
    };
    if (partial_string_compare(tObj.presntn_data.heading.split(' '), "subtract")[0]) {
        showDetailedSubtraction = true; 
    };
    dispatch("redoTask");
}

function task_exit() {
    console.log("RESP: exiting task - indication")
};  // code needs to be added   




function init_response() {
    rendAct.ans_submit = false;
    rendAct.task_redo = false;
    rendAct.usrResp = null;
    //show addition solution only if there is an addition operation in place
    if (partial_string_compare(tObj.presntn_data.heading.split(' '), "add")[0]) {
        showDetailedAddition = true; 
    };
    if (partial_string_compare(tObj.presntn_data.heading.split(' '), "subtract")[0]) {
        showDetailedSubtraction = true; 
    };
    console.log("RESP: rendAct: ", rendAct);
};
init_response();

</script>

<div>
    <div>
        {#if (actConfig.inputMethod == "textbox")}
            <p>Enter your answer here: </p>
            <input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{rendAct.usrResp}" maxlength=7>  
        {:else if (actConfig.inputMethod == "toypad")}
            <p>Enter your answer here: </p>
            <ToyPad bind:usr_select={rendAct.usrResp} max_button={actConfig.max_button}/>
        {:else if (actConfig.inputMethod == "numpad")}
            <p>Enter your answer here: </p>
            <NPad bind:usr_select={rendAct.usrResp} max_button={actConfig.max_button}/>
        {:else if (actConfig.inputMethod == "mix")}
            <p>Enter your answer here: </p>
            <input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{rendAct.usrResp}" maxlength=7>
        {:else if (actConfig.inputMethod == "torf")}
        <p>
            <label class="input-user" for="button-true">Is it  </label>
            <button type="button" class="btn toggle-btn" id="button-true" on:click={() => rendAct.usrResp=true}>True</button>
            <label class="input-user" for="button-false" > or </label>
            <button type="button" class="btn toggle-btn" id="button-false" on:click={() => rendAct.usrResp=false}>False?</button>
        </p>
        {/if}
    </div>
</div>

<br>    

<div>
    {#if rendAct.ans_submit}
        <h5 style=" display: {rendAct.showNext};" class="mt-5">{rendAct.showPopUp}</h5>      
    {/if}    
</div>

<div class="mt-3">
    <button type="button" class="btn toggle-btn" on:click={submitted}>Submit</button>
    <button type="button" class="btn toggle-btn" on:click={rerun_task}>Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={task_exit}>Exit This Task</button>          
</div>

<div>
    {#if rendAct.showSolution}
        <h3 style=" display: {rendAct.showSolution};" class="mt-5">Detailed Solution: </h3> 

        {#if showNumberLine}
        <p>Use the Numberline.</p>
        <div>
            <DrawNumbLine {numLineObj} {countLineObj}/>
        </div>     
        {/if}

        {#if showDetailedAddition}
        <div>
            <ShowAddSoln {rendAct} {actConfig} {tObj}/>
        </div>
        {/if}

        {#if showDetailedSubtraction}
        <div>
            <ShowSubtSoln {rendAct} {actConfig} {tObj}/>
        </div>
        {/if}
    {/if}    
</div>