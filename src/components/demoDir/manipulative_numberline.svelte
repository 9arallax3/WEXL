<script>
import { sc_obj, custActConfig, renderedActivity, 
    number_line_object, count_Line_Obj, MAX_LINE_WIDTH} from "../taskjs/taskObjDefn.js";
import {buildTaskObj} from '../taskjs/taskObjBuilderj.js';
import {partial_string_compare} from "../taskjs/Utility/commUtil.js";

// response handling component... after visual output, some user info is captured here
import Resp from '../response.svelte';
import { randmNumb } from "../taskjs/Utility/commUtil.js";
import DrawNumbLine from '../draw_numbLine.svelte';

export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
    
export let tObj = {}; 

// values used for displaying the number line
let numLineObj = number_line_object;
//values used in the counting on top of the std numberline
let countLineObj = count_Line_Obj;

let numLine_Lval =0;
let numLine_Rval =20;

// this function randomly generates 2 operands only for 2 number addition
// The operands are calculated to avoid regrouping or carryover
// the size of each number is defined by maxDigit input parameter
// operands are uploaded into tObj data structure


function MN_setup_numberline() {
    // drawing the base numberline
    numLineObj.L_val = tObj.task_info.lowVal;
    numLineObj.R_val = tObj.task_info.highVal;
    numLineObj.hideNum = false;
    numLineObj.maxLineWidth = MAX_LINE_WIDTH;

    // countable portion of the numberline
    countLineObj.show_countLine = true;
    countLineObj.startVal = tObj.task_info.operandNum[0];
    countLineObj.endVal = tObj.task_info.operandNum[0] + tObj.task_info.operandNum[1];
    countLineObj.type = 'arc';
    //countLineObj.color = "green";

};

function hasOnlyDigits(value) {
    return /^\d+$/.test(value);
};

let MNeqStr='';
function handleSubmit () {
    let inputArray = [];
    let op='+';

    // look for only + or - operations only; default to '+'
    if (MNeqStr.includes("+")) {
        inputArray = MNeqStr.split("+");
        op = "+";
    };
    if (MNeqStr.includes("-")) {
        inputArray = MNeqStr.split("-");
        op = "-";
    };

    // ensure input does not have more than 2 operands; default use first 2.
    if ((inputArray.length == 0) || (inputArray.length > 2)) {
        inputArray[0]=2;
        inputArray[1]=1;
        console.log('ERROR: Input equation for Math Manipulative is improper.');
    };

    // ensure input only has digits for operands
    let num1 = 2;
    if (hasOnlyDigits(inputArray[0])) {
        num1 = Number(inputArray[0]);
    };
    let num2 = 1;
    if (hasOnlyDigits(inputArray[1])) {
        num2 = Number(inputArray[1]);
    };

    // ensure numbers are within range
    if ((num1 < tObj.task_info.lowVal) || (num1 > tObj.task_info.highVal)) {
        num1 = tObj.task_info.lowVal;
        console.log("ERROR: num1 of input is out of range");
    };
    if ((num2 < tObj.task_info.lowVal) || (num2 > tObj.task_info.highVal)) {
        num2 = tObj.task_info.highVal;
        console.log("ERROR: num2 of input is out of range");
    };


    console.log('input array: ', inputArray);
    if (op == '+') {
        console.log('inside the plus');
        countLineObj.startVal = num1;
        countLineObj.endVal = num1 + num2;
        rendAct.answer = countLineObj.endVal;
        countLineObj.type = 'arc';
    } else if (op == '-') {
        console.log('inside the minus');
        let temp = Math.abs(num1 - num2);
        countLineObj.startVal = temp;
        countLineObj.endVal = num1;
        countLineObj.direction = "R";
        countLineObj.color = "green";
        rendAct.answer = num1-num2;
        countLineObj.type = 'line';
    } else {
        console.log ('ERROR: Input problem in Numberline Math Manipulative.')
    };
    if ((rendAct.answer < tObj.task_info.lowVal) || (rendAct.answer > tObj.task_info.highVal)) {
        rendAct.answer = tObj.task_info.lowVal;
        console.log("ERROR: answer for the given input is out of range");
    };
    console.log('entered String: ', MNeqStr, countLineObj);
};

function init_numLineManip() {
    // initializing the tObj, operands, L/R vals of numberline
    // actual values will be defined by the user
    tObj = buildTaskObj(scObj, actConfig, rendAct);
    numLineObj.L_val = tObj.task_info.lowVal;
    numLineObj.R_val = tObj.task_info.highVal;
    rendAct.answer = tObj.task_info.operandNum[0] + tObj.task_info.operandNum[1];
    MNeqStr = tObj.task_info.operandNum[0] + "+" + tObj.task_info.operandNum[1];

    MN_setup_numberline();

    rendAct.correct_answer = tObj.task_info.answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;
    rendAct.task_redo = false;
};
init_numLineManip();

</script>


<!-- Markup Area-->

<div class="stack-large">
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" bind:value={MNeqStr}>
        <button type="submit">
            Submit
        </button>
    </form>
    <p>= {rendAct.answer}</p>
    <div>
        <DrawNumbLine bind:numLineObj={numLineObj} bind:countLineObj={countLineObj}/>
    </div>  
</div>
    
    