<script>
    import NPad from './Input_digitpad.svelte';
    import * as images from './jsfiles/Image_repo.js';
    import * as num from './jsfiles/numDigitImg_repo.js';
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;
    let max_button = 10;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 10;

    let img_rn = images.IMAGES_REPO_LOWNUM;
    let cnt_rn1 = 0;
    let cnt_rn2 = 0;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = -1;
    let usr_resp = -1;
    let imgLabel = '';
    let imgFn = '';

    function init_count10() {
        img_rn = Math.floor(Math.random() * images.IMAGES_REPO_HIGHNUM + images.IMAGES_REPO_LOWNUM);
        cnt_rn1 = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        cnt_rn2 = Math.floor(Math.random() * Math.abs(COUNT_HIGHNUM-cnt_rn1-1) + 1);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        correct_answer = cnt_rn1 + cnt_rn2;
        usr_resp = -1;
        imgLabel = images.IMAGES_REPO[img_rn]['label'];
        imgFn = 'images/' + (images.IMAGES_REPO[img_rn]['img_name']);
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
        <p style="color:gray">Practice adding upto 10: </p>
        <h2>Add the total number of {imgLabel}: </h2>
        <!--for loop over the answer which is a random number-->
        {#each Array(cnt_rn1) as _, i}
            <img src={imgFn} align="middle" width=7%  height=auto />
        {/each}
        <img src={num.ARTH_REPO[0].num_digit} align="middle" width=7%  height=auto />
        {#each Array(cnt_rn2) as _, i}
            <img src={imgFn} align="middle" width=7%  height=auto />
        {/each}
    </div>
    <div>

        <img src={num.NUMDIGIT_REPO[cnt_rn1].num_digit} align="middle" width=10%  height=auto />
        
        <img src={num.ARTH_REPO[0].num_digit} align="middle" width=10%  height=auto />
        
        <img src={num.NUMDIGIT_REPO[cnt_rn2].num_digit} align="middle" width=10%  height=auto />
        <img src={num.ARTH_REPO[4].num_digit} align="middle" width=10%  height=auto />

        <img src={num.ARTH_REPO[7].num_digit} align="middle" width=5%  height=auto />
    </div>

    <div>
        <br>
        <p>Enter your answer here: </p>
        <NPad bind:usr_select={usr_resp} {max_button}/>
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