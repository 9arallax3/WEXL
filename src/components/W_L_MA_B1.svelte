//WEXL Learning to count - up to p-3
<script>
import {ID_W_L_MA_B1} from './allWEXLcounting.js';
import CountObj from './countObj.svelte';

let component_id = ID_W_L_MA_B1;
let prcntValue = "10%";
let img_type = "grid";
let inputMethod = "textbox";
let max_button = 20;

</script>
    
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <CountObj {prcntValue} {component_id} {img_type} {inputMethod} {max_button}/>
    </div>
</div> 