<script>
    import Ops_n_comp from "./operations_upto_n.svelte";
  
    export let COUNT_HIGHNUM = 10;
    export let fixed_num = 0;
    export let op = "+";
    export let head_question = "Adding zero:";
    export let sub_question = "Add :";
  </script>
  
  <!-- Binds the values  -->
  
  <Ops_n_comp
    bind:COUNT_HIGHNUM
    bind:fixed_num
    bind:op
    bind:head_question
    bind:sub_question
  />
  
  <!-- Markup if needed -->