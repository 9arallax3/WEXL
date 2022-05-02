<script>
import { sc_obj, custActConfig, renderedActivity} from "../taskjs/taskObjDefn.js";
import {buildTaskObj} from '../taskjs/taskObjBuilderj.js';

// response handling component... after visual output, some user info is captured here
import Resp from '../response.svelte';
import { randmNumb } from "../taskjs/Utility/commUtil.js";

export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
    
export let tObj = {}; 


// this function randomly generates 2 operands only for 2 number addition
// The operands are calculated to avoid regrouping or carryover
// the size of each number is defined by maxDigit input parameter
// operands are uploaded into tObj data structure
function calc_rand_2operands (maxDigits) {
    let temp0NumStr ='';
    let temp1NumStr ='';
    for (let i=0; i<maxDigits; i++) {
        let temp0 = randmNumb(5, 9);
        let temp1 = randmNumb(0, (9 - temp0));  //find a digit which does not have a carryover
        temp0NumStr += temp0.toString();
        temp1NumStr += temp1.toString();
 //       console.log('dig1:', temp0, 'tmp0str: ', temp0NumStr, 'dig2:', temp1, ' tmp1str: ', temp1NumStr);
    }
    tObj.task_info.operandNum[0] = Number(temp0NumStr);
    tObj.task_info.operandNum[1] = Number(temp1NumStr);

    tObj.task_info.answer =0;
    for (let i = 0; i < tObj.task_info.operandCount; i++) {
        tObj.task_info.operandNumArray[i] = tObj.task_info.operandNum[i].toString().split('');
        tObj.task_info.answer += tObj.task_info.operandNum[i];   
    };
};

function create_operands() {
    //forced numbers for testing
/**    tObj.task_info.answer = 0;
    tObj.task_info.operandNum[0] = 124;
    tObj.task_info.operandNum[1] = 345;
    for (let i = 0; i < tObj.task_info.operandCount; i++) {
        tObj.task_info.operandNumArray[i] = tObj.task_info.operandNum[i].toString().split('');
        tObj.task_info.answer += tObj.task_info.operandNum[i];   
    };
**/
    if (tObj.task_info.operation == "3dig_NoRegroup") {
        calc_rand_2operands(3);
    } else if(tObj.task_info.operation == "4dig_NoRegroup") {
        calc_rand_2operands(4);
    };
    console.log('in REGROUP calc: num: ', tObj.task_info.operandNum, 'answer: ', tObj.task_info.answer, 'numArray: ', tObj.task_info.operandNumArray);
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

    <div>  
        <br>    
        <Resp {rendAct} {actConfig} {tObj} on:redoTask={init_addNumb} />
    </div>
</div>

