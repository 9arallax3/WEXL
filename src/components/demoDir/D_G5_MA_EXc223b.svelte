<script>
import {ID_D_G5_MA_EXc223b} from '../allDemoComponents.js';
import EX_AddBase from './Example_AdditionBase.svelte';
import { custActConfig, sc_obj } from  '../taskjs/taskObjDefn.js';
import {EX_G5_MA_C2} from "../demoDir/EXg5c2.js";

export let scObj = sc_obj;
export let actConfig = custActConfig;
let fixed_params =[3, 
    EX_G5_MA_C2[2].params[1][0], 
    EX_G5_MA_C2[2].params[1][1],
    EX_G5_MA_C2[2].params[1][2]];

function initAct() {
    actConfig.component_id = ID_D_G5_MA_EXc223b;

    console.log('inside D_G5_MA_EXc223b', ' # of param: ', fixed_params);
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <EX_AddBase {actConfig} {scObj} {fixed_params}/> 
    </div>
</div> 
        