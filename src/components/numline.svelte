<script>
import {randmNumb} from './taskjs/Utility/commUtil.js';
import { sc_obj, custActConfig, renderedActivity, number_line_object, count_Line_Obj} from "./taskjs/taskObjDefn.js";
import {buildTaskObj} from './taskjs/taskObjBuilderj.js';
import {randomArrayNumbers} from './taskjs/Utility/randomNumGen.js';
import DrawNumbLine from './draw_numbLine.svelte';

// response handling component... after visual output, some user info is captured here
import Resp from './response.svelte';

//export let correct_answer = null;   // answer to be checked against as the teacher-correct answer
export let scObj = sc_obj; // data structure for user input choices
export let actConfig = custActConfig; // data structure for custom configuration of a given task
export let rendAct = renderedActivity; // data sctruct for rendering a given task
const folderLoc ='images/shapes/'; // images, pics, shapes are located in various public folders... 
    
export let tObj = buildTaskObj(scObj, actConfig, rendAct); 

export let task01 = {
  heading: "Addition sentences using number lines - sums up to 18",
  question: "Which addition sentence does this model show?",
  questionValue : 0,
  valueArray: [],
  answer: 0,
  randomAnswer: 0,
  columns: 0,
  solutionArray : [],
  verticalLinePos : [],
  lineMaxWidth : 0,
};

// values used for displaying the number line
let numLineObj = number_line_object;
//values used in the counting on top of the std numberline
let countLineObj = count_Line_Obj;

const lineWidth = 600;
const findInMaxNumber = 18;

function init_numbline() {
    console.log('numLineObj Init: inside ');
    rendAct.cnt_rn = randmNumb(tObj.task_info.lowVal, tObj.task_info.highVal);
    console.log('cnt_rn: ', rendAct.cnt_rn, ' actConfig: ', actConfig);

    rendAct.correct_answer = rendAct.cnt_rn;
    console.log('CountSequence: actObj', actConfig);
    tObj.task_info.answer = rendAct.correct_answer;
    rendAct.usrResp=null;
    rendAct.ans_submit = false;
    rendAct.task_redo = false;
    console.log('CountSequence: rendered Act ', rendAct);
    task01 = taskOne();

    // drawing the base numberline
    numLineObj.L_val = 7;
    numLineObj.R_val = 13;
    numLineObj.maxLineWidth = 600;

    // countable portion of the numberline
    countLineObj.show_countLine = true;
    countLineObj.startVal = 8;
    countLineObj.endVal = 9;
    countLineObj.type = 'line';
    countLineObj.color = "green";
};
init_numbline();

function taskOne() {  
  console.log ("TaskOne: inside");

  task01.randomAnswer = [];
  task01.valueArray = [];
  task01.solutionArray = [];
  task01.columns = 2;

  task01.lineMaxWidth = lineWidth;
  
  for (let i = 0; i < findInMaxNumber; i++) {
    task01.verticalLinePos[i] = (lineWidth / (findInMaxNumber + 1)) * (i + 1);
      } 


  for (let i = 1; i < findInMaxNumber; i++) {
    for (let j = 1; j < findInMaxNumber; j++) {      
       
        if((i+j) < findInMaxNumber){
          let a = i+"+"+j+"="+(i+j);
          task01.randomAnswer.push(a);   
        }  
    }
  }
  task01.valueArray = randomArrayNumbers(4,task01.randomAnswer.length,0,task01.randomAnswer);
  let tempN = Math.floor(Math.random() * task01.valueArray.length );
  task01.answer =  task01.valueArray[tempN];
  
  console.log("taskO1:", task01);
  let tempnum = task01.answer.split('=');
  task01.solutionArray =  tempnum[0].split('+').map(function(item) {
    return parseInt(item, 10);
    });
  
    console.log("taskO1 with answers: ", task01);
    while(task01.solutionArray[0] > task01.solutionArray[1]){
      task01.valueArray = randomArrayNumbers(4,task01.randomAnswer.length,0,task01.randomAnswer);
      tempN = Math.floor(Math.random() * task01.valueArray.length );
      task01.answer =  task01.valueArray[tempN];   
      let tempnum = task01.answer.split('=');
      task01.solutionArray =  tempnum[0].split('+').map(function(item) {
        return parseInt(item, 10);
    });      
    }
    task01.answer =  tempN; 
    console.log("taskO1 with solution: ", task01);
  return task01;
};

</script>

 <div class="container mt-5">
    <div class="shadow-sm  bg-white rounded">
        <div class = "bg-info rounded-top p-2">
            <p style="color:gray">{tObj.presntn_data.heading}</p>
        </div>
        
        <div class = " bg-light rounded-bottom p-3 pb-5 pt-5">         
            <h3> something shown in numLineObj</h3>
        </div>
        <br>  

        <DrawNumbLine {numLineObj} {countLineObj}/>


        <div>
            <Resp {rendAct} {actConfig} on:redoTask={init_numbline} />
        </div>
    </div>
</div>
                