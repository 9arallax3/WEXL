<script>
    import {ID_W_U_MA_B9} from '../../allWEXLcounting.js';
    import CountObj from '../../countObj.svelte';
    import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';

export let scObj = sc_obj;
export let actConfig = custActConfig;

function initAct() {
    actConfig.component_id = ID_W_U_MA_B9;

    console.log('inside W_U_MA_B9');
};
initAct();
</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObj {actConfig} {scObj}/>
    </div>
</div> 