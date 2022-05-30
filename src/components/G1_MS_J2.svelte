<script>
    import * as c_ans from "./jsfiles/correct_ans_repo.js";
    import * as w_ans from "./jsfiles/wrong_ans_repo.js";
  
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
  
    export let rn1 = 0;
    export let rn2 = 0;
    export let COUNT_HIGHNUM = 10;
    export let correct_answer = 0;
    export let op = "-";
    export let usr_resp = null;
    export let ans_submit = false;
    export let head_question = " Subtract Doubles: ";
    export let sub_question = " Subtract the two doubles: ";
  

    export function Ops_comp() {

        rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM )+ 1) *  2 ;
        rn2 =  rn1 / 2 ;

    c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
    w_ans_rn = Math.floor(  Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);

    correct_answer = rn1 - rn2 ;

    usr_resp = null;
    ans_submit = false;
    
    console.log( "correct ans: ", correct_answer, "high num : ", COUNT_HIGHNUM, " rn1: ", rn1, " rn2:", rn2, " op:", op);
    return;
  }
  Ops_comp();

  export function submitted() {
    ans_submit = true;
  }

  export function skill_exit() {}
</script>

<!-- Markup below -->

<div class="stack-large">
  <div>
    <h2 style="color:orange">{head_question} </h2>
    <br />
    <h3>{sub_question}</h3>
    <br />
    <h2>{rn1} {op} {rn2} = <input bind:value={usr_resp} /></h2>
  </div>
  <div>
    <br />
    <!-- <p>Enter your answer here:</p>-->

    <p style="color:aqua">
      Correct answer is {correct_answer}, but answer submitted is {usr_resp}
    </p>

    {#if ans_submit}
      {#if parseInt(usr_resp, 10) == correct_answer}
        <h>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</h>
      {:else}
        <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
      {/if}
    {/if}
  </div>

  <button type="button" class="btn toggle-btn" on:click={() => submitted()}>
    Submit</button
  >
  <button type="button" class="btn toggle-btn" on:click={() => Ops_comp()}>
    Rerun</button
  >
  <button type="button" class="btn toggle-btn" on:click={() => skill_exit()}>
    Exit This Skill</button
  >
</div>
  