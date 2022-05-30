<script>

  import Ops_n_comp from "./operations_upto_n.svelte";
  
  export let COUNT_HIGHNUM = 60;
  export let fixed_num = 6 ;
  export let op = "-" ;
  export let head_question = "Subtraction upto :" ;
  export let sub_question = "Subtract the two numbers :" ;
  export let rand_upto = 6 ;

</script>

<!-- Binds the values  -->

<Ops_n_comp   bind:COUNT_HIGHNUM    bind:fixed_num    bind:op    bind:head_question    bind:sub_question    bind:rand_upto/>

<!-- Markup if needed -->