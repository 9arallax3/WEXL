<script >
import {randmNumb, shuffleAry} from './taskjs/Utility/commUtil.js';
import { sc_obj, custActConfig, renderedActivity, buttontnObject, MAX3BTN, 
    number_line_object, count_Line_Obj, MAX_LINE_WIDTH, NUMBER_WORDS} from "./taskjs/taskObjDefn.js";
import {buildTaskObj} from './taskjs/taskObjBuilderj.js';

// various image repositories
import {LIC_IMG_REPO} from './jsfiles/Image_repo.js';
import {SHPCOLOR_REPO} from './jsfiles/shapesColor_repo.js';
import {DOTS_REPO} from './jsfiles/dots_repo.js';
import {BOX_SHPCOLOR_REPO, BOX_DOTS_REPO} from './jsfiles/box_with_shape_color.js';

// rendering routines... these are used for different visual outputs belonging to diff tasks
import Tenframe from './rendr_tenframe.svelte';
import MixImages from './rendr_mix.svelte';
import NormalRendering from './rendr_stdImgs.svelte';
import DrawNumbLine from './draw_numbLine.svelte';

// response handling component... after visual output, some user info is captured here
import Resp from './response.svelte';


//export let correct_answer = null;   // answer to be checked against as the teacher-correct answer
export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
const folderLoc ='images/shapes/'; // images, pics, shapes are located in various public folders... 
    
export let tObj = buildTaskObj(scObj, actConfig, rendAct); 

// for button based activities
let btnObj = buttontnObject;
let btnObjAry = []; //an array of button objects for use in button activities

// values used for displaying the number line
let numLineObj = number_line_object;
//values used in the counting on top of the std numberline
let countLineObj = count_Line_Obj;



function load_images_pics () {
    let ary = LIC_IMG_REPO;
    let len = LIC_IMG_REPO.length;

    rendAct.img_rn  = randmNumb(0, len-1);
    rendAct.img2_rn = randmNumb(0, len-1);
    if ((rendAct.img2_rn == rendAct.img_rn) && (rendAct.img2_rn < len-1)) {
        rendAct.img2_rn += 1;
    } else if (rendAct.img2_rn == (len-1)) {
        rendAct.img2_rn -= 1;
    };
    rendAct.label = ary[rendAct.img_rn]['label'];
    rendAct.fn = 'images/img/lic_ok/' + (ary[rendAct.img_rn]['img_name']);
    rendAct.fn2 = 'images/img/lic_ok/' + (ary[rendAct.img2_rn]['img_name']);
};

function load_images_tenframe() {
    let ary = BOX_SHPCOLOR_REPO
    let len = BOX_SHPCOLOR_REPO.length;

    rendAct.img_rn  = randmNumb(0, len-1);
    rendAct.img2_rn = randmNumb(0, len-1);
    if ((rendAct.img2_rn == rendAct.img_rn) && (rendAct.img2_rn < len-1)) {
        rendAct.img2_rn += 1;
    } else if (rendAct.img2_rn == (len-1)) {
        rendAct.img2_rn -= 1;
    };
    for (let i = 0; i < 10; i++) {
        if (i < rendAct.cnt_rn) {
            rendAct.box_has_img[i] = true;
        } else {
            rendAct.box_has_img[i] = false;
        }
    };
    rendAct.label = ary[rendAct.img_rn]['color']+'-'+ary[rendAct.img_rn]['shape']+'s';
    rendAct.fn = folderLoc + ary[rendAct.img_rn].img_fn;

    // for questions that have "fewMore" type, we need a second 10frame to be created
    // for use to check difference
    if (actConfig.question_type == "fewMore") {
        load_images_fewMore();
    } else if (actConfig.question_type == "fewLess") {
        load_images_fewLess();
    };
};

function load_images_dots_tenframe() {
    let ary = BOX_DOTS_REPO;
    let len = BOX_DOTS_REPO.length;

    rendAct.img_rn  = randmNumb(0, len-1);
    rendAct.img2_rn = randmNumb(0, len-1);
    if ((rendAct.img2_rn == rendAct.img_rn) && (rendAct.img2_rn < len-1)) {
        rendAct.img2_rn += 1;
    } else if (rendAct.img2_rn == (len-1)) {
        rendAct.img2_rn -= 1;
    };
    for (let i = 0; i < 10; i++) {
        if (i < rendAct.cnt_rn) {
            rendAct.box_has_img[i] = true;
        } else {
            rendAct.box_has_img[i] = false;
        }
    };
    rendAct.label = ary[rendAct.img_rn]['color']+' dots';
    rendAct.fn = folderLoc + ary[rendAct.img_rn].img_fn;

    // for questions that have "fewMore" type, we need a second 10frame to be created
    // for use to check difference
    if (actConfig.question_type == "fewMore") {
        load_images_fewMore();
    } else if (actConfig.question_type == "fewLess") {
        load_images_fewLess();
    };
};

function load_images_dots() {
    let ary = DOTS_REPO;
    let len = DOTS_REPO.length;

    rendAct.img_rn  = randmNumb(0, len-1);
    rendAct.img2_rn = randmNumb(0, len-1);
    if ((rendAct.img2_rn == rendAct.img_rn) && (rendAct.img2_rn < len-1)) {
        rendAct.img2_rn += 1;
    } else if (rendAct.img2_rn == (len-1)) {
        rendAct.img2_rn -= 1;
    };
    rendAct.label = ary[rendAct.img_rn]['color']+' dots';
    rendAct.fn = folderLoc + (ary[rendAct.img_rn]['img_fn']);
    rendAct.fn2 = folderLoc + (ary[rendAct.img2_rn]['img_fn']);
};

function load_images_shapes() {
    let ary = SHPCOLOR_REPO;
    let len = SHPCOLOR_REPO.length;

    rendAct.img_rn  = randmNumb(0, len-1);
    rendAct.img2_rn = randmNumb(0, len-1);
    if ((rendAct.img2_rn == rendAct.img_rn) && (rendAct.img2_rn < len-1)) {
        rendAct.rendAct.img2_rn += 1;
    } else if (rendAct.img2_rn == (len-1)) {
        rendAct.img2_rn -= 1;
    }
    rendAct.label = ary[rendAct.img_rn]['color']+'-'+ary[rendAct.img_rn]['shape']+'s';
    rendAct.fn = folderLoc + (ary[rendAct.img_rn]['img_fn']);
    rendAct.fn2 = folderLoc + (ary[rendAct.img2_rn]['img_fn']);
};


// this is for creating button based response options for specific type of tasks
// # of buttons shown to studnt is specified by MAX3BTN constant
// btnObjAry contains the buttons to display
// algorithm: first create a full list of all possible combinations, shuffle this list,
// slice it down to be only max buttons (minus one), push an answer into the button list 
// reshuffle the list and display
function load_images_threeBtn() {
    btnObjAry =[]; 
    console.log ('in threeBtn image loader function; btnAry-', btnObjAry)
    for (let i=0; i< tObj.task_info.highVal; i++) {
        let b = btnObj;
        b.label = rendAct.label;
        b.fn = rendAct.fn;
        b.qnty = i;
        b.correct_choice = false;
        btnObjAry = [...btnObjAry, {...b}]; 
    };  
    // remove the correct answer from the list as we will push it in again; avoid duplicate
    btnObjAry.splice(rendAct.cnt_rn,1);
    console.log('full btn obj array; btnAry-', btnObjAry);
    //take only the values that are between the high and low possible count values in the question stem
    btnObjAry = btnObjAry.slice(tObj.task_info.lowVal, tObj.task_info.highVal);
    shuffleAry(btnObjAry);
    btnObjAry = btnObjAry.slice(0, MAX3BTN-1); //take the randomized buttons which are 1 less than what is required
    console.log('sliced and shuffled without correct answer btn obj array; btnAry-', btnObjAry);
    let b = btnObj;
    b.label = rendAct.label;
    b.fn = rendAct.fn;
    b.qnty = rendAct.correct_answer;
    b.correct_choice = true;
    btnObjAry = [...btnObjAry, {...b}];  //push the correct answer to the button array
    shuffleAry(btnObjAry);
    console.log('shuffled with correct answer; btnAry-', btnObjAry);
};

function load_images_fewMore() {
    let gap = tObj.task_info.highVal - rendAct.cnt_rn;
    let box2_rn = 0;
    rendAct.box2_has_img = [...rendAct.box_has_img];
    console.log('inFewMore: highVal:', tObj.task_info.highVal, "cnt_rn:", rendAct.cnt_rn);
    if (gap > 0) {
        box2_rn = randmNumb(1, gap);
        
        // Fill the gap with more images. The addition of 
        // images is a random value that is "gap". A random
        // count within gap (which is within highVal) is "box2_rn"
        for (let i = rendAct.cnt_rn; i < (rendAct.cnt_rn+box2_rn); i++) {
            rendAct.box2_has_img[i] = true;
            console.log('i:',i);
        };
    };
    if (gap == 0) {
        rendAct.correct_answer = 0;
    } else {
        rendAct.correct_answer = box2_rn;
    };
    console.log('gap:', gap, "additional imgs:", box2_rn, "crct ans:", rendAct.correct_answer);
};

function load_images_fewLess() {
    let gap = rendAct.cnt_rn - tObj.task_info.lowVal;
    let box2_rn = 0;
    rendAct.box2_has_img = [...rendAct.box_has_img];
    console.log('inFewMore: lowVal:', tObj.task_info.lowVal, "cnt_rn:", rendAct.cnt_rn);
    if (gap > 0) {
        box2_rn = randmNumb(1, gap);
        
        // remove the images for the gap. The removal of 
        // images is a random value that is within "gap". A random
        // count within gap (which is above lowVal) is "box2_rn"
        for (let i = rendAct.cnt_rn; i >= (rendAct.cnt_rn-box2_rn); i--) {
            rendAct.box2_has_img[i] = false;
            console.log('i:',i);
        };
    };
    if (gap == 0) {
        rendAct.correct_answer = 0;
    } else {
        rendAct.correct_answer = box2_rn;
    };
    console.log('gap:', gap, "additional imgs:", box2_rn, "crct ans:", rendAct.correct_answer);
};

function setup_numberline() {
    // drawing the base numberline
    numLineObj.L_val = tObj.task_info.lowVal;
    numLineObj.R_val = tObj.task_info.highVal;
    numLineObj.question_type = actConfig.question_type; // can be hide, beforeX, afterX, betweenXY, showAll
    numLineObj.correct_answer = rendAct.correct_answer;
    numLineObj.maxLineWidth = MAX_LINE_WIDTH;

    // countable portion of the numberline
    countLineObj.show_countLine = true;
    countLineObj.startVal = tObj.task_info.lowVal;
    countLineObj.endVal = rendAct.correct_answer;
    countLineObj.type = 'arc';
    //countLineObj.color = "green";

    if (actConfig.img_type == "numberWords") {
        // this is used to display the digits in number words as well.
        numLineObj.question_type = "numberWords";
        countLineObj.show_countLine = false;
    } else if (actConfig.img_type == "numberline") {
        countLineObj.show_countLine = false;
    };
    console.log("in NumberLine", numLineObj);

};

function load_images() {
    // for larger couting, better to load shapes as we can fit more
    // in a page-width without loosing resolution.
    console.log('CountObj: inside loadImages');
    console.log('CNT: actConfig ', actConfig);
    if (actConfig.img_type == "pics") {
        load_images_pics();
    } else if (actConfig.img_type == "tenframe") {
        load_images_tenframe();
    } else if (actConfig.img_type == "dots-tenframe") {
        load_images_dots_tenframe();
    } else if (actConfig.img_type == "dots") {
        load_images_dots();
    } else if (actConfig.img_type == "shapes") {
        load_images_shapes();
    } else if (actConfig.img_type == "numberWords") {
        //most of the work is in the HTML markup, not in JS script
        setup_numberline();
    } else if (actConfig.img_type == "numberline") {
        //most of the work is in the HTML markup, not in JS script
        setup_numberline();
    };

    if (actConfig.inputMethod == "threeBtn") {
        load_images_threeBtn();
    };
};

function init_countObj() {
    console.log('CountObj: inside init CountObj task');
    rendAct.cnt_rn = randmNumb(tObj.task_info.lowVal, tObj.task_info.highVal);
    console.log('cnt_rn: ', rendAct.cnt_rn, ' actConfig: ', actConfig);
    // we could generate a second random number (for T/F questions) like this:
    // rn = Math.floor(Math.random() * tObj.presntn_data.highVal - tObj.presntn_data.lowVal) + tObj.presntn_data.lowVal;
    // however, it is best if we keep the random number close to the correct answer
    // so that T/F statements have a higher likelyhood of being true... and would force
    // the student to really investigate
    if (tObj.task_info.highVal - rendAct.cnt_rn < 5) {
        rendAct.rn = randmNumb(rendAct.cnt_rn-3, tObj.task_info.highVal);
    } else if (rendAct.cnt_rn - tObj.task_info.lowVal < 5) {
        rendAct.rn = randmNumb(tObj.task_info.lowVal, rendAct.cnt_rn+3);
    } else {
        rendAct.rn = randmNumb(rendAct.cnt_rn-3, rendAct.cnt_rn+3);
    };
    rendAct.correct_answer = rendAct.cnt_rn;
    console.log('CNT: actObj', actConfig);
    if (actConfig.inputMethod =="torf") {
        rendAct.correct_answer = (rendAct.rn == rendAct.cnt_rn);
    };

    if ((actConfig.img_type == "tenframe") && (actConfig.question_type == 'gap')) {
        rendAct.correct_answer = 10 - rendAct.cnt_rn; 
    };
    tObj.task_info.answer = rendAct.correct_answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;

    // upload a random image/pic/shape for couting
    load_images();
    rendAct.task_redo = false;
    console.log('CNT: rendered Act ', rendAct);

};
init_countObj();

//this function is handled by the three button response choice
// this is available for few tasks
function handleClick (n) {
    // the index to the button array element is returned.
    // need to find out what answer was indicated as image on that button
    // this information is stored in the button response array
    rendAct.usrResp = btnObjAry[n].qnty;
    console.log('correct ans:', rendAct.correct_answer, ' rendUsrResp:', rendAct.usrResp, 'n', n, 'qnty', btnObjAry[n].qnty);
};

</script>
            
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <p style="color:gray">{tObj.presntn_data.heading}</p>
        </div>
    
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            <div >
                {#if ((actConfig.inputMethod == "threeBtn") && (actConfig.question_type == "select"))}
                    <h2>Which has {rendAct.cnt_rn} {rendAct.label}?</h2> 
                {:else if ((actConfig.inputMethod == "toypad") && (actConfig.question_type == "gap"))}
                    <h3>How many more {rendAct.label} are needed to fill the grid?</h3> 
                {:else if (actConfig.question_type == "hide")}
                    <h3>What is the missing number in the numberline?</h3> 
                {:else if (actConfig.question_type == "beforeX")}
                    <h3>What is the number that comes before {rendAct.correct_answer+1}?</h3> 
                {:else if (actConfig.question_type == "afterX")}
                    <h3>What is the number that comes after {rendAct.correct_answer-1}?</h3> 
                {:else if (actConfig.question_type == "betweenXY")}
                    <h3>What is the number that comes between {rendAct.correct_answer-1} and {rendAct.correct_answer+1}?</h3> 
                {:else if (actConfig.question_type == "recognition") && (actConfig.img_type == "numberWords")}
                    <h3>How do you write this number using digits?</h3> 
                {:else}
                    <h2>Count the {rendAct.label}.</h2> 
                {/if}
            <div >   
            <div>
                <!--for loop over the answer which is a random number-->
                {#if (actConfig.img_type == "tenframe") | (actConfig.img_type == "dots-tenframe")}
                    <Tenframe {rendAct} {actConfig}/>
                {:else if (actConfig.img_type== "numberline")}
                    <DrawNumbLine {numLineObj} {countLineObj}/>
                {:else if (actConfig.img_type== "numberWords")}
                    <h2>{NUMBER_WORDS[rendAct.correct_answer]}</h2>
                {:else}
                    {#if ((actConfig.inputMethod =="mix") && (rendAct.correct_answer))}
                        <MixImages {rendAct} {actConfig}/>
                    {:else if (actConfig.inputMethod == "threeBtn")}
                        {#if tObj.task_info.question_type == "oneMore"}
                            {#each Array(rendAct.correct_answer -1) as _, i}
                                <img src={rendAct.fn} 
                                    align="middle" 
                                    width={actConfig.prcntValue}
                                    height=auto 
                                    style="padding-left: 10px;"/>
                            {/each}
                            <br><br>
                            <h3> Which of the below has one more? </h3>
                            {#each Array(MAX3BTN) as _, i}
                                <button type="button" class="btn toggle-btn" on:click={handleClick(i)}>
                                    {#each Array(btnObjAry[i].qnty) as _, j}
                                    <img src={btnObjAry[i].fn} 
                                        align="middle" 
                                        width={actConfig.prcntValue}
                                        height=auto 
                                        style="padding-left: 10px;"/>
                                    {/each}
                                </button>
                            {/each}
                        {:else if tObj.task_info.question_type == "oneLess"}
                            {#each Array(rendAct.correct_answer+1) as _, i}
                                <img src={rendAct.fn} 
                                    align="middle" 
                                    width={actConfig.prcntValue}
                                    height=auto 
                                    style="padding-left: 10px;"/>
                            {/each}
                            <br><br>
                            <h3> Which of the below has one less? </h3>
                            {#each Array(MAX3BTN) as _, i}
                                <button type="button" class="btn toggle-btn" on:click={handleClick(i)}>
                                    {#each Array(btnObjAry[i].qnty) as _, j}
                                    <img src={btnObjAry[i].fn} 
                                        align="middle" 
                                        width={actConfig.prcntValue}
                                        height=auto 
                                        style="padding-left: 10px;"/>
                                    {/each}
                                </button>
                            {/each}
                        {:else}
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
                        {/if}
                    {:else}
                        <NormalRendering {actConfig} {rendAct} />
                    {/if}
                {/if}
            </div>
        </div>    
    </div>  
        <br>    
        <Resp {rendAct} {actConfig} {tObj} on:redoTask={init_countObj} />
        </div>
    </div>
</div>
                