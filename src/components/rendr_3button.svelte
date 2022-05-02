<script>
import { buttontnObject } from "./taskjs/taskObjDefn";

    export let btnObjAry = Array(buttontnObject);
</script>

<div>
{#each Array(MAX3BTN) as _, i}
<button type="button" class="btn toggle-btn" on:click={handleClick(i)}>
    {#each Array(btnObjAry[i].qnty) as _}
    <img src={btnObjAry[i].fn} 
        align="middle" 
        width={actConfig.prcntValue}
        height=auto 
        style="padding-left: 10px;"/>
    {/each}
</button>
{/each}
</div>