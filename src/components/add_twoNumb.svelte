<script>
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 1000;

    let num =[];
    let numArray =[];
    const num_qnty = 3;
    let output_array = [];
    let result_array = [];
    let carry_array = [];
    let maxNumLength =0;
    let ansNumLength =0;
    let correct_answer =0;
    const add_units =['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands', 'Millions'];
    const num_pos =['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

    function setup_numObj() {
        correct_answer = 0;
        maxNumLength =0;
        for (let i=0; i< num_qnty; i++) {
            // create multiple random numbers for question;
            // all these numbers are to be added
            num[i] = Math.floor(Math.random() * COUNT_HIGHNUM - COUNT_LOWNUM) + COUNT_LOWNUM;
            // take each random number and stringify it
            // then reverse it to begin addition from 10s, 100s,...
            numArray[i] = num[i].toString().split('').reverse();
            // identify the longest number and use that for doing 10s, 100s 
            // in the addition
            if (maxNumLength < numArray[i].length) {
                maxNumLength = numArray[i].length;
            };
            correct_answer += num[i];
        };
        // sometimes the answer is longer than the number of digits 
        // in each of the operands
        ansNumLength = correct_answer.toString().split('').length;
        //pad the extra digits for the numbers with useless 0s
        for (let i=0; i < num_qnty; i++) {
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
    };

    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let usr_resp = -1;

    function setup_randomAnswer () {
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + c_ans.CORRECT_ANS_MSG_LOWNUM;
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM -c_ans.CORRECT_ANS_MSG_LOWNUM) + w_ans.WRONG_ANS_MSG_LOWNUM;
        usr_resp = -1;
        ans_submit = false;
    };

    function init_addNumb() {
        setup_numObj();
        setup_randomAnswer();
        //prepareNum_for_addition(num1, num2);
        addStrings();
        prepareNum_for_display();
    };
    init_addNumb();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };


    function prepareNum_for_display() {
        let temp;
        for (let i=0; i < num_qnty; i++) {
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
        // index on j to get to each digit of any given number
        for (let j=0; j< ansNumLength; j++) {
            result = 0;
            output_array[j] =0;
            result_array[j] =0;
            carry_array [0] =0;
            result += Number(carry_array[j]);
            // index on i to get to each operand number
            for (let i=0; i< num_qnty; i++) {
                result += Number(numArray[i][j]);
                result_array [j] = result;
 //               console.log('i: ' + i + ' j: '+j + ' num= '+ numArray[i][j]+ ' result '+result);
                // removing the last digit in result for identifing  
                // next digit carryover
                carry_array[j+1] = Math.floor(result / 10);
                // using the mod operator to identify 'ones' digit to keep
                output_array[j] = (result%10);
            }
//            console.log('j: '+j+ ' result: '+result_array[j]+' carry over: '+carry_array[j+1] + ' output ' + output_array[j]);
        };
    };

</script>


<!-- Markup Area-->

<div class="stack-large">
    <div>
        <h2 style="color:blue">Question:</h2>
        <h3>Add the following {num_qnty} numbers: </h3>
        <div style="display:table;">
            {#each Array(num_qnty) as _, i}
                {#if (i == 0)}
                    <p style="display:table-cell;">
                        {num[i]}
                    </p>
                {:else}
                    <p style="display:table-cell;">
                        + {num[i]}
                    </p>
                {/if}
            {/each}
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
                            <p> + </p>
                        {/if}
                    </td>
                    <td>
                        {#if (i==0)}
                            <p> {num[0]} </p> 
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
                    <td>Carry Over: </td>
                    {#each Array(ansNumLength) as _, j}
                        <!--Carry is always one digit off the one we are working on-->
                        <td>{carry_array[j+1]}</td>  
                    {/each}
                </tr>
                {#each Array(num_qnty) as _, i}
                    <tr>
                        <td>+ {num_pos[i]} number: </td>
                        {#each Array(ansNumLength) as _, j}
                            <td> {numArray[i][j]} </td>
                        {/each}
                    </tr>
                {/each}
                <tr>
                    <td>Total for {num_qnty} numbers = </td>
                        {#each Array(ansNumLength) as _, j}
                            <td> {output_array[j]} </td>
                        {/each}
                    </tr>
                </table>    

                <h2 style="color:blue">Detailed Explanation: </h2>
                <table>
                        {#each Array(ansNumLength) as _, k}
                        <tr> 
                            <td> Step {k+1}: work with {add_units[k]}.</td> 
                        </tr>
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
                        {#each Array(num_qnty) as _, n}
                        <tr>
                            <td> + {num_pos[n]} Number: </td>
                            {#each Array(ansNumLength) as _, j}
                                <td>{numArray[n][j]}</td>
                            {/each}
                        </tr>
                        {/each}
                        <tr>
                            <td>Adding of {add_units[k]} = </td>
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
    <button type="button" class="btn toggle-btn" on:click={ () => init_addNumb()}> Rerun</button>
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