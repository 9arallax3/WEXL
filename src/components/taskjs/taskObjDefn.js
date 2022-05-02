// an object containing all the metadata (md) related to a 
// given activity. Listing of activities are given in
// activity repo json objects present in allComponents.js, 

import { ID_Gk_MA_A1a } from "../allCountingComp";

// allCountingComponents.js, allWEXLCountingComponents.js files etc.
export let taskObject = {
    id: 0,
    production_md: {        //activity creation work within FPIX, during product development
        lang: 'EN',
        client_region:'IN',
        validatedOn:"23-jun-21",
        production_ver:1,   //version of activity creation
        producedBy:"FPIX",
    },
    client_md: {            // metadata for clients, known after product completion, deployment/publishing 
        client_ver:1,       //version of packaging this activity for this client
        client_ID:'',
        client_name:"",
        packagedOn_date:"",
    },
    academic_md:{           // metadata known when client curricula mapping is done
        country: 'IN',
        curriculum:'CBSE',
        client:'',
        subject:'math',
        grade: 0,
        theme:'Number Sense',
        strand:'',
        substrand:'',
        LO_ID:0,
        MLO_ID:0,
        category: '',
        category_type: '',
        textBookRef:'',     //reference to where this is discussed in the textbook
    },
    task_info: {            //task or activity specific information, from external task repo
        task_id: 0,
        // question type: torf, textbox, select, oneMore, fewMore, oneLess, fewLess, seq1up, 
        // seq1down, beforeX, afterX, betweenXY
        question_type: 'select', 
        hint1: '',
        hint2: '',
        operandCount: 0,
        operandNum:[],
        operandNumArray: [],
        lowVal: 0,
        highVal: 0, 
        answer: 0, 
        operation: "+",
    },
    presntn_data: {         // presentation data, used for rendering; configurable parameters for task
        heading : '',
        question: '',
        img_prcnt: "10%",
        max_button: 10,
        img_type: 'pics',
        inputMethod: 'keypad', //torf, textbox, keypad, toypad, 3btn, 
    },
    cnsmp_data: {       // consumption data for this task; for analytics
        TotalUser:0,    // qnty of people who have consumed this task
    },
    perf_data: {        // performance data for this task; for analytics
        shortest_duration:0,
        longest_duration:0,
    },
};

export const question_type = ['torf', 'textbox', 'select', 'mix', 'more'];
export const resp_type =['torf', 'textbox', '3btn', 'keypad', 'toypad'];

//student choice object; contains user's choice for the task to execute
//passed on as student related choice information
export let sc_obj = {  
    taskIndex: null,
    collection: null,
    grade: null,
    subject: null,
    taskID: null,
  };

// data structure for storing some custom configuration 
// these are used to create unique settings for some tasks
export let custActConfig = {
    component_id: ID_Gk_MA_A1a, // id to lookup in the activity list array of tasks 
    question_type: "count", // 'torf', 'textbox', 'select', 'mix', 'more'
    prcntValue: "20%",  // some images need to be scaled up and down, this controls that scaling of rendered image
    img_type: "pics", // some tasks require objects, other pictures, others shapes, dots etc.
    inputMethod: "numpad", // tasks have various modes of inputs: toy keypad, number pad, textbox, select button...
    max_button: 10,  // in a keypad, there are different range of numbered butons, this specifies how many to render
};


// data structure used to maintain session information
// values that are computed during run time for the rendering and mgmt of a task 
// are managed here
export let renderedActivity = {
    ans_submit: false, // this value is used to trigger post submission activity like showing score, solution to student
    correct_answer:-1, 
    usrResp:-1, // this value is propogate from parent component to child; it carries the user's response on rendered task
    task_redo: false, // value bound between multiple components; lets prarent component know that student wants to redo activity 
    showNext: "none",   
    showPopUp:false,
    showSolution: false,
    img_rn: 0, // random number for first & primary image
    img2_rn:0, // random number for any images that are used beyond the primary 
    cnt_rn: 0, // random number used for primary counting value to be used in counting task
    rn: 0, // random second number used for special tasks that have a second number as in T/F questions
    label: '', // text to be shown in question stem string
    fn: '', // filename for the primary image
    fn2: '', // filename for the secondary image, used for TorF, mix type activities
    box_has_img: [], //a 10frame holder
    box2_has_img: [], //a second 10frame for use in "fewMore" question type
};


// data structure used for button based activities
// typically 3 buttons with images are used for student responses to tasks.
export let buttontnObject = {
    fn:'', //name of the image to be shown
    qnty: 0, //number of times the image to be shown
    correct_choice: false, //indication if this button is correct/wrong answer 
    label: '',
};
export const MAX3BTN = 3; // max number of button objects supported by activities 

export const MAX_LINE_WIDTH = 600;
// datastruct used for drawing numberlines graphically. Has a start/end L/R numerical value
// this is a constructor function for creating a new NumberLineObject.
export let number_line_object = {
    maxLineWidth: MAX_LINE_WIDTH, // draw-able length of the numberline in pixels
    L_val: 0, //values shown on the left side of the number line as a typical X axis
    R_val: 20, //values shown on the right side of the number line as a typical X axis
    question_type: "showAll", //hide, beforeX, afterX, betweenXY
    correct_answer:0, 
}; 

// datastructure used to draw the countable jumps on a numberline
// usually depicted either as a arc or a line with a direction
export let count_Line_Obj = {
    show_countLine:'false', //make this visible on numberline
    startVal:0, // where the count should begin
    endVal:0,   // where the count should end
    direction:"F", // F-forward, B-backward 
    color:'red', // red, green
    type:'arc', // arc, line, 
};

export const NUMBER_WORDS = [
    'zero', 
    'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

export const AddUnits =['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands', 'Millions'];
export const NumPos =['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
    