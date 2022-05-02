<script>
    import { custActConfig, question_type, renderedActivity } from "./taskjs/taskObjDefn";
    import {BOX_SHPCOLOR_REPO} from './jsfiles/box_with_shape_color.js';

    // assumes tenframe
    export let rendAct = renderedActivity;
    export let actConfig = custActConfig;

    const folderLoc ='images/shapes/'; // images, pics, shapes are located in various public folders... 
    const blank_src = folderLoc + BOX_SHPCOLOR_REPO[0].img_fn; //this is blank box for showing empty shape
    function get_imgSrc(hasImg) {
        let imgSrc = '';
        if (hasImg) {
            imgSrc = rendAct.fn;
        } else {
            imgSrc = blank_src;
        }; 
        return imgSrc;
    };

    console.log("in rendering a 10frame")
</script>
  
<div>
    {#if (actConfig.question_type == "fewMore") | (actConfig.question_type == "fewLess") }
        <h3>Count the {rendAct.label}.</h3>
    {:else if (actConfig.question_type =="gap")}
        <p>Grid can fit 10.</p>
    {:else}
        <h3>How many {rendAct.label} are there?</h3> 
    {/if}
</div>   
    
<div>
{#each Array(10) as _, i}
{#if i < 5}
    <img src={get_imgSrc(rendAct.box_has_img[i])} align="middle" width=10% height=auto />
{:else if i == 5}
    <br>
    <img src={get_imgSrc(rendAct.box_has_img[i])} align="middle" width=10% height=auto />
{:else}
    <img src={get_imgSrc(rendAct.box_has_img[i])} align="middle" width=10% height=auto />
{/if}    
{/each}
</div>
{#if (actConfig.question_type == "fewMore" | (actConfig.question_type == "fewLess"))}
    <div>
        <h3> Now count the {rendAct.label} below. What is the gap?</h3>
    </div>
    <div>
    {#each Array(10) as _, i}
    {#if i < 5}
        <img src={get_imgSrc(rendAct.box2_has_img[i])} align="middle" width=10% height=auto />
    {:else if i == 5}
        <br>
        <img src={get_imgSrc(rendAct.box2_has_img[i])} align="middle" width=10% height=auto />
    {:else}
        <img src={get_imgSrc(rendAct.box2_has_img[i])} align="middle" width=10% height=auto />
    {/if}   
    {/each}
    </div> 
{/if}   
