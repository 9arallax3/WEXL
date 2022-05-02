<script>
    //assumes the normal rendering, also works for True or False
    import { custActConfig, renderedActivity } from "./taskjs/taskObjDefn";

    // assumes the rendering required is a mix of images
    export let actConfig = custActConfig;
    export let rendAct = renderedActivity;

</script>

<div>
    {#if actConfig.inputMethod == "torf"}
        <h2>There are {rendAct.rn} {rendAct.label} here.</h2>  
    {:else}
        <h2>How many {rendAct.label} are there?</h2> 
    {/if}
</div>

<div>
    {#each Array(rendAct.correct_answer) as _, i}
    <img src={rendAct.fn} 
        align="middle" 
        width={actConfig.prcntValue}
        height=auto 
        style="padding-left: 10px; padding-bottom: 20px;"/>
    {/each}
</div>