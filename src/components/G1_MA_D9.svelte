<script>

  import Ops_n_comp from "./operations_upto_n.svelte";
  
  export let COUNT_HIGHNUM = 20;
  export let fixed_num = 9 ;
  export let op = "+" ;
  export let h_question = "Addition upto :"
  export let sub_question = "Add the two numbers :"

</script>

<!-- Binds the values  -->

<Ops_n_comp   bind:COUNT_HIGHNUM    bind:fixed_num    bind:op    bind:h_question    bind:sub_question/>

<!-- Markup if needed -->