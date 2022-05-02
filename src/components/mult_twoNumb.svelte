<script>
import * as c_ans from './jsfiles/correct_ans_repo.js';
import * as w_ans from './jsfiles/wrong_ans_repo.js';

let ans_submit=false;
let rerun=false;
let usr_exit=false;

const COUNT_LOWNUM = 0;
const COUNT_HIGHNUM = 10000;

let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
let usr_resp = -1;

function setup_randomAnswer () {
    c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + c_ans.CORRECT_ANS_MSG_LOWNUM;
    w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + w_ans.WRONG_ANS_MSG_LOWNUM;
    usr_resp = -1;
    ans_submit = false;
};

let num=[];
let numArray =[];
const num_qnty = 2;

let multiplier_array=[];
let output_array=[];
let result_array = [];
let carry_array = [];
let correct_answer =0;
let maxNumLength=0;
let size_of_multiplier =0;
const add_units =['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands', 'Millions'];
const num_pos =['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

// sort in descending order
function desend_numSort(some_array) {
    some_array.sort(function(a, b){return b - a});
    return some_array;
}

function setup_numObj() {
    correct_answer = 0;
    for (let i=0; i< num_qnty; i++) {
        num[i] = Math.floor(Math.random() * COUNT_HIGHNUM - COUNT_LOWNUM) + COUNT_LOWNUM;
    };
    num = desend_numSort(num);

    correct_answer=1; // initialize to 1 so that multiplication is not zeroed
    for (let i=0; i< num_qnty; i++) {
        numArray[i] = num[i].toString().split('').reverse();
        correct_answer *= num[i];
    };
    maxNumLength = numArray[0].length;
    size_of_multiplier = numArray[1].length;
    // pad useless zeros to the smaller number to match the digits of the larger number
    for (let i=0; i< num_qnty; i++) {
        if (numArray[i].length < maxNumLength) {
            for (let j=numArray[i].length; j < maxNumLength; j++) {
                numArray[i][j] =0;
            };
        };
    };
    carry_array = [];
    result_array =[];
    output_array = [];
};

// couldn't use JS' built-in reverse function because the
// array is multidimensional
function reverse2dArrays (some_array) {
    for (let i=0; i< (size_of_multiplier+1); i++) {
        let len = some_array[i].length;
        let temp =[];
        for (let j=0; j < len; j++) {
            temp[len-j-1] = some_array[i][j]
        };
        some_array[i] = [...temp];
    };
    return some_array;
};

// reverses all the relavent multi dimensional arrays  
// to ensure display is in the corrder sequence for each array
function prepareNum_for_display() {
    multiplier_array[size_of_multiplier] = 'all';
    // pad useless zeros to the smaller number to match the digits of the larger number
    for (let i=0; i< num_qnty; i++) {
        if (numArray[i].length < maxNumLength) {
            for (let j=numArray[i].length; j < maxNumLength; j++) {
                numArray[i][j] =0;
            };
        };
    };
    // pad with useless zeros
    for (let i=0; i<(size_of_multiplier+1); i++) {
        if (carry_array[i].length < maxNumLength) {
            for (let j=carry_array[i].length; j < maxNumLength; j++) {
                carry_array[i][j] =0;
            };
            carry_array[i][maxNumLength]=0;
        };
        if (result_array[i].length < maxNumLength) {
            for (let j=result_array[i].length; j < maxNumLength; j++) {
                result_array[i][j] =0;
            };
        };
        if (output_array[i].length < maxNumLength) {
            for (let j=output_array[i].length; j < maxNumLength; j++) {
                output_array[i][j] =0;
            };
        };
    };
    // reverse the arrays
    let temp;
    for (let i=0; i< num_qnty; i++) {
        temp = numArray[i].reverse(); 
        numArray[i] = [...temp];
    };
    // need to reverse multi-dimensional array
    carry_array  = reverse2dArrays(carry_array);
    result_array = reverse2dArrays(result_array);
    output_array = reverse2dArrays(output_array);
};

function singleDigitMult(str, num, index) {
    multiplier_array[index] = num;
    let len = str.length;
    let rsltArray =[];
    let outArray =[];
    let carryArray =[];
    carryArray[0] =0;
    for (let j=0; j < len; j++) {
        let result = str[j]*num + carryArray[j];
        rsltArray[j] = result;
        if (result >= 10) {
            carryArray[j+1] = Math.floor(result / 10);
            outArray[j] = (result%10);
        } else {
            carryArray[j+1] =0;
            outArray[j] = result;
        };
    };
    if (carryArray[len]) {
        // most likely we need to add result to this 
        // edge case where the first number is x digits
        outArray[len] = carryArray[len];
        if (maxNumLength < outArray[len].length) {
            maxNumLength = outArray[len].length
        };
    } else {
        carryArray[len] =0;
    };

    carry_array[index]  = carryArray;
    result_array[index] = rsltArray;
    output_array[index] = outArray;
};

// used to shift a given number left by x number positions
// used in multi-digit multiplications
function leftShiftArray (someArray, pos) {
    let temp = [...someArray.reverse()];
    let len= temp.length;
    for (let k=len; k < (len+pos); k++) {
        temp[k] = 0;
    };
    someArray = [...temp.reverse()];

    if (maxNumLength < someArray.length) {
        maxNumLength = someArray.length
    };
    return someArray;
};

function addIndivOutputs() {

    // need to pad the first multiplier output with zeros
    // as this output may be having less digits than final
    // answer
    for (let i=0; i < size_of_multiplier; i++) {
        if (output_array[i].length < maxNumLength) {
            for (let j=output_array[i].length; j < maxNumLength; j++) {
                output_array[i][j] =0;
            };
        };
    };

    let result =0;
    let outArray =[];
    let rsltArray =[];
    let carryArray =[];
    carryArray[0] =0;   // there is no carryover for "ones" place
    // for all digits of first number
    for (let j=0; j< maxNumLength; j++) {
        result = Number(carryArray[j]);
        // for all digits of second number, the multiplier
        for (let i=0; i< size_of_multiplier; i++) {
            // some numbers have fewer digits; ignore the undefined
            // padding with zeros should eliminate this
            if (output_array[i][j] || (output_array[i][j]==0)) {
                result += Number(output_array[i][j]);
            }; 
            rsltArray[j] = result;
            // removing the last digit in result for identifing  
            // next digit carryover
            carryArray[j+1] = Math.floor(result / 10);
            // using the mod operator to identify 'ones' digit to keep
            outArray[j] = (result%10);
        };
    };
    //ensure we capture the carryovers beyond the size of the 
    //existing digits being added
    if (carryArray[maxNumLength]) {
        outArray[maxNumLength] += carryArray[maxNumLength];
        if (maxNumLength < outArray[maxNumLength].length) {
            maxNumLength = outArray[maxNumLength].length
        };    
    } else {
        carryArray[maxNumLength] =0;
    };

    carry_array[size_of_multiplier]  = carryArray;
    result_array[size_of_multiplier] = rsltArray;
    output_array[size_of_multiplier] = outArray;
};

function multidigit_mult () {
    for (let i=0; i< (num_qnty-1); i++) {
        for (let j=0; j < size_of_multiplier; j++) {
            // create a carry_array, result_array, output_array, for each digit 
            // of the 2nd multiplier number
            singleDigitMult(numArray[i], numArray[i+1][j], j);
            let temp = [...output_array[j]]
            output_array[j] = leftShiftArray(temp, j);
        };

        if (maxNumLength < output_array[size_of_multiplier -1].length) {
            maxNumLength = output_array[size_of_multiplier -1].length
        };
    };
    addIndivOutputs();      
};

function init_multNumb() {
    setup_numObj();
    setup_randomAnswer();
    multidigit_mult();
    prepareNum_for_display();
};
init_multNumb();

function submitted () {
    ans_submit = true;
};

function skill_exit () {
};

</script>


<!-- Markup Area-->

<div class="stack-large">
    <div>
        <h2 style="color:blue">Question:</h2>
        <h3>Multiply the following {num_qnty} numbers: </h3>
        <div style="display:table;">
            <p style="display:table-cell;"> {num[0]} </p>
            <p style="display:table-cell;">  * {num[1]} </p>
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
            {#each Array(num_qnty) as _, i}
                <tr>
                    <td>
                        {#if (i==0)}
                            <p>  </p> 
                        {:else}
                            <p> * </p>
                        {/if}
                    </td>
                    <td>
                        {#if (i==0)}
                            <p> {num[i]} </p> 
                        {:else}
                            <p> {num[i]} </p>
                        {/if}
                    </td>
                </tr>
            {/each}
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
                    <td>* {num_pos[0]} number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {numArray[0][j]} </td>
                    {/each}
                </tr>
                <tr>
                    <td>* {num_pos[1]} number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {numArray[1][j]} </td>
                    {/each}
                </tr>
                {#each Array(size_of_multiplier+1) as _, k}
                <tr>
                <td>Output for multiplication by {multiplier_array[k]} = </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {output_array[k][j]} </td>
                    {/each}
                </tr>
                {/each}
                </table>    

                <h2 style="color:blue">Detailed Explanation: </h2>
                <table>
                        {#each Array(size_of_multiplier) as _, k}
                        <tr> 
                            <td> Step {k+1}: </td> 
                        </tr>
                        <tr> 
                            <td>Multiply by {multiplier_array[k]}, {num_pos[k]} digit of the multiplier.</td> 
                        </tr>
                        {#each Array(maxNumLength+1) as _, n}
                        <tr> 
                            <td> Sub-step {k+1}-{n}:</td> 
                        </tr>
                        <tr> 
                            <td> Work with {num_pos[maxNumLength-n]} digit of the first number.</td> 
                        </tr>
                        <tr>
                            <!-- show only the carryover for the current digit j-->
                            <td>Previous Carry: </td>
                            {#each Array(maxNumLength) as _, j}
                            {#if (j== (maxNumLength -1 - n))}
                                <!--Carry is always one digit off the one we are working on-->
                                <td>{carry_array[k][j+1]}</td>  
                            {:else}
                                <td> </td>
                            {/if}
                            {/each}
                        </tr>
                        <!-- show all operand numbers; show all j digits-->
                        <tr>
                            <td> * {num_pos[0]} Number: </td>
                            {#each Array(maxNumLength) as _, j}
                                <td>{numArray[0][j]}</td>
                            {/each}
                        </tr>
                        <tr>
                            <td> * {num_pos[1]} Number: </td>
                            {#each Array(maxNumLength) as _, j}
                                <td>{numArray[1][j]}</td>
                            {/each}
                        </tr>
                        <tr>
                            <td>Each digit multiplied output of {add_units[k]} = </td>
                            {#each Array(maxNumLength) as _, j}
                                {#if (j== (maxNumLength -1 - n))}
                                    <td> {result_array[k][j]} </td>
                                {:else}
                                    <td> </td>
                                {/if}
                            {/each}
                        </tr>
                        <tr>
                            <td>New Carry Over = </td>
                            {#each Array(maxNumLength) as _, j}
                                {#if (j== (maxNumLength -1 - n))}
                                    <td> {carry_array[k][j]} </td>
                                {:else}
                                    <td> </td>
                                {/if}
                            {/each}
                        </tr>
                        <tr>
                            <td>Overall multiplied output for the {num_pos[k]} digit so far = </td>
                            {#each Array(maxNumLength) as _, j}
                                {#if (j>= (maxNumLength -1 - n))}
                                    <td> {output_array[k][j]} </td>
                                {:else}
                                    <td> </td>
                                {/if}
                            {/each}
                        </tr>
                        <tr> 
                            <td>  </td>
                        </tr>
                        <tr> 
                            <td> -- -- -- -- -- -- </td>
                        </tr>
                        <tr> 
                            <td>  </td>
                        </tr>
                    {/each}
                    {/each}
                    <tr> 
                        <td> Step {size_of_multiplier+1}, final addition step: </td> 
                    </tr>
                    <tr> 
                        <td>Add all {size_of_multiplier} outputs of the prior single digit multiplications.</td> 
                    </tr>
                    {#each Array(maxNumLength) as _, n}
                    <tr> 
                        <td> Sub-step {size_of_multiplier+1}-{n}: Work with {add_units[n]}.</td> 
                    </tr>
                    <tr>
                        <!-- show only the carryover for the current digit j-->
                        <td>Previous Carry: </td>
                        {#each Array(maxNumLength) as _, j}
                        {#if (j== (maxNumLength -1 - n))}
                            <!--Carry is always one digit off the one we are working on-->
                            <td>{carry_array[size_of_multiplier][j+1]}</td>  
                        {:else}
                            <td> </td>
                        {/if}
                        {/each}
                    </tr>
                    <!-- show all operand numbers; show all j digits-->
                    {#each Array(size_of_multiplier) as _, k}
                    <tr>
                        <td> + {num_pos[k]} multiplier output: </td>
                        {#each Array(maxNumLength) as _, j}
                            <td>{output_array[k][j]}</td>
                        {/each}
                    </tr>
                    {/each}
                    <tr>
                        <td>Adding {size_of_multiplier} multiplier outputs = </td>
                        {#each Array(maxNumLength) as _, j}
                            {#if (j== (maxNumLength -1 - n))}
                                <td> {result_array[size_of_multiplier][j]} </td>
                            {:else}
                                <td> </td>
                            {/if}
                        {/each}
                    </tr>
                    <tr>
                        <td>New Carry Over = </td>
                        {#each Array(maxNumLength) as _, j}
                            {#if (j== (maxNumLength -1 - n))}
                                <td> {carry_array[size_of_multiplier][j]} </td>
                            {:else}
                                <td> </td>
                            {/if}
                        {/each}
                    </tr>
                    <tr>
                        <td>Total for {size_of_multiplier} additions =</td>
                        {#each Array(maxNumLength) as _, j}
                            {#if (j>= (maxNumLength -1 - n))}
                                <td> {output_array[size_of_multiplier][j]} </td>
                            {:else}
                                <td> </td>
                            {/if}
                        {/each}
                    </tr>
                    <tr> 
                        <td>  </td>
                    </tr>
                    <tr> 
                        <td> -- -- -- -- -- -- </td>
                    </tr>
                    <tr> 
                        <td>  </td>
                    </tr>
                    {/each}
                </table>         
        {/if}
        {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_multNumb()}> Rerun</button>
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