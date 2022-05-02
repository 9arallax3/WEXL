<script>
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 100;

    let cnt_rn1 = 0;
    let cnt_rn2 = 0;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = -1;
    let usr_resp = -1;
    let numerator = -1;
    let denominator = -1;


    function init_div100() {
        cnt_rn1 = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        cnt_rn2 = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        numerator = cnt_rn1 * cnt_rn2;
        denominator = cnt_rn2
        correct_answer =  cnt_rn1;
        usr_resp = -1;
        ans_submit = false;
    };
    init_div100();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };
</script>

<!-- Markup Area-->

<div class="stack-large">
    <div>
        <p style="color:gray">Practice dividing numbers upto 100: </p>
        <h3>Divide the first number with the first: </h3>
        <!--for loop over the answer which is a random number-->
            <h2> {numerator} / {denominator} = ? </h2>
    </div>

    <div>
        <br>
        <p>Enter your answer here: </p>
        <input bind:value={usr_resp}>
        <p style="color:aqua">Correct answer is {correct_answer}, but answer submitted is {usr_resp}</p>

        {#if ans_submit}
        {#if (parseInt(usr_resp, 10) == correct_answer)}
            <p>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</p>
        {:else}
            <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
        {/if}
        {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_sub100()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
</div>