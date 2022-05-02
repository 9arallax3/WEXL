<script >
import { uploadTaskObjData} from './taskjs/taskDataFetch.js';
import Resp from './response.svelte';
import {GRID_REPO} from './jsfiles/grid_repo.js';
import {taskObject, renderedActivity, sc_obj} from './taskjs/taskObjDefn.js';
import {randmNumb} from './taskjs/Utility/commUtil.js';
import { buildTaskObj } from './taskjs/taskObjBuilderj.js';


export let scObj; // data structure for user input choices
export let actConfig; // data structure for custom configuration of a given task
export let rendAct; // data sctruct for rendering a given task
const filePath = "images/shapes/"
    
export let tObj = buildTaskObj(scObj, actConfig, rendAct);

const pv_units =['Ones', 'Tens', 'Hundreds', 'Thousands'];
// , 'Ten Thousands', 'Hundred Thousands', 'Millions'];
const num_pos  =['First', 'Second', 'Third', 'Fourth'];
//, 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

let placeValueObj = {
    id: null,
    pv_name: undefined,
    pv_exists: false,
    pv_value: undefined,
    pv_grid_color: undefined, 
    pv_fileName: undefined,
    pv_img_size: "10%",
};
let pvAry_img = [];
let pvAry_img_len =0;


function pv_units_split(imgRn, rn) {
    let num_ary = rn.toString().split('').reverse();
    console.log('inside split: img-', imgRn, ' rn: ', rn, ' numAry: ', num_ary);
    let tempPvAry = [];
    for (let i=0; i<num_ary.length; i++) {
        let pvObj = placeValueObj;
        pvObj.id = i;
        pvObj.pv_exists = true;
        pvObj.pv_value = Number(num_ary[i]);
        pvObj.pv_grid_color = GRID_REPO[imgRn].color;
        if (i==0) {
            pvObj.pv_name = 'ones';
            pvObj.pv_fileName = filePath + GRID_REPO[imgRn].grid1_fn;
            pvObj.pv_img_size ="6.4%";
        } else if (i == 1) {
            pvObj.pv_name = 'tens';
            pvObj.pv_fileName = filePath + GRID_REPO[imgRn].grid10_fn;
            pvObj.pv_img_size = "7.25%";
        } else if (i == 2) {
            pvObj.pv_name = 'hundreds';
            pvObj.pv_fileName = filePath + GRID_REPO[imgRn].grid100_fn;
            pvObj.pv_img_size = "40%";
        } else if (i == 3) {
            pvObj.pv_name = 'thousands';
            pvObj.pv_fileName = filePath + GRID_REPO[imgRn].grid1000_fn;
            pvObj.pv_img_size = "20%";
        } else if (i > 3) {
            pvObj.pv_name = 'undfined'
        };
        tempPvAry = [...tempPvAry, {...pvObj}];
    };
    return tempPvAry;
};
    
// rendAct.cnt_rn represents the count quantity
// img_rn represents a random image to be shown rendAct.cnt_rn times.
// pvAry_img is an array of images to be shown; has place value information as obj
function load_images() {
    rendAct.img_rn = randmNumb(0, GRID_REPO.length-1);
    pvAry_img = pv_units_split(rendAct.img_rn, rendAct.cnt_rn).reverse();
    pvAry_img_len = pvAry_img.length;
    console.log('GRID LoadImages: rendAct', rendAct);
};
    
function init_countObj() {
    rendAct.cnt_rn = randmNumb(tObj.task_info.lowVal, tObj.task_info.highVal);
//    rn     = randmNumb(tObj.task_info.highVal, tObj.task_info.lowVal);
    if (tObj.task_info.highVal - rendAct.cnt_rn < 5) {
        rendAct.rn = randmNumb(rendAct.cnt_rn-3, tObj.task_info.highVal);
    } else if (rendAct.cnt_rn - tObj.task_info.lowVal < 5) {
        rendAct.rn = randmNumb(tObj.task_info.lowVal, rendAct.cnt_rn+3);
    } else {
        rendAct.rn = randmNumb(rendAct.cnt_rn-3, rendAct.cnt_rn+3);
    };
    rendAct.correct_answer = rendAct.cnt_rn;
    if (actConfig.inputMethod =="torf") {
        rendAct.correct_answer = (rendAct.rn == rendAct.cnt_rn);
    };
    tObj.task_info.answer = rendAct.correct_answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;

    // upload a random image/pic/shape for couting
    load_images();
    rendAct.task_redo = false;
    console.log('GRID: initCountObj: rendAct:', rendAct, ' scObj:', scObj, 'tObj', tObj);
};
init_countObj();

</script>
            
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <p style="color:gray">{tObj.presntn_data.heading}</p>
        </div>
    
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            <div >
                {#if actConfig.inputMethod == "torf"}
                    <h2>There are {rendAct.rn} {pvAry_img[0].pv_grid_color} boxes here.</h2> 
                {:else}
                    <h2>How many {pvAry_img[0].pv_grid_color} boxes are there?</h2>
                    <h3>Be sure to count the boxes in the grids as well.</h3> 
                {/if}
            <div >   
                <div>
                <!--for loop over the answer which is a random number-->
                {#each Array(pvAry_img_len) as _, i}
                    {#each Array(pvAry_img[i].pv_value) as _}
                        <img src={pvAry_img[i].pv_fileName}
                            align="middle"
                            width={pvAry_img[i].pv_img_size}
                            height=auto
                            style="padding-left: 10px; padding-bottom: 20px;"/>
                    {/each}
                {/each}
                </div>
            </div>    
        </div>  
            <br>    
            <Resp {rendAct} {actConfig} {tObj} on:redoTask={init_countObj} />
        </div>
    </div>
</div>
                