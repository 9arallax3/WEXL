import {act_list} from '../allComponents.js';
import {COUNTING_TASKS_LIST} from '../allCountingComp.js';
import {W_COUNTING_TASKS_LIST} from '../allWEXLcounting.js';
import { DEMO_TASKS_LIST } from '../allDemoComponents.js';
import { taskObject } from './taskObjDefn.js';
import { randmNumb } from './Utility/commUtil.js';

// the term task and activity are used interchangebly

// given an index ID the Task Info repo is searched and
// from that data a task related metadata is fetched & filled
// to create task object.
export function uploadTaskObjData(scObj) {
let inputId = scObj.taskIndex;
let collection_choice= scObj.collection;
let tObj = taskObject;
let id = inputId;
console.log('in FETCH: uploadTaskObjData: Task id:', id, 'collection:', collection_choice);

// identify the correct repo of activities & search for task in that repo only
let tActRepo = [];
switch(collection_choice) {
    case (1):  // first set
        tActRepo = act_list;
        if ((inputId < 0) | (inputId >= act_list.length) | (!inputId)) {
            id =0;
            console.log("ERROR: id within first array was out of bounds of repo index.")
        };
        console.log('working with first collection');
      break;
    case (2): // second set 134-154
        tActRepo = COUNTING_TASKS_LIST;
        if ((inputId < 0) | (inputId >= COUNTING_TASKS_LIST.length) | (!inputId)) {
            id =0;
            console.log("ERROR: id within Counting array was out of bounds of repo index.")
        };
        console.log("working with generic counting collection");
      break;
    case (3): //WEXL set 155-175+
        tActRepo = W_COUNTING_TASKS_LIST;
        if ((inputId < 0) | (inputId >= W_COUNTING_TASKS_LIST.length) | (!inputId)) {
            id =0;
            console.log("ERROR: id within WEXL array was out of bounds of repo index.")
        };
        console.log("working with WEXL collection");
      break;
    case (4): //DEMO for Z set 
      tActRepo = DEMO_TASKS_LIST;
      if ((inputId < 0) | (inputId >= DEMO_TASKS_LIST.length) | (!inputId)) {
          id =0;
          console.log("ERROR: id within DEMO array was out of bounds of repo index.")
      };
      console.log("working with DEMO collection");
    break;
    default:
        tActRepo = act_list;
        console.log("working with DEFAULT act_list collection");
  };

console.log('task array ID: ', id);
//initialize the task object to the task given by ID index
// in the task information repository
tObj.id = tActRepo[id].id;
//production metadata

//academic metadata
tObj.academic_md.grade = tActRepo[id].grade;
tObj.academic_md.theme = tActRepo[id].theme;
tObj.academic_md.strand= tActRepo[id].strand;
tObj.academic_md.substrand = tActRepo[id].substrand;
tObj.academic_md.LO_ID = tActRepo[id].LO_ID;
tObj.academic_md.MLO_ID = tActRepo[id].MLO_ID;
tObj.academic_md.category = tActRepo[id].category
tObj.academic_md.category_type = tActRepo[id].cat_type;
tObj.academic_md.textBookRef = tActRepo[id].textBookRef;

//task related information
tObj.task_info.task_id= tActRepo[id].act_ID;
tObj.task_info.question_type =tActRepo[id].question_type;
tObj.task_info.hint1 = tActRepo[id].hint1;
tObj.task_info.hint2 = tActRepo[id].hint2;
tObj.task_info.operandCount = tActRepo[id].operandCnt;
tObj.task_info.lowVal = tActRepo[id].lowValue;
tObj.task_info.highVal = tActRepo[id].highValue; 
tObj.task_info.answer = tActRepo[id].answer; 
tObj.task_info.operation = tActRepo[id].operation;

//rendering or presentation related information
tObj.presntn_data.heading = tActRepo[id].heading;
tObj.presntn_data.question = tActRepo[id].question;
tObj.presntn_data.img_prcnt = tActRepo[id].img_prcnt;
tObj.presntn_data.img_type = tActRepo[id].img_type;
tObj.presntn_data.inputMethod = tActRepo[id].inputMethod;
tObj.presntn_data.max_button = tActRepo[id].max_button;

tObj.task_info.answer =0;
for (let i = 0; i < tObj.task_info.operandCount; i++) {
    tObj.task_info.operandNum[i] = randmNumb(tObj.task_info.lowVal, tObj.task_info.highVal);
    tObj.task_info.operandNumArray[i] = tObj.task_info.operandNum[i].toString().split('');
    tObj.task_info.answer += tObj.task_info.operandNum[i];   
};
console.log('num: ', tObj.task_info.operandNum, 'answer: ', tObj.task_info.answer, 'numArray: ', tObj.task_info.operandNumArray);
console.log('uploadTaskObjData: Task id:', id, 'collection:', collection_choice);
return (tObj);
};



