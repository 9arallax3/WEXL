<script>
  //   import InstructionArea from "./components/Instruction_area.svelte";
  //   import PracticeArea from "./components/Practice_area.svelte";
  //   import ResponseArea from "./components/Response_area.svelte";
  //   import { sc_obj } from "./components/taskjs/taskObjDefn.js";

  //   export let scObj = sc_obj;
  //   scObj = {
  //     //student choice object; contains user's choice for the task to execute
  //     taskIndex: 0,
  //     collection: 1,
  //     grade: 1,
  //     subject: 1,
  //     taskID: 1,
  //   };

  import Menu from "./Menu.svelte";
</script>

<!-- <InstructionArea bind:scObj />
<PracticeArea bind:scObj /> -->

<!--
	<ResponseArea act_choice={student_obj.activity}/> -->
<Menu />
