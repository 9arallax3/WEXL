<script>
import {ID_W_U_MA_C13} from '../../allWEXLcounting.js';
import CountSkip from '../../countSkip.svelte';
import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_W_U_MA_C13;

    console.log('inside W_U_MA_C13');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountSkip {actConfig} {scObj}/> 
    </div>
</div> 