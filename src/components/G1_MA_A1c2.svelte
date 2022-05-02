<script>
import {ID_G1_MA_A1c2} from './allCountingComp.js';
import CountObjGrid from './countObjGrid.svelte';
import { custActConfig, sc_obj } from './taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_G1_MA_A1c2;
    actConfig.prcntValue = "10%";
    actConfig.img_type = "grid";
    actConfig.inputMethod = "torf";
    actConfig.max_button =20;

    console.log('inside G1_MA_A1c2');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObjGrid {actConfig} {scObj}/>
    </div>
</div> 