<script>
import { sc_obj, custActConfig, renderedActivity} from "../taskjs/taskObjDefn.js";
import {buildTaskObj} from '../taskjs/taskObjBuilderj.js';

// response handling component... after visual output, some user info is captured here
import Resp from '../response.svelte';

export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
export let fixed_params = [];

export let tObj = {}; 

function create_operands() {
    //forced numbers for testing
    tObj.task_info.answer = 0;
    //first element in the array is the number of parameters
    // the remainder elements are the parameters
    for (let i = 0; i < fixed_params[0]; i++) {
        tObj.task_info.operandNum[i] = fixed_params[i+1];
        tObj.task_info.operandNumArray[i] = tObj.task_info.operandNum[i].toString().split('');
        tObj.task_info.answer += tObj.task_info.operandNum[i];   
    };
};

function init_addNumb() {
    tObj = buildTaskObj(scObj, actConfig, rendAct);
    create_operands();

    rendAct.correct_answer = tObj.task_info.answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;
    rendAct.task_redo = false;
};
init_addNumb();

</script>


<!-- Markup Area-->

<div class="stack-large">
    <div>
        <h2 style="color:blue">Question:</h2>
        <h3>{tObj.presntn_data.heading}</h3>
        <div style="display:table;">
            {#each Array(tObj.task_info.operandCount) as _, i}
                {#if (i == 0)}
                    <p style="display:table-cell;">
                        {tObj.task_info.operandNum[i]}
                    </p>
                {:else}
                    <p style="display:table-cell;">
                        + {tObj.task_info.operandNum[i]}
                    </p>
                {/if}
            {/each}
            <p style="display:table-cell;"> = ??</p>
        </div>
    </div>
    
    <div>  
        <br>    
        <Resp {rendAct} {actConfig} {tObj} on:redoTask={init_addNumb} />
    </div>

</div>
        
        
    