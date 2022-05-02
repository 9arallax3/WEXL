<script>
import {randmNumb} from './taskjs/Utility/commUtil.js';
import { sc_obj, custActConfig, renderedActivity} from "./taskjs/taskObjDefn.js";
import {buildTaskObj} from './taskjs/taskObjBuilderj.js';

// response handling component... after visual output, some user info is captured here
import Resp from './response.svelte';

//export let correct_answer = null;   // answer to be checked against as the teacher-correct answer
export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
const folderLoc ='images/shapes/'; // images, pics, shapes are located in various public folders... 
    
export let tObj = buildTaskObj(scObj, actConfig, rendAct); 

function init_countSequence() {
    console.log('CountSequence: inside init');
    rendAct.cnt_rn = randmNumb(tObj.task_info.lowVal, tObj.task_info.highVal);
    console.log('cnt_rn: ', rendAct.cnt_rn, ' actConfig: ', actConfig);

    rendAct.correct_answer = rendAct.cnt_rn;
    console.log('CountSequence: actObj', actConfig);
    tObj.task_info.answer = rendAct.correct_answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;
    rendAct.task_redo = false;
    console.log('CountSequence: rendered Act ', rendAct);
};
init_countSequence();

</script>

<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <p style="color:gray">{tObj.presntn_data.heading}</p>
        </div>
        
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            {#if (actConfig.question_type == "seq1up") }
                <h2>Counting up from {rendAct.cnt_rn-1}, which number comes next?</h2> 
            {:else if (actConfig.question_type == "seq1down") }
                <h2>Counting down from {rendAct.cnt_rn+1}, which number comes next?</h2>
            {:else}
                <h2>Fill in the missing Number.</h2> 
            {/if}
        </div>
        <br>  
        <div>
            <Resp {rendAct} {actConfig} {tObj} on:redoTask={init_countSequence} />
        </div>
    </div>
</div>
