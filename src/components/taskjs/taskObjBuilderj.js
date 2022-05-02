import { uploadTaskObjData } from "./taskDataFetch.js";
import { taskObject } from "./taskObjDefn.js";
    
export function buildTaskObj(scObj, actConfig, rendAct) {
    let tObj = taskObject;
    console.log('Build Task Obj- scObj: ', scObj);
    rendAct.answer = null;
    rendAct.showSolution = false;
    rendAct.showNext = 'none';
    tObj = uploadTaskObjData(scObj);

    // how an activity must be rendered
    rendAct.usrResp =null;
    rendAct.ans_submit = false;
    rendAct.cnt_rn = tObj.task_info.lowVal;
    
    // custom configuration of an activity
    actConfig.question_type = tObj.task_info.question_type;
    actConfig.max_button = tObj.presntn_data.max_button;
    actConfig.inputMethod = tObj.presntn_data.inputMethod;
    actConfig.img_type = tObj.presntn_data.img_type;
    actConfig.prcntValue = tObj.presntn_data.img_prcnt;

    console.log('BuildTaskObj: tobj low: ', tObj.task_info.lowVal, ' highval:', tObj.task_info.highVal);
    console.log('BuildTaskObj: rendAct.cnt_rn:', rendAct.cnt_rn);
    console.log('BuildTaskObj: tobj: ', tObj, 'rndAct: ', rendAct,'actConfig: ', actConfig);

    return tObj;
};
