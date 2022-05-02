<script>
    import {ID_W_U_MA_B10, ID_W_U_MA_C10, W_COUNTING_TASKS_LIST} from '../../allWEXLcounting.js';
    import { custActConfig, sc_obj } from  '../../taskjs/taskObjDefn.js';
    
    export let scObj = sc_obj;
    export let actConfig = custActConfig;
    
    function initAct() {
        actConfig.component_id = ID_W_U_MA_C10;
    
        console.log('inside W_U_MA_C10 = W_U_MA_B10');
    };
    initAct();
    //reusing existing component
    </script>
            
    <svelte:component this={W_COUNTING_TASKS_LIST[ID_W_U_MA_B10].comp} {actConfig} {scObj}/>