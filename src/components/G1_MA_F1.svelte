 <!-- <script>
    import * as c_ans from "./jsfiles/correct_ans_repo.js";
    import * as w_ans from "./jsfiles/wrong_ans_repo.js";
   
  
   let  c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
   let  w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
   let  correct_answer = 0;
   let  usr_resp = null;
   let answer ;
  
  
    let ans_submit = false;
  
    const COUNT_LOWNUM = 1;
    const COUNT_HIGHNUM = 10;
  
    let  rn1 = 0;
    let  rn2 = 0;
    
  
    function add_upto_n() {
      rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM)* 1 + 1);
      rn2 = rn1
      c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM +c_ans.CORRECT_ANS_MSG_LOWNUM);
      w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM); -->
     
      <!-- correct_answer = rn1 + rn2;


      usr_resp = null;
      ans_submit = false;
    }
    add_upto_n();
  
    function submitted() {
      ans_submit = true;
    }
     
    function skill_exit() {} 
  </script> -->
 
  <!-- <div class="stack-large">
    <div>
      <h2 style="color:orange">Adding Doubles:</h2>
      <br>
      <h3>Add the two doubles:</h3> -->
      <!--for loop over the answer which is a random number-->
      <!-- <br>
      <h2>{rn1} + {rn2} = <input bind:value={usr_resp} /> </h2>
      </div>

    
  
      <div>
      <br /> -->
     <!-- <p>Enter your answer here:</p>-->
      
      <!-- <p style="color:aqua">
        Correct answer is {correct_answer}, but answer submitted is {usr_resp}
      </p>
  

      
      {#if ans_submit} -->

      <!--  why parseInt when we can say if ans_submit == correct_answer ? -->

        <!-- {#if parseInt(usr_resp, 10) == correct_answer}
          <h>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</h>
        {:else}
          <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
        {/if}
      {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={() => submitted()}>
      Submit</button
    >
    <button type="button" class="btn toggle-btn" on:click={() => add_upto_n()}>
      Rerun</button
    >
    <button type="button" class="btn toggle-btn" on:click={() => skill_exit()}>
      Exit This Skill</button
    >
  </div> -->

  
<script>

 import Ops_comp from "./ops_in_pair.svelte";
 

  export let COUNT_HIGHNUM = 10;
  export let op = "+";
  export let head_question = "Adding Doubles: ";
  export let sub_question = "Add the two doubles: ";
  

  </script>

  <Ops_comp   bind:COUNT_HIGHNUM  bind:op  bind:head_question  bind:sub_question />   

 