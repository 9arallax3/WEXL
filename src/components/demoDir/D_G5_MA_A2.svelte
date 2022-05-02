<script>
import {ID_D_G5_MA_A2} from '../allDemoComponents.js';
import AdditionBase from './AdditionBase.svelte';
import { custActConfig, sc_obj } from  '../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_D_G5_MA_A2;

    console.log('inside D_G5_MA_A2');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <AdditionBase {actConfig} {scObj}/> 
    </div>
</div> 
    