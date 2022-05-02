<script>
import {ID_Gk_MA_A1c} from './allCountingComp.js';
import CountObj from './countObj.svelte';
import { custActConfig, sc_obj } from './taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_Gk_MA_A1c;
    actConfig.prcntValue = "20%";
    actConfig.img_type = "pics";
    actConfig.inputMethod = "torf";
    actConfig.max_button =10;

    console.log('inside GK_MA_A1c');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObj {actConfig} {scObj}/>
    </div>
</div> 