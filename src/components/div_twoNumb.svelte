<script>
import * as c_ans from './jsfiles/correct_ans_repo.js';
import * as w_ans from './jsfiles/wrong_ans_repo.js';

let ans_submit=false;
let rerun=false;
let usr_exit=false;

const DIVIDENT_LOWNUM = 0;
const DIVIDENT_HIGHNUM = 500;
const DIVISOR_LOWNUM=0;
const DIVISOR_HIGHNUM=20;

let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
let usr_resp = -1;


function setup_randomAnswer () {
    c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + c_ans.CORRECT_ANS_MSG_LOWNUM;
    w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + w_ans.WRONG_ANS_MSG_LOWNUM;
    usr_resp = -1;
    ans_submit = false;
};


function submitted () {
    ans_submit = true;
};

function skill_exit () {

};

let num=[];
let numArray =[];
const num_qnty = 2;

let divident=0;
let divident_array=[];
let dividentArray=[];
let divisor=0;
let divisorArray=[];
let output_array=[];
let quotient_array=[];
let remainder_array=[];
let result_array = [];
let newDivident_array = [];
let correct_answer =0;
let maxNumLength=0;
let dividentLen =0;
let divisorLen =0;
const num_pos =['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

// sort in descending order
function desend_numSort(some_array) {
    some_array.sort(function(a, b){return b - a});
    return some_array;
}

function setup_numObj() {
    correct_answer = 0;
    divisor = Math.floor(Math.random() * DIVISOR_HIGHNUM - DIVISOR_LOWNUM) + DIVISOR_LOWNUM;
    divident = divisor * Math.floor(Math.random() * DIVIDENT_HIGHNUM - DIVIDENT_LOWNUM) + DIVIDENT_LOWNUM;
    //num = desend_numSort(num);

    correct_answer=divident/divisor; // initialize to 1 so that multiplication is not zeroed
    dividentArray = divident.toString().split('');
    divisorArray = divisor.toString().split('');
    dividentLen = dividentArray.length;
    divisorLen = divisorArray.length;
    maxNumLength = Math.max(dividentLen, divisorLen);
/*      // pad useless zeros to the smaller number to match the digits of the larger number
        if (divisorLen < maxNumLength) {
            for (let j=numArray[i].length; j < maxNumLength; j++) {
                numArray[i][j] =0;
            };
        }; */
    newDivident_array = [];
    result_array =[];
    output_array = [];
};

    

function initOutputArrays() {
    divident_array[0]= 0;
    remainder_array[0]=0;
    newDivident_array= [...dividentArray];
    if (divident[0]<divisor) {
        newDivident_array[0] = dividentArray[0];
    };
    quotient_array[0]=0;
    output_array[0] = 0;
};

function updateOutputArrays(i, temp) {
    divident_array[i]= temp;
    remainder_array[i]=temp % divisor;
    if (remainder_array[i]) {
        newDivident_array[i] =remainder_array[i];
    };
    quotient_array[i]=Math.floor(temp / divisor);
    output_array[i] = quotient_array[i] * divisor;
};

function outputArrays (idx) {
    console.log ('idx: '+idx+'; '+ divident_array[idx] + ' / '+ divisor);
    console.log(' divident: ' + divident_array[idx]);
    console.log(' divisor: ' + divisor);
    console.log (divisor + ' * '+ quotient_array[idx]+ '= '+ output_array[idx]);
    console.log(' output: ' + output_array[idx]);
    console.log(' remain: '+remainder_array[idx]);
    console.log(' quo: '+quotient_array[idx]);
    console.log(' new_divident= '+newDivident_array);
    console.log(' result: '+ result_array[idx]);
};

// division with large number 
function longDivStrings() {
    // result(str) can be very large, store it in string
    let result=0;
    console.log('given divident= '+divident+' divisor= '+ divisor);
    // Initially the carry would be zero
    let idx = 0;
    let temp = dividentArray[idx];
    initOutputArrays();
    newDivident_array = [...dividentArray];
    newDivident_array[dividentLen] = 0;
/*     for (let i=0; i < dividentLen; i++) {
        if (divisor > number[i]) {
            temp = (temp*10 + number[i+1]);
        };
    }; */
    while (temp < divisor) {
        console.log('temp= '+temp+ ' divident= '+dividentArray[idx+1]);
        temp = Number(temp*10) + Number(dividentArray[idx+1]);
        console.log('temp= '+temp);
        idx += 1;
        updateOutputArrays(idx, temp);
        outputArrays(idx);
    }
    updateOutputArrays(idx, temp);
    outputArrays(idx);
    idx += 1;
        
    while(dividentLen > idx) {
        result += Math.floor(temp / divisor);
        result_array[idx] = result;
        // Take next digit of divident
        temp = (Number(temp % divisor) * 10)+ Number(dividentArray[idx]);
        updateOutputArrays(idx, temp);
        outputArrays(idx);
        idx += 1;
    }
        
    result += Math.floor(temp / divisor);
    result_array[idx] = result;
    updateOutputArrays(idx, temp);
    outputArrays(idx);
        
    //If divisor is greater than number
    if(result ==0)
        return "0";
    //else return ans
    return result;
};

function init_divNumb() {
    setup_numObj();
    setup_randomAnswer();
    longDivStrings();
};
init_divNumb();

</script>

<!-- Markup Area-->

<div class="stack-large">
    <div>
        <h2 style="color:blue">Question:</h2>
        <h3>Multiply the following {num_qnty} numbers: </h3>
        <div style="display:table;">
            <p style="display:table-cell;"> {divident} </p>
            <p style="display:table-cell;">  / {divisor} </p>
            <p style="display:table-cell;"> = ??</p>
        </div>
    </div>

    <div>
        <h2 style="color:blue">Submission:</h2>
        <p>Enter your answer here: </p>
        <input bind:value={usr_resp}>
        <p style="color:aqua">Correct answer is {correct_answer}.</p>

        {#if ans_submit}
        {#if (parseInt(usr_resp, 10) == correct_answer)}
            <h2 style="color:blue">Response:</h2>
            <p>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</p>
        {:else}
            <h2 style="color:blue">Response:</h2>
            <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>

            <p>Division Problem: </p>
            <table id="t01">
                <tr>
                    <th>
                        Operation
                    </th>
                    <th>
                        Number
                    </th>
                </tr>
                <tr>
                    <th>
                        
                    </th>
                    <th>
                        /
                    </th>
                </tr>
                <tr>
                    <th>
                        {divident}
                    </th>
                    <th>
                        {divisor}
                    </th>
                </tr>
                <tr>
                    <td>=</td>
                    <td>??</td>
                </tr>
            </table>

            <h2 style="color:blue">Hint:</h2>
            <p>Correct answer is {correct_answer}, but answer submitted is {usr_resp}</p>

            <h2 style="color:blue">Answer: </h2>
            <table>
                <tr>
                    <td>Divident Number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {dividentArray[j]} </td>
                    {/each}
                </tr>
                <tr>
                    <td>Divisor Number: </td>
                    <td> {divisor} </td>
                </tr>
                <hr>
                <tr>
                    <td>Quotient: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {quotient_array[j]} </td>
                    {/each}
                </tr>
            </table>
            
            <h2 style="color:blue">Detailed Explanation: </h2>
            <table>
                {#each Array(dividentLen) as _, k}
                <tr>
                    <td>Outcome of {num_pos[k]} step: </td>
                </tr>
                <tr> 
                    <td> Updated Divident in step {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k == j)}
                            <td> {divident_array[j]} </td>
                        {:else}
                            <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr>
                    <td> Divisor {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k == j)}
                            <td> {divisor} </td>
                        {:else}
                            <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr>
                    <td> {divisor} * { quotient_array[k]} = {output_array[k]} </td>
                </tr>
                <tr>
                    <td> Quotient in step {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k >= j)}
                            <td> {quotient_array[j]} </td>
                        {:else}
                            <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr> 
                    <td> Output in step {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k == j)}
                        <td> {output_array[j]} </td>
                        {:else}
                        <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr>
                    <td> Remainder in step {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k == j)}
                            <td> {remainder_array[j]} </td>
                        {:else}
                            <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr>
                    <td> New Divident in step {k+1} = </td>
                    {#each Array(maxNumLength) as _, j}
                        {#if (k == j) && (j< (maxNumLength-1))}
                            <td> {remainder_array[j]}+{dividentArray[j+1]} </td>
                        {:else if (k == j)}
                            <td> {remainder_array[j]}+0 </td>
                        {:else}
                            <td> </td>
                        {/if}
                    {/each}
                </tr>
                <tr>
                    <td> </td>
                </tr>
                <tr>
                    <td> --- --- --- --- --- --- </td>
                </tr>
                <tr>
                    <td> </td>
                </tr>
                {/each}
                <tr>
                    <td> Final Quotient for the full division = </td>
                    {#each Array(maxNumLength) as _, j}
                            <td> {quotient_array[j]} </td>
                    {/each}
                </tr>
            </table>    
    {/if}
    {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_divNumb()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
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
</style>