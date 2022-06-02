<script>
  import * as c_ans from "./jsfiles/correct_ans_repo.js";
  import * as w_ans from "./jsfiles/wrong_ans_repo.js";
 
  let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
  let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;

  export let rn1;
  export let ran_type = ""

  export let COUNT_HIGHNUM = 100 ;
  export let correct_answer = false ;
  export let usr_resp = null ;
  export let user_selection = [ "even", "odd"];
  export  let  ans_submit = false;


  export function RandNumGen() {

    rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM) + 1);
    console.log("gen rn val",rn1)

     c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
     
     w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);

    if(rn1 % 2 == 0){
      ran_type = user_selection[0];
    }
    else{
      ran_type = user_selection[1];
    }
    ans_submit = false;

  }
  RandNumGen(); 

  export function assignresp(resp){
    usr_resp = resp;
  }
  export function result(){
   
    console.log("usr",usr_resp)

    if(usr_resp == ran_type){
      console.log("correct ans")
    }
    else{
      console.log("wrong ans")
    }
    ans_submit = true;
  };

  // export function submitted() {
  //   ans_submit = true;
  // };

  export function skill_exit() {};
</script>

<div class="stack-large">
  <div>
    <h2 style="color:orange">Determine whether <span>{rn1}</span> is even or odd </h2>
    <br />
    <br />
  </div>


<div class= "test1">
<button type="button" style= width:70px  class="btn toggle-btn" on:click={assignresp(user_selection[0])}>{user_selection[0]}</button>
<button class="btn toggle-btn" style= width:70px on:click={assignresp(user_selection[1])}>{user_selection[1]}</button>
</div>
<button type="button" style= width:90px  class="btn toggle-btn" on:click={() => result()}>
  Submit</button>

</div>
<br>
<br>
{#if ans_submit}
{#if usr_resp == ran_type}
  <h>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</h>
{:else}
  <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
{/if}
{/if}

<br>
<br>

<button type="button" style= width:70px class="btn toggle-btn" on:click={() => RandNumGen()} >
  Rerun</button
>
<style>
span   {
  color : aqua ;
}

.test1{

  text-align: left 100px;

}

</style>