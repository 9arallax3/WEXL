<script>
import { uploadTaskObjData} from '../taskjs/taskDataFetch.js';
import {buildTaskObj} from '../taskjs/taskObjBuilderj.js';
import {ID_G1_MA_E1b} from '../allComponents.js';
import {randomCorrect, randomWrong} from '../taskjs/taskResp_repo.js';
import AddSolnDetails from './ReusableComponent/AdditionSolution.svelte';

let usrResp;
let showNext = "none";   
let showPopUp;
let showSolution= false;    

function CheckAnswer(){
    showNext = "inline-block";
    if (usrResp == tObj.presntn_data.answer) {
        showPopUp = randomCorrect();
    } else {
        showSolution = true;
        showPopUp = randomWrong();                
    }; 
};
     

let tObj = buildTaskObj();
function init_task() {
    tObj.presntn_data.answer = null;
    tObj.presntn_data.showSolution = false;
    tObj.presntn_data.showNext = 'none';

    // need to get and pass the scObj
    tObj = uploadTaskObjData(ID_G1_MA_E1b);
    usrResp=null;
};
init_task();
 </script>
 
 <style>
 
 </style>
 
 
 
<div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <h2 class = "text-center display-4 mb-0">{tObj.presntn_data.heading}</h2>
        </div>
    
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            <div >
            <h4>{tObj.presntn_data.question}</h4>     
            <div >   
                <table width="100">
                    {#each tObj.presntn_data.operandArray as col, i }                        
                        {#if i == (tObj.presntn_data.operandArray.length - 1) }
                        <tr>
                            <td align="right"><span style="margin-right: 20px">{tObj.presntn_data.operation}</span>{col} </td>
                        </tr>
                        {:else}
                        <tr>
                            <td align="right">{col} </td>
                        </tr>
                        {/if}
                    {/each}                  
                </table>
                <hr style="width:100px;text-align:left;margin-left:5px;border: 1px solid">
                <input class='input-user'  type="text" style="margin-left: 5px;" bind:value="{usrResp}" maxlength=7>  
                <h6>answer {tObj.presntn_data.answer}</h6>
            </div>    
        </div>  
            
        <div>
            <h5 style=" display: {showNext};" class="mt-5">{showPopUp}</h5>          
        </div>

        <AddSolnDetails 
            num_qnty={tObj.presntn_data.operandCount} 
            usr_resp={usrResp} 
            num={tObj.presntn_data.operandArray} 
            ans_submit={showSolution}
        />

        <div class="mt-3">
            <button type="button" class="btn toggle-btn" on:click={CheckAnswer}>Submit</button>
            <button type="button" class="btn toggle-btn" on:click={init_task}>Rerun</button>
            <button type="button" class="btn toggle-btn" >Exit This Skill</button>          
        </div>

        </div>
    </div>
</div>
 