<script>

    import Ops_n_comp from "C:/Users/karthik/Documents/sai-gollapudi-scc-2ed3782aef6f/scc-proto/src/components/operations_upto_n.svelte";
    
   
    //export let COUNT_HIGHNUM = 10;
    export let fixed_num = 0;
    export let op = "+";
    export let head_question = "Addition :";
    export let sub_question = "Add :";
</script>

<!-- Binds the values  -->

<Ops_n_comp   bind:fixed_num  bind:op  bind:head_question  bind:sub_question/>

<!-- Markup if needed -->