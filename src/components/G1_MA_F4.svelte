<script>
    import * as c_ans from "./jsfiles/correct_ans_repo.js";
    import * as w_ans from "./jsfiles/wrong_ans_repo.js";
   
  
   let  c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
   let  w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
   let  correct_answer = 0;
   let  usr_resp = null;
   let answer ;
  
  
    let ans_submit = false;
  
    const COUNT_LOWNUM = 1;
    const COUNT_HIGHNUM = 5;
  
    let  rn1 = 0;
    let  rn2 = 0;
    let  rn3 = 0;
    
  
    function add_upto_n() {
      rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM) * 2 + 1 );
      rn3 = Math.floor(Math.random() * (COUNT_HIGHNUM) * 2 + 1 );
      rn2 = 10 - rn1;
      c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
     
      w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
      correct_answer ;
      correct_answer = rn1 + rn2 + rn3;


      usr_resp ;
      ans_submit = false;
    }
    add_upto_n();
  
    function submitted() {
      ans_submit = true;
    }
     
    function skill_exit() {} 
  </script>
  
  <div class="stack-large">
    <div>
      <h2 style="color:orange">Adding three numbers using double:</h2>
      <br>
      <h3>Add:</h3>
      <!--for loop over the answer which is a random number-->
      <br>
     <h2>{rn1} + {rn2} + {rn3} = ? </h2>
    </div>

    
  
    <div>
      <br />
     <p>Enter your answer here:</p>
     <input type ="number"bind:value={usr_resp} />
      <p style="color:aqua">
        Correct answer is {correct_answer}, but answer submitted is {usr_resp}
      </p>
  

      
      {#if ans_submit}

      <!--  why parseInt when we can say if ans_submit == correct_answer ? -->

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
    <button type="button" class="btn toggle-btn" on:click={() => add_upto_n()}>
      Rerun</button
    >
    <button type="button" class="btn toggle-btn" on:click={() => skill_exit()}>
      Exit This Skill</button
    >
  </div>
   