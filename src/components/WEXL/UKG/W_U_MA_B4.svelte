<script>
import {ID_W_L_MA_C5, ID_W_U_MA_B4, W_COUNTING_TASKS_LIST} from '../../allWEXLcounting';
import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_W_U_MA_B4;

    console.log('inside W_U_MA_B4 = W_L_MA_C5');
};
initAct();
//reusing existing component
</script>
        
<svelte:component this={W_COUNTING_TASKS_LIST[ID_W_L_MA_C5].comp} {actConfig} {scObj}/>