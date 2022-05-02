<script>
import {ID_W_L_MA_C7, ID_W_U_MA_B6, W_COUNTING_TASKS_LIST} from '../../allWEXLcounting';
import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_W_U_MA_B6;

    console.log('inside W_U_MA_B6 = W_L_MA_C7');
};
initAct();
//reusing existing component
</script>
        
<svelte:component this={W_COUNTING_TASKS_LIST[ID_W_L_MA_C7].comp} {actConfig} {scObj}/>