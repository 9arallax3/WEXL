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
    const num_qnty = 2;
    let output_array = [];
    let mod_1numArray =[];
    let result_array = [];
    let borrow_array = [];
    let maxNumLength =0;
    let correct_answer =0;
    const add_units =['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands', 'Millions'];
    const num_pos =['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];


    // sort in descending order
    function desend_numSort(some_array) {
        some_array.sort(function(a, b){return b - a});
        return some_array;
    }

    function setup_numObj() {
        correct_answer = 0;
        maxNumLength =0;
        for (let i=0; i< num_qnty; i++) {
            num[i] = Math.floor(Math.random() * COUNT_HIGHNUM - COUNT_LOWNUM) + COUNT_LOWNUM;
        };
        // sort such that smaller numbers are subtracted from bigger numbers
        // this is to avoid negative numbers in results
        num = desend_numSort(num);
        for (let i=0; i< num_qnty; i++) {
            // take each random number and stringify it
            // then reverse it to begin addition from 10s, 100s,...
            numArray[i] = num[i].toString().split('').reverse();
            // identify the longest number and use that for doing 10s, 100s 
            // in the addition
            if (maxNumLength < numArray[i].length) {
                maxNumLength = numArray[i].length;
            };
            if (i == 0) {
                correct_answer = num[0];
            } else {
                correct_answer -= num[i];
            };
        };
        // pad useless zeros to the smaller number to match the digits of the larger number
        for (let i=0; i< num_qnty; i++) {
            if (numArray[i].length < maxNumLength) {
                for (let j=numArray[i].length; j < maxNumLength; j++) {
                    numArray[i][j] =0;
                };
            };
        };
        console.log(num[0] + ' - '+ num[1]+' = ' + correct_answer);
        // intialize borrow overs and the final output answer
        mod_1numArray = [];
        result_array =[];
        result_array[0] =0;
        borrow_array =[];
        borrow_array[0] =0;
        output_array = [];
        output_array[0] =0;
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

    function init_subNumb() {
        setup_numObj();
        setup_randomAnswer();
        sub_twoNumb();
        prepareNum_for_display();
    };
    init_subNumb();

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
        for (let i=0; i < (num_qnty-1); i++) {
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

</script>


<!-- Markup Area-->

<div class="stack-large">
    <div>
        <h2 style="color:blue">Question:</h2>
        <h3>Subtract {num_pos[1]} number from {num_pos[0]}: </h3>
        <div style="display:table;">
            {#each Array(num_qnty) as _, i}
                {#if (i == 0)}
                    <p style="display:table-cell;">
                        {num[i]}
                    </p>
                {:else}
                    <p style="display:table-cell;">
                        - {num[i]}
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

            <p>Problem restated: </p>
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
                            <p> - </p>
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
                    <td>Borrow Over: </td>
                    {#each Array(maxNumLength) as _, j}
                        <!--Carry is always one digit off the one we are working on-->
                        <td>{borrow_array[j+1]}</td>  
                    {/each}
                </tr>
                <tr>
                <td>- {num_pos[0]} number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {numArray[0][j]} </td>
                    {/each}
                </tr>
                <tr>
                    <td>Modified {num_pos[0]} number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {mod_1numArray[j]} </td>
                    {/each}
                </tr>
                <tr>
                    <td>- {num_pos[1]} number: </td>
                    {#each Array(maxNumLength) as _, j}
                        <td> {numArray[1][j]} </td>
                    {/each}
                </tr>
                <tr>
                    <td>Subtraction of {num_qnty} numbers = </td>
                        {#each Array(maxNumLength) as _, j}
                            <td> {output_array[j]} </td>
                        {/each}
                    </tr>
                </table>    

                <h2 style="color:blue">Detailed Explanation: </h2>
                <table>
                        {#each Array(maxNumLength) as _, k}
                        <tr> 
                            <td> Step {k+1}: work with {add_units[k]}.</td> 
                        </tr>
                        <tr>
                        <tr>
                            <td>{num_pos[0]} number: </td>
                            {#each Array(maxNumLength) as _, j}
                                <td> {numArray[0][j]} </td>
                            {/each}
                        </tr>
                        <tr>
                            <td>{num_pos[1]} number: </td>
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
                            <td>Modified {num_pos[0]} number: </td>
                            {#each Array(maxNumLength) as _, j}
                                {#if (j== (maxNumLength -1 - k))}
                                    <td> {mod_1numArray[j]} </td>
                                {:else}
                                    <td> </td>
                                {/if}
                            {/each}
                        </tr>
                        <tr>
                            <td>Subtracting in {add_units[k]} place = </td>
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
    <button type="button" class="btn toggle-btn" on:click={ () => init_subNumb()}> Rerun</button>
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