<script>
import {sc_obj} from '../components/taskjs/taskObjDefn.js';

// datastructure with student choice information
export let scObj = sc_obj;

let collection_list = [
  {value:0, label:"choose set"},
  {value:1, label:"First set"},
  {value:2, label:"Generic"},
  {value:3,  label:"WEXL"},
  {value:4,  label:"Demo"},
];

let grades_list = [
  {value:0, label:"choose grade"},
  {value:-1, label:"LKG"},
  {value:-2, label:"UKG"},
  {value:1,  label:"Grade 1"},
  {value:2,  label:"Grade 2"},
  {value:3,  label:"Grade 3"},
  {value:4,  label:"Grade 4"},
  {value:5,  label:"Grade 5"},
];

let subjects_list = [
  {value:0, label:"choose subject"},
  {value:1, label:"Math"},
  {value:2, label:"English"},
  {value:3, label:"Science"},
  {value:4, label:"EVS"},
];

function submitted () {
  console.log('submitted scObj: ', scObj);
};

</script>

<!-- Markup Area-->
<!-- SCC Base Setup-->
<div class="sccapp stack-large">
  <h2>Activity Selection</h2>
    <input bind:value={scObj.taskIndex}>
    <!-- Notices 
    <p>Show any pending notices.</p>
    <p>If student asks for it, show a sample use case also.</p>
    -->  

    <form on:submit|preventDefault ={submitted}>
      <label for="clctn">C</label>
      <select name="clctn" bind:value={scObj.collection}>
        {#each collection_list as item}
          <option value={item.value}>{item.label}</option>
        {/each}
      </select>

      <label for="grade"> G</label>
      <select name="grade" bind:value={scObj.grade}>
        {#each grades_list as gr}
          <option value={gr.value}>{gr.label}</option>
        {/each}
      </select>

      <label for="subject"> S</label>
      <select name="subject" bind:value={scObj.subject}>
        {#each subjects_list as sbj}
          <option value={sbj.value}>{sbj.label}</option>
        {/each}
      </select>

      <!-- <input bind:value={scObj.taskID}>
      <br>
      <div class="mt-3">
        <button type="button" class="btn toggle-btn" on:click={submitted}>Submit</button>        
      </div> -->
  </form>
</div>

<style>

  input {
      display: block;
      wvalueth: 500px;
      max-wvalueth: 100%;
    }
  
</style>