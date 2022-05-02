<script>
import {act_list} from './allComponents';
import {COUNTING_TASKS_LIST} from './allCountingComp.js';
import {W_COUNTING_TASKS_LIST} from './allWEXLcounting.js';
import { DEMO_TASKS_LIST } from './allDemoComponents.js'; 
import { sc_obj } from './taskjs/taskObjDefn.js';

export let scObj = sc_obj;

function getComponent () {
  let tempComponent = act_list[0].comp;
  let tempActChoice = parseInt(scObj.taskIndex, 10);
  console.log('GetComponent: scObj - ', scObj);
  switch(scObj.collection) {
    case (1):  // first set
      if ((tempActChoice >= 0) && (tempActChoice < act_list.length)) {
        tempComponent = act_list[tempActChoice].comp;
      } else {
        tempComponent = act_list[0].comp;
        console.log("ERROR in TaskChoice: Task ID number beyond range!");
      };
      break;
    case (2): // second set 134-154
      if ((tempActChoice >= 0) && (tempActChoice < COUNTING_TASKS_LIST.length)) {
        tempComponent = COUNTING_TASKS_LIST[tempActChoice].comp;
      } else {
        tempComponent = COUNTING_TASKS_LIST[0].comp;
        console.log("ERROR in Counting TaskChoice: Task ID number beyond range!");
      };
      break;
    case (3): //WEXL set 155-175+
      if ((tempActChoice >= 0) && (tempActChoice < W_COUNTING_TASKS_LIST.length)) {
        tempComponent = W_COUNTING_TASKS_LIST[tempActChoice].comp;
      } else {
        tempComponent = W_COUNTING_TASKS_LIST[0].comp;
        console.log("ERROR in WEXL TaskChoice: Task ID number beyond range!");
      };
      break;
    case (4): // DEMO collection set
      if ((tempActChoice >= 0) && (tempActChoice < DEMO_TASKS_LIST.length)) {
        tempComponent = DEMO_TASKS_LIST[tempActChoice].comp;
      } else {
        tempComponent = DEMO_TASKS_LIST[0].comp;
        console.log("ERROR in DEMO TaskChoice: Task ID number beyond range!");
      };
      break;
    default:
      if ((scObj.taskIndex >= 0) && (scObj.taskIndex < act_list.length)) {
        tempComponent = act_list[tempActChoice].comp;
      } else {
        console.log("ERROR in DEFAULT TaskChoice: Task ID number beyond range!");
      };
  };
  console.log('getComp: component', tempComponent);
  return tempComponent;
};

</script>

<!-- Markup Area-->

<!-- SCC Base Setup-->
<p>activity ID - {scObj.taskIndex}</p>
<div class="sccapp stack-large">
  <!-- Question Area -->
  <div class="stack-large">
      <div>
        <svelte:component this={getComponent()} {scObj}/>
      </div>
  </div>
</div>