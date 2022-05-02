<script>
    import { custActConfig, renderedActivity } from "./taskjs/taskObjDefn";

    // assumes the rendering required is a mix of images
    export let actConfig = custActConfig;
    export let rendAct = renderedActivity;

</script>

<div>
    <h2>How many {rendAct.label} are there?</h2> 
    <h3> Be sure to only count the {rendAct.label}.</h3> 
</div>

<div>
{#each Array(rendAct.cnt_rn) as _}
<img src={rendAct.fn} 
    align="middle" 
    width={actConfig.prcntValue}  
    height=auto 
    style="padding-left: 10px; padding-bottom: 20px;"/>
    {#if (rendAct.rn-- <= rendAct.cnt_rn)}
        <img src={rendAct.fn2} 
            align="middle" 
            width={actConfig.prcntValue}
            height=auto 
            style="padding-left: 10px; padding-bottom: 20px;"/>
    {/if}
{/each}
</div>