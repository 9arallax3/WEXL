<script>
import {ID_D_MN_MA_NL1} from '../allDemoComponents.js';
import MN_NumberLine from './manipulative_numberline.svelte';
import { custActConfig, sc_obj } from  '../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_D_MN_MA_NL1;

    console.log('inside D_MN_MA_NL1');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <MN_NumberLine {actConfig} {scObj}/> 
    </div>
</div> 