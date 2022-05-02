<script>
import { custActConfig, renderedActivity, AddUnits, NumPos} from "./taskjs/taskObjDefn.js";
import {reverseArr} from './taskjs/Utility/commUtil.js';

export let rendAct = renderedActivity;
export let actConfig = custActConfig;
export let tObj = taskObject;

let numArray = [];
let output_array = [];
let result_array = [];
let carry_array = [];
let maxNumLength =0;
let ansNumLength =0;


function setup_numObj() {
    maxNumLength =0;
    rendAct.correct_answer = tObj.task_info.answer; 

    console.log("before reverse tObj num", tObj.task_info.operandNum, " reverse Num Array: ", tObj.task_info.operandNumArray, ' answer: ', tObj.task_info.answer);

    //reverse the numArrays so that they can be used for backward addition
    for (let i=0; i < tObj.task_info.operandCount; i++) {
        numArray[i] = reverseArr(tObj.task_info.operandNumArray[i]);
    };
    console.log('reversed numArray: ', numArray);
    for (let i=0; i< tObj.task_info.operandCount; i++) {        
        // identify the longest number and use that for doing 10s, 100s 
        // in the addition
        if (maxNumLength < tObj.task_info.operandNumArray[i].length) {
            maxNumLength = tObj.task_info.operandNumArray[i].length;
        };
    };
    // sometimes the answer is longer than the numArray of digits 
    // in each of the operands
    ansNumLength = tObj.task_info.answer.toString().split('').length;
    console.log("ans length: ", ansNumLength, 'ans: ', tObj.task_info.answer.toString().split(''));
    //pad the extra digits for the numArray with useless 0s
    for (let i=0; i < tObj.task_info.operandCount; i++) {
        for (let j=0; j < ansNumLength; j++) {
            if (j >= numArray[i].length) {
                numArray[i][j] ='';
            }
        };
    };
    // intialize carryovers and the final output answer
    result_array =[];
    carry_array =[];
    output_array = [];
    console.log('after zero padding numArray:');
    console.log('numArray: ', numArray);
    console.log(" tObj numbers", tObj.task_info.operandNum," reverse Array: ", tObj.task_info.operandNumArray, ' correct answer: ',tObj.task_info.answer);
};


function prepareNum_for_display() {
    let temp = [];
    for (let i=0; i < tObj.task_info.operandCount; i++) {
        temp = numArray[i].reverse();
        numArray[i] = [...temp];
    };
    temp = result_array.reverse();
    result_array = [...temp];

    temp = carry_array.reverse();
    carry_array = [...temp];

    temp = output_array.reverse();
    output_array = [...temp];
};

function addStrings() {
    let result =0;
    carry_array[0] =0; // there is no carryover for "ones" place
    // index on j to get to each digit of any given numArray
    for (let j=0; j< ansNumLength; j++) {
        result = 0;
        output_array[j] =0;
        result_array[j] =0;
        carry_array [0] =0;
        result += Number(carry_array[j]);
        // index on i to get to each operand numArray
        for (let i=0; i< tObj.task_info.operandCount; i++) {
            result += Number(numArray[i][j]);
            result_array [j] = result;
            // removing the last digit in result for identifing  
            // next digit carryover
            carry_array[j+1] = Math.floor(result / 10);
            // using the mod operator to identify 'ones' digit to keep
            output_array[j] = (result%10);
        }
    };
};


function init_SolnAddNumb() {
    setup_numObj();
    addStrings();
    prepareNum_for_display();

};
init_SolnAddNumb();

</script>


<!-- Markup Area-->

<div class="stack-large">  
    <p>Addition Problem: </p>
    <table id="t01">
        <tr>
            <th>
                Operation
            </th>
            <th>
                Number
            </th>
        </tr>
    {#each Array(tObj.task_info.operandCount) as _, i}
        <tr>
            <td>
                {#if (i==0)}
                    <p>  </p> 
                {:else}
                    <p> + </p>
                {/if}
            </td>
            <td>
                <p> {tObj.task_info.operandNum[i]} </p>
            </td>
        </tr>
    {/each}
    <tr>
        <td>=</td>
        <td>??</td>
    </tr>
    </table>
</div>

<div >

    <h2 style="color:blue">Hint:</h2>
    <p>Correct answer is {tObj.task_info.answer}, but answer submitted is {rendAct.usr_resp}</p>
</div>

<div >
    <h2 style="color:blue">Answer: </h2>
    <table id="t02">
        <tr>
            <td>Carry Over: </td>
            {#each Array(ansNumLength) as _, j}
                <!--Carry is always one digit off the one we are working on-->
                <td>{carry_array[j+1]}</td>  
            {/each}
        </tr>
        {#each Array(tObj.task_info.operandCount) as _, i}
            <tr>
                <td>+ {NumPos[i]} number: </td>
                {#each Array(ansNumLength) as _, j}
                    <td> {numArray[i][j]} </td>
                {/each}
            </tr>
        {/each}
        <tr>
            <td>Total for {tObj.task_info.operandCount} numbers = </td>
                {#each Array(ansNumLength) as _, j}
                    <td> {output_array[j]} </td>
                {/each}
        </tr>
    </table>    
</div>

<div >
    <h2 style="color:blue">Detailed Explanation: </h2>

        {#each Array(ansNumLength) as _, k}
            <h4> Step {k+1}: work with {AddUnits[k]}.</h4> 
            <table id="t02">
            <tr>
                <!-- show only the carryover for the current digit j-->
                <td>Previous Carry: </td>
                {#each Array(ansNumLength) as _, j}
                    {#if (j== (ansNumLength -1 - k))}
                        <!--Carry is always one digit off the one we are working on-->
                        <td>{carry_array[j+1]}</td>  
                    {:else}
                        <td> </td>
                    {/if}
                {/each}
            </tr>
            <!-- show all operand numbers; show all j digits-->
            {#each Array(tObj.task_info.operandCount) as _, n}
            <tr>
                <td> + {NumPos[n]} Number: </td>
                {#each Array(ansNumLength) as _, j}
                    <td>{numArray[n][j]}</td>
                {/each}
            </tr>
            {/each}
            <tr>
                <td>Adding of {AddUnits[k]} = </td>
                {#each Array(ansNumLength) as _, j}
                    {#if (j== (ansNumLength -1 - k))}
                        <td> {result_array[j]} </td>
                    {:else}
                        <td> </td>
                    {/if}
                {/each}
            </tr>
            <tr>
                <td>New Carry Over = </td>
                {#each Array(ansNumLength) as _, j}
                    {#if (j== (ansNumLength -1 - k))}
                        <td> {carry_array[j]} </td>
                    {:else}
                        <td> </td>
                    {/if}
                {/each}
            </tr>
            <tr>
                <td>Total so far = </td>
                {#each Array(ansNumLength) as _, j}
                    {#if (j>= (ansNumLength -1 - k))}
                        <td> {output_array[j]} </td>
                    {:else}
                        <td> </td>
                    {/if}
                {/each}
            </tr>
        </table>   
        {/each}

</div>



<style>
    #t01 {
    background-color: #f1f1c1;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    }
    #t01 tr:nth-child(even) {
    background-color: #eee;
    }
    #t01 tr:nth-child(odd) {
    background-color: #fff;
    }
    #t01 th {
    color: white;
    background-color: chocolate;
    padding: 5px;
    }


    #t02 {
    background-color: #f1f1c1;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    }
    #t02 td {
    background-color: #eee;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    width: 50px;
    }

    #t02 td:first-child {
        color: black;
        background-color: rgb(219, 230, 193);
        padding: 5px;
        text-align: left;
        width: 250px;
    }
    #t02 th {
    color: black;
    background-color: chocolate;
    padding: 5px;
    }
</style>