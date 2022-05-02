<script>
import { number_line_object, count_Line_Obj, NUMBER_WORDS } from "./taskjs/taskObjDefn";


export let numLineObj = number_line_object;
let vertLineObj ={
    id:null,
    label:0,
    position:0,
};
let vertLinePosAry =[];

//values used in the counting on top of the std numberline
export let countLineObj = count_Line_Obj;

function calcVertPosition () {
    // calc the numeric count gap between the right hand side number and the 
    // left one on the number line. That gap count is the qnty of #s to show on 
    // the numberline.
    let gap = Math.abs(numLineObj.R_val - numLineObj.L_val) +1; //absolute difference between the two end points on the numberline
    for (let i = 0; i < gap; i++) {
        let vlp = vertLineObj; // build a tickmark object and push into the array of tickmarks for numberline
        vlp.id = i;
        vlp.label = numLineObj.L_val+i;
        vlp.position = (numLineObj.maxLineWidth / (gap + 1)) * (i + 1);
        vertLinePosAry = [...vertLinePosAry, {...vlp}]; //push into array
    }; 
};


// this ensures that countable values are within the numberline boundaries
// if not, then countable values are reset to appropriate boundary limit
function check_boundry_conditions() {
    if ((countLineObj.startVal < numLineObj.L_val) || (countLineObj.startVal > numLineObj.R_val)) {
        countLineObj.startVal = numLineObj.L_val;
        console.log('ERROR in drawing NumberLine: left count point for arcs is not within the numberline boundaries.');
    };
    if ((countLineObj.endVal < numLineObj.L_val) || (countLineObj.endVal   > numLineObj.R_val)) {
        countLineObj.endVal = numLineObj.R_val;
        console.log('ERROR in drawing NumberLine: right count point for arcs is not within the numberline boundaries.');
    };
};

function init_drawLine() {
    console.log('Draw Numberline: numLine: ', numLineObj, ' countObj: ', countLineObj);
    check_boundry_conditions();
    calcVertPosition();
};
init_drawLine();

</script>

<div>
<svg height="80" width="{numLineObj.maxLineWidth}"> 
    <defs>
        <marker id='arrow-grey' 
            markerWidth="10" markerHeight="10" 
            refX="0" refY="3" 
            orient="auto-start-reverse" 
            markerUnits="strokeWidth" 
            viewBox="0 0 20 20">
            <path d="M0,0 L0,6 L9,3 z" fill="grey" />
        </marker>
        <marker id='arrow-green' 
            markerWidth="10" markerHeight="10" 
            refX="0" refY="3" 
            orient="auto-start-reverse" 
            markerUnits="strokeWidth" 
            viewBox="0 0 20 20">
            <path d="M0,0 L0,6 L9,3 z" fill="green" />
        </marker>
        <marker id='arrow-red' 
            markerWidth="10" markerHeight="10" 
            refX="0" refY="3" 
            orient="auto-start-reverse" 
            markerUnits="strokeWidth" 
            viewBox="0 0 20 20">
            <path d="M0,0 L0,6 L9,3 z" fill="red" />
        </marker>
    </defs>

    <line class="line line-hour" 
        x1="10" y1="40" x2={numLineObj.maxLineWidth-10} y2="40" 
        marker-start="url(#arrow-grey)" 
        marker-end="url(#arrow-grey)" 
        fill="none"
        stroke="grey"
        stroke-width="2"
    />
                    
    {#each vertLinePosAry as vlp,i} 
        {#if countLineObj.show_countLine}
            {#if (countLineObj.startVal  <= (numLineObj.L_val+i))  && ((numLineObj.L_val+i) <= (countLineObj.endVal-1))}
                <!-- arcs or jumps shown on top of number line to indicate counting-->
                {#if countLineObj.type == 'arc'}
                    <text x="{vlp.position + (vertLinePosAry[0].position / 10)} " y="10" fill="red">+1</text>
                    <path d="M {vlp.position} 25 q 17 -20 {vertLinePosAry[0].position-10} 0" 
                        stroke="red" 
                        stroke-width="2" 
                        fill="none" 
                        marker-end="url(#arrow-red)" 
                    />
                <!-- lines or jumps shown on top of number line to indicate backward / subtraction counting-->
                {:else if countLineObj.type == 'line'}
                    <text x="{vlp.position + (vertLinePosAry[0].position / 5)} " y="20" fill="green">-1</text>
                    <path d="M {vlp.position + (vertLinePosAry[0].position/5)} 25 h{vertLinePosAry[0].position-10}" 
                        stroke="green" 
                        stroke-width="3" 
                        fill="none" 
                        marker-start="url(#arrow-green)" 
                    />
                {/if}
            {/if}
        {/if}


        <!-- vertical divisions on numberline with text indicating value-->
        <polyline 
            points="{vlp.position},35  {vlp.position} 50"  
            fill="none"
            stroke="grey"
            stroke-width="2"
        /> 
        {#if ((numLineObj.question_type == "hide") && (vlp.label == numLineObj.correct_answer))}
            <text x="{vlp.position -6}" y="70" fill="grey">__</text>
        {:else if (numLineObj.question_type == "numberWords")}
            <text x="{vlp.position -6}" y="65" fill="grey">{vlp.label}</text>
            <text x="{vlp.position -10}" font-size="smaller" y="80" fill="grey">{NUMBER_WORDS[vlp.label]}</text>
        {:else}
            <text x="{vlp.position -6}" y="70" fill="grey">{vlp.label}</text>
        {/if}             
    {/each}           
</svg>
</div>


