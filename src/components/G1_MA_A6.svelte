<script>
    import NPad from './Input_digitpad.svelte';
    import * as images from './jsfiles/box_with_shape_color.js';
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 100;

    let cnt_rn = COUNT_LOWNUM;
    let img_rn = images.BOX_SHPCOLOR_LOWNUM;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = undefined;
    let usr_resp = undefined;
    let clrLabel = '';
    let shpLabel ='';
    let imgFn = '';
    let box_has_img =[];

    function init_shapes() {
        cnt_rn = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        if (cnt_rn == 0)
            cnt_rn =1;
        img_rn = Math.floor(Math.random() * images.BOX_SHPCOLOR_HIGHNUM + images.BOX_SHPCOLOR_LOWNUM);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        correct_answer = cnt_rn;
 
        for (let i = 0; i < COUNT_HIGHNUM; i++) {
            if (i < cnt_rn) {
                box_has_img[i] = true;
            } else {
                box_has_img[i] = false;
            }
        };
        
        imgFn = images.BOX_SHPCOLOR_REPO[img_rn].img_fn;
        usr_resp = undefined;
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
        <p style="color:gray">Practice for counting upto 100: </p>
        <p style="color:gray">A line in the frame has 10 squares with shapes.</p>
        <h2>Count the number of {images.BOX_SHPCOLOR_REPO[img_rn].color} {images.BOX_SHPCOLOR_REPO[img_rn].shape}s. </h2>
        <!-- setup frame of 5 boxes -->
        {#each Array(COUNT_HIGHNUM) as _, i}
            {#if (i%10) == 0}
                <br>
                {#if box_has_img[i]}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[img_rn].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {:else}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[0].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {/if}
            {:else if (i%10) < 10}
                {#if box_has_img[i]}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[img_rn].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {:else}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[0].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {/if}
            {:else}
                {#if box_has_img[i]}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[img_rn].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {:else}
                    <img src={'images/shapes/' + images.BOX_SHPCOLOR_REPO[0].img_fn} 
                        align="middle" 
                        width=5%  
                        height=auto 
                    />
                {/if}
            {/if}    
        {/each}
    </div>

    <div>
        <p>Enter your anwer here: </p>
        <input type="number" bind:value="{usr_resp}">
    </div>

    <div>    
        {#if ans_submit}
            {#if (usr_resp == correct_answer)}
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