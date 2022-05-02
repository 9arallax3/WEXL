<script>
import {ID_Gk_MA_A1d2} from './allCountingComp.js';
import CountObj from './countObj.svelte';
import { custActConfig, sc_obj } from './taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_Gk_MA_A1d2;
    actConfig.prcntValue = "10%";
    actConfig.img_type = "pics";
    actConfig.inputMethod = "mix";
    actConfig.max_button =10;

    console.log('inside GK_MA_A1d2');
};
initAct();
</script>
            
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObj {actConfig} {scObj}/>
    </div>
</div>    