<script >
import {activityObj, createCountingTaskObj} from './taskjs/taskInfo_repo.js';
import Resp from './response.svelte';
import {LIC_IMG_REPO} from './jsfiles/Image_repo.js';
import {SHPCOLOR_REPO} from './jsfiles/shapesColor_repo.js';

export let component_id; 
export let prcntValue;
export let img_type;
export let correct_answer = null;

let usrResp;
let ans_submit = false;
let showNext = "none";   
let showPopUp;
let showSolution= false;
let task_redo = false;
let inputMethod = "textbox";
    
export let tObj = activityObj;
function init_task() {
    tObj.presntn_data.answer = null;
    tObj.presntn_data.showSolution = false;
    tObj.presntn_data.showNext = 'none';
    console.log('task ID: ', component_id, ' percentage: ', prcntValue);
    tObj = createCountingTaskObj(component_id);
    usrResp=null;
    ans_submit = false;
};
init_task();

let img_rn = 0;
let img2_rn =0;
let cnt_rn = tObj.presntn_data.lowVal;
let rn2 =0;
let label = '';
let fn = '';
let fn2 ='';

function load_images() {
    // for larger couting, better to load shapes as we can fit more
    // in a page-width without loosing resolution.
    if (img_type = "pics") {
        img_rn = Math.floor(Math.random() * LIC_IMG_REPO.length);
        img2_rn = Math.floor(Math.random() * LIC_IMG_REPO.length);
        if ((img2_rn == img_rn) && (img2_rn < LIC_IMG_REPO.length-1)) {
            img2_rn += 1;
        } else if (img2_rn == (LIC_IMG_REPO.length-1)) {
            img2_rn -= 1;
        }
        label = LIC_IMG_REPO[img_rn]['label'];
        fn = 'images/img/lic_ok/' + (LIC_IMG_REPO[img_rn]['img_name']);
        fn2 = 'images/img/lic_ok/' + (LIC_IMG_REPO[img2_rn]['img_name']);
    } else if (img_type == "shapes") {
        img_rn = Math.floor(Math.random() * SHPCOLOR_REPO.length);
        img2_rn = Math.floor(Math.random() * SHPCOLOR_REPO.length);
        if ((img2_rn == img_rn) && (img2_rn < SHPCOLOR_REPO.length-1)) {
            img2_rn += 1;
        } else if (img2_rn == (SHPCOLOR_REPO.length-1)) {
            img2_rn -= 1;
        }
        label = SHPCOLOR_REPO[img_rn]['color']+'-'+SHPCOLOR_REPO[img_rn]['shape']+'s';
        fn = 'images/shapes/' + (SHPCOLOR_REPO[img_rn]['img_fn']);
        fn2 = 'images/shapes/' + (SHPCOLOR_REPO[img2_rn]['img_fn']);
    };
};

function init_countMix() {
    console.log('inside initCountMIX componentID ', component_id, ' per% ', prcntValue);
    cnt_rn = Math.floor(Math.random() * tObj.presntn_data.highVal - tObj.presntn_data.lowVal) + tObj.presntn_data.lowVal;
    rn2 = Math.floor(Math.random() * tObj.presntn_data.highVal - tObj.presntn_data.lowVal) + tObj.presntn_data.lowVal;
    correct_answer = cnt_rn;
    tObj.presntn_data.answer = correct_answer;
    usrResp=null;
    ans_submit = false;

    // upload a random image/pic/shape for couting
    load_images();
    task_redo = false;
    console.log('img_rn: ',img_rn, ' img2_rn: ', img2_rn, ' label: ', label);
    console.log('cnt_rn: ',cnt_rn, ' rn2: ', rn2, ' fn: ', fn, ' fn2: ', fn2);
};
init_countMix();

</script>
            
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <p style="color:gray">{tObj.presntn_data.heading}</p>
        </div>
    
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            <div >
                <h2>How many {label} are there?</h2>
                <h3> Be sure to only count the {label}.</h3>     
            <div >   
                <div>
                    <!--for loop over the answer which is a random number-->
                    {#if correct_answer}
                    {#each Array(correct_answer) as _, i}
                        <img src={fn} align="middle" width={prcntValue}  height=auto />
                        {#if (rn2 <= cnt_rn)}
                            <img src={fn2} align="middle" width={prcntValue}  height=auto />
                        {/if}
                    {/each}
                    {/if}
                </div>
            </div>    
        </div>  
        <br>    
        <Resp {ans_submit} 
            {correct_answer} 
            {usrResp} 
            {task_redo} 
            {inputMethod} 
            on:redoTask={init_countMix}/>
        </div>
    </div>
</div>
            