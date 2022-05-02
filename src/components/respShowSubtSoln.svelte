<script>
import { custActConfig, renderedActivity, AddUnits, NumPos} from "./taskjs/taskObjDefn.js";
import {reverseArr} from './taskjs/Utility/commUtil.js';

export let rendAct = renderedActivity;
export let actConfig = custActConfig;
export let tObj = taskObject;

let numArray = [];
let output_array = [];
let mod_1numArray =[];
let result_array = [];
let borrow_array = [];
let maxNumLength =0;

// sort in descending order
function desend_numSort(some_array) {
    some_array.sort(function(a, b){return b - a});
    return some_array;
}

function setup_numObj() {
    maxNumLength =0;
    rendAct.correct_answer = tObj.task_info.answer; 

    //reverse the numArrays so that they can be used for backward addition
    for (let i=0; i < tObj.task_info.operandCount; i++) {
        numArray[i] = reverseArr(tObj.task_info.operandNumArray[i]);
    };
    console.log('reversed numArray: ', numArray);

    for (let i=0; i< tObj.task_info.operandCount; i++) {        
        // identify the longest number and use that for doing 10s, 100s 
        // in the subtraction
        if (maxNumLength < tObj.task_info.operandNumArray[i].length) {
            maxNumLength = tObj.task_info.operandNumArray[i].length;
        };
    };

    // pad useless zeros to the smaller number to match the digits of the larger number
    for (let i=0; i< tObj.task_info.operandCount; i++) {
        if (numArray[i].length < maxNumLength) {
            for (let j=numArray[i].length; j < maxNumLength; j++) {
                numArray[i][j] =0;
            };
        };
    };

    // intialize borrow overs and the final output answer
    mod_1numArray = [];
    result_array =[];
    result_array[0] =0;
    borrow_array =[];
    borrow_array[0] =0;
    output_array = [];
    output_array[0] =0;

    console.log('after zero padding numArray:');
    console.log('numArray: ', numArray);
    console.log(" tObj numbers", tObj.task_info.operandNum," reverse Array: ", tObj.task_info.operandNumArray, ' correct answer: ',tObj.task_info.answer);

};

function prepareNum_for_display() {
    let temp;
    for (let i=0; i < tObj.task_info.operandCount; i++) {
        temp = numArray[i].reverse();
        numArray[i] = [...temp];
    };
    temp = result_array.reverse();
    result_array = [...temp];

    temp = borrow_array.reverse();
    borrow_array = [...temp];

    temp = output_array.reverse();
    output_array = [...temp];

    // assume that first number is the larger (due to sorting)
    // borrowing makes the first number different. This modification 
    // is captured here.
    for (let j=0; j< maxNumLength; j++) {
        mod_1numArray[j] = +(numArray[1][j]) + +(output_array[j]);
    };
};
     
// subtracting large number strings
function sub_twoNumb() {  
    // take a copy of the first number, which is assumed to be big (due to sorting)
    let str ='';
    let borrow =0;
    borrow_array[0]=0;
    console.log('In Diff function: str1 = '+ numArray[0] + ' str2 = ' + numArray[1]);
    // for each operand in the subtraction set, indexed by i
    for (let i=0; i < (tObj.task_info.operandCount-1); i++) {
        // for each digit within a ith operand, indexed by j
        for (let j = 0; j < numArray[i+1].length; j++) {
            let diff = numArray[i][j] - numArray[i+1][j] - borrow_array[j];
            console.log('i:'+ i+ '; '+ numArray[i][j] + ' - ' + numArray[i+1][j] + ' - ' + borrow+ ' =' + diff);
            if (diff < 0) {
                borrow = 1;
                diff +=10;
            } else {
                borrow = 0;
            };
            // If subtraction is less then zero then we add 10 into sub and
            // take carry as 1 for calculating next step
            result_array[j] = diff;
            borrow_array[j+1] = borrow;
            output_array[j] = diff;
            str += String.fromCharCode(diff + '0'.charCodeAt(0));
            console.log('borrow= '+borrow_array[j] + ' result= '+ result_array[j] + ' outA= '+ output_array[j]);
            console.log('str= '+ str);
        };
        // subtract remaining digits of larger number
        for (let j = numArray[i+1].length; j < numArray[i].length; j++) {
            let diff = numArray[i][j] - borrow[j];

            // if the diff is -ve, then borrow from earlier digit
            if (sub < 0) {
                diff += 10;
                borrow = 1;
            }
            else
                borrow = 0;
            result_array[j] = diff;
            borrow_array[j+1] = borrow;
            output_array[j] = diff;
            str += String.fromCharCode(diff +'0'.charCodeAt(0));
            console.log('borrow= '+borrow_array[j+1] + ' result= '+ result_array[j] + ' outA= '+ output_array[j]);
        };
        console.log('string= '+ str);
    };
};


function init_subNumb() {
    setup_numObj();
    sub_twoNumb();
    prepareNum_for_display();
};
init_subNumb();

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
                    <p> - </p>
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

<div>
    <h2 style="color:blue">Answer: </h2>
    <table id="t02">
        <tr>
            <td>Borrow Over: </td>
            {#each Array(maxNumLength) as _, j}
                <!--Carry is always one digit off the one we are working on-->
                <td>{borrow_array[j+1]}</td>  
            {/each}
        </tr>
        <tr>
        <td>- {NumPos[0]} number: </td>
            {#each Array(maxNumLength) as _, j}
                <td> {numArray[0][j]} </td>
            {/each}
        </tr>
        <tr>
            <td>Modified {NumPos[0]} number: </td>
            {#each Array(maxNumLength) as _, j}
                <td> {mod_1numArray[j]} </td>
            {/each}
        </tr>
        <tr>
            <td>- {NumPos[1]} number: </td>
            {#each Array(maxNumLength) as _, j}
                <td> {numArray[1][j]} </td>
            {/each}
        </tr>
        <tr>
            <td>Subtraction of {tObj.task_info.operandCount} numbers = </td>
            {#each Array(maxNumLength) as _, j}
                <td> {output_array[j]} </td>
            {/each}
        </tr>
    </table>    
</div>

<div>
    <h2 style="color:blue">Detailed Explanation: </h2>
    {#each Array(maxNumLength) as _, k}
    <h4> Step {k+1}: work with {AddUnits[k]}.</h4> 
    <table id="t02"> 
        <tr>
            <td>{NumPos[0]} number: </td>
            {#each Array(maxNumLength) as _, j}
                <td> {numArray[0][j]} </td>
            {/each}
        </tr>
        <tr>
            <td>{NumPos[1]} number: </td>
            {#each Array(maxNumLength) as _, j}
                <td> {numArray[1][j]} </td>
            {/each}
        </tr>
        <tr>
            <td>Borrow = </td>
            {#each Array(maxNumLength) as _, j}
                {#if (j== (maxNumLength -1 - k))}
                    <td> {borrow_array[j]} </td>
                {:else}
                    <td> </td>
                {/if}
            {/each}
        </tr>
        <tr>
            <td>Previous Borrow = </td>
            {#each Array(maxNumLength) as _, j}
                {#if (j== (maxNumLength -1 - k))}
                    <!--previous is always one digit off the one we are working on-->
                    <td>{borrow_array[j+1]}</td>  
                {:else}
                    <td> </td>
                {/if}
            {/each}
        </tr>
        <tr>
            <td>Modified {NumPos[0]} number: </td>
            {#each Array(maxNumLength) as _, j}
                {#if (j== (maxNumLength -1 - k))}
                    <td> {mod_1numArray[j]} </td>
                {:else}
                    <td> </td>
                {/if}
            {/each}
        </tr>
        <tr>
            <td>Subtracting in {AddUnits[k]} place = </td>
            {#each Array(maxNumLength) as _, j}
                {#if (j== (maxNumLength -1 - k))}
                    <td> {result_array[j]} </td>
                {:else}
                    <td> </td>
                {/if}
            {/each}
        </tr>
        <tr>
            <td>Diff so far = </td>
            {#each Array(maxNumLength) as _, j}
                {#if (j>= (maxNumLength -1 - k))}
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