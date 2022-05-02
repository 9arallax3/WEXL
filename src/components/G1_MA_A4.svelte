<script>
    import * as images from './jsfiles/Image_repo.js';
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 90;

    let img_rn = 0;
    let cnt_rn = COUNT_LOWNUM;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = -1;
    let usr_resp = -1;
    let label = '';
    let fn = '';

    function init_count10() {
        img_rn = Math.floor(Math.random() * images.IMAGES_REPO_HIGHNUM + images.IMAGES_REPO_LOWNUM);
        cnt_rn = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        correct_answer = cnt_rn;
        usr_resp = -1;
        label = images.IMAGES_REPO[img_rn]['label'];
        fn = 'images/' + (images.IMAGES_REPO[img_rn]['img_name']);
        ans_submit = false;
    };
    init_count10();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };
</script>

<!-- Markup Area-->
<div class="stack-large">
    <div>
        <p style="color:gray">Practice for counting upto 10: </p>
        <h2>How many {label} are there? </h2>
        <!--for loop over the answer which is a random number-->
        {#each Array(correct_answer) as _, i}
            <img src={fn} align="middle" width=10%  height=auto />
        {/each}
    </div>
    <div>
        <br>
        <p>Enter your answer here: </p>
        <NPad bind:usr_select={usr_resp}/>
        {#if ans_submit}
        {#if (usr_resp === correct_answer)}
            <p>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</p>
        {:else}
            <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
        {/if}
        {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_count10()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
</div>