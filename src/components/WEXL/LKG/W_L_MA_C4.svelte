<script>
import {ID_W_L_MA_C4} from '../../allWEXLcounting.js';
import CountObj from '../../countObj.svelte';
import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_W_L_MA_C4;

    console.log('inside W_L_MA_C4');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObj {actConfig} {scObj}/> 
    </div>
</div> 