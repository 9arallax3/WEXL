<script>
    import NPad from './Input_digits_10btn.svelte';
    import * as shp from './jsfiles/shapesColor_repo.js';
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;
    let max_button = 10;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 10;

    let cnt_rn = 0;
    let img_rn = 0;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = -1;
    let usr_resp = -1;
    let clrLabel = '';
    let shpLabel ='';
    let imgFn = '';

    function init_shapes() {
        cnt_rn = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        img_rn = Math.floor(Math.random() * shp.SHPCOLOR_HIGHNUM + shp.SHPCOLOR_LOWNUM);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        correct_answer = cnt_rn;
        imgFn = shp.SHPCOLOR_REPO[img_rn].img_fn;
        usr_resp = -1;
        ans_submit = false;
    };
    init_shapes();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };
</script>

<!-- Markup Area-->

<div class="stack-large">
    <div>
        <p style="color:gray">Practice counting shapes upto 10: </p>
        <h2>Count the total number of {shp.SHPCOLOR_REPO[img_rn].color} {shp.SHPCOLOR_REPO[img_rn].shape}s: </h2>
        <!--for loop over the answer which is a random number-->
        {#each Array(cnt_rn) as _, i}
            <img src={'images/shapes/' + shp.SHPCOLOR_REPO[img_rn].img_fn} 
                align="middle" 
                width=10%  
                height=auto />
            <img src={'images/shapes/gap.png'} 
                align="middle" 
                width=1%  
                height=auto />
        {/each}
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
    <button type="button" class="btn toggle-btn" on:click={ () => init_shapes()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
</div>