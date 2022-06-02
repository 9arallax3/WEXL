<script>

    import Ops_comp from "C:/Users/karthik/Documents/sai-gollapudi-scc-2ed3782aef6f/scc-proto/src/components/ops_in_pair.svelte";
    
   
     export let COUNT_HIGHNUM = 10;
     export let op = "+";
     export let head_question = "Adding Doubles: ";
     export let sub_question = "Add the two doubles: ";
     
   
     </script>
   
     <Ops_comp   bind:COUNT_HIGHNUM  bind:op  bind:head_question  bind:sub_question /> 