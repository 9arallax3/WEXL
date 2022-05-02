//************************************
// Counting related component imports
//
//************************************
// Grade k - counting 0-5
import Gk_MA_A1 from "./Gk_MA_A1.svelte";
import Gk_MA_A1a from "./Gk_MA_A1a.svelte"; // select from number pad
import Gk_MA_A1b from "./Gk_MA_A1b.svelte"; // input directly
import Gk_MA_A1c from "./Gk_MA_A1c.svelte"; // True / false
import Gk_MA_A1d from "./Gk_MA_A1d.svelte"; // mix input

// Grade k - counting 0-10
import Gk_MA_A1a2 from "./Gk_MA_A1a2.svelte";
import Gk_MA_A1b2 from "./Gk_MA_A1b2.svelte";
import Gk_MA_A1c2 from "./Gk_MA_A1c2.svelte";
import Gk_MA_A1d2 from "./Gk_MA_A1d2.svelte";

// Grade 1 - counting 0-15
import G1_MA_A1a from "./G1_MA_A1a.svelte";
import G1_MA_A1b from "./G1_MA_A1b.svelte";
import G1_MA_A1c from "./G1_MA_A1c.svelte";
import G1_MA_A1d from "./G1_MA_A1d.svelte";

// Grade 1 - counting 0-20
import G1_MA_A1a2 from "./G1_MA_A1a2.svelte";
import G1_MA_A1b2 from "./G1_MA_A1b2.svelte";
import G1_MA_A1c2 from "./G1_MA_A1c2.svelte";
import G1_MA_A1d2 from "./G1_MA_A1d2.svelte";

// Grade 1 - counting 20-50
import G1_MA_A1e from "./G1_MA_A1e.svelte";
import G1_MA_A1f from "./G1_MA_A1f.svelte";

// Grade 2 - counting 0-200
import G2_MA_A1a from "./G2_MA_A1a.svelte";
import G2_MA_A1b from "./G2_MA_A1b.svelte";

//************************************
// Counting related Identifiers
//************************************
export const COUNTING_TASK_START_ID = 0; //134+1;

// Grade k - counting range 0-5
export const ID_Gk_MA_A1a = COUNTING_TASK_START_ID; //objects, range:0-10, keypad
export const ID_Gk_MA_A1b = ID_Gk_MA_A1a + 1; //objects, range:0-10, textbox
export const ID_Gk_MA_A1c = ID_Gk_MA_A1b + 1; //objects, range:0-5, torf
export const ID_Gk_MA_A1d = ID_Gk_MA_A1c + 1; //objects, mix, range:0-5, textbox

// Grade k - counting range 0-10
export const ID_Gk_MA_A1a2 = ID_Gk_MA_A1d +1; //objects, range:0-10, keypad
export const ID_Gk_MA_A1b2 = ID_Gk_MA_A1a2 +1; //objects, range:0-10, textbox
export const ID_Gk_MA_A1c2 = ID_Gk_MA_A1b2 +1; //objects, range:0-10, torf
export const ID_Gk_MA_A1d2 = ID_Gk_MA_A1c2 +1; //objects, mix, range:0-10, textbox

// Grade 1 - counting range 0-15
export const ID_G1_MA_A1a = ID_Gk_MA_A1d2 +1; //shapes, range:0-15, keypad
export const ID_G1_MA_A1b = ID_G1_MA_A1a +1; //grid, range:0-15, keypad
export const ID_G1_MA_A1c = ID_G1_MA_A1b +1; //grid, range:0-15, torf
export const ID_G1_MA_A1d = ID_G1_MA_A1c +1; //grid, range:0-15, textbox

// Grade 1 - counting range 0-20
export const ID_G1_MA_A1a2 = ID_G1_MA_A1d +1; //shapes, range:0-20, keypad
export const ID_G1_MA_A1b2 = ID_G1_MA_A1a2 +1; //grid, range:0-20, keypad 
export const ID_G1_MA_A1c2 = ID_G1_MA_A1b2 +1; //grid, range:0-20, torf
export const ID_G1_MA_A1d2 = ID_G1_MA_A1c2 +1; //shapes, mix, range:0-20, textbox 

// Grade 1 - counting range 20-50
export const ID_G1_MA_A1e = ID_G1_MA_A1d2 +1; //grid, range:20-50, textbox
export const ID_G1_MA_A1f = ID_G1_MA_A1e +1;  //grid, range:20-50, torf

// Grade 2 - counting 0-200
export const ID_G2_MA_A1a = ID_G1_MA_A1f +1;  //grid, range:0-200, textbox
export const ID_G2_MA_A1b = ID_G2_MA_A1a +1;  //grid, range:0-200, torf

export const COUNTING_TASK_END_ID = ID_G2_MA_A1b;

//******************************* */
// Activities List 
// all counting components only
//
//******************************* */
export const COUNTING_TASKS_LIST = [
// Grade k - counting range 0-5
  {
    id: ID_Gk_MA_A1a,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1a,
    act_text: "Practice Counting Upto 5",
    comp: Gk_MA_A1a,
    lowValue: 0,
    highValue: 5,
    operandCnt: 1,
    heading: 'GENERIC:Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_Gk_MA_A1b,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1b,
    act_text: "Practice Counting Upto 5",
    comp: Gk_MA_A1b,
    lowValue: 0,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "textbox",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_Gk_MA_A1c,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1c,
    act_text: "Practice Counting Upto 5",
    comp: Gk_MA_A1c,
    lowValue: 0,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "torf",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_Gk_MA_A1d,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1d,
    act_text: "Practice Counting Upto 5",
    comp: Gk_MA_A1d,
    lowValue: 0,
    highValue: 5,
    operandCnt: 1,
    heading: 'Pratice counting upto 5',
    question: 'Count these ',
    question_type: 'mix',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
// Grade k - counting range 0-10
  {
    id: ID_Gk_MA_A1a2,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1a2,
    act_text: "Practice Counting Upto 10",
    comp: Gk_MA_A1a2,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_Gk_MA_A1b2,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1b2,
    act_text: "Practice Counting Upto 10",
    comp: Gk_MA_A1b2,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
  id: ID_Gk_MA_A1c2,
  grade: -1,
  subject: "math",
  cat: "Counting",
  cat_type: "A",
  act_ID: ID_Gk_MA_A1c2,
  act_text: "Practice Counting Upto 10",
  question_type: 'T/F',
  comp: Gk_MA_A1c2,
  lowValue: 0,
  highValue: 10,
  operandCnt: 1,
  heading: 'Practice counting upto 10',
  question: 'Count these ',
  question_type: 'select',
  img_prcnt:"20%",
  img_type: "pics",
  inputMethod: "torf",
  max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_Gk_MA_A1d2,
    grade: -1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_Gk_MA_A1d2,
    act_text: "Practice Counting Upto 10",
    question_type: 'FIB',
    comp: Gk_MA_A1d2,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Pratice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "mix",
    max_button: 11, //includes 0 in count upto 10
  },

// Grade 1 - couting range 0-15
  {
    id: ID_G1_MA_A1a,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1a,
    act_text: "Practice Counting Upto 15",
    question_type: 'FIB',
    comp: G1_MA_A1a,
    lowValue: 0,
    highValue: 15,
    operandCnt: 1,
    heading: 'Pratice counting upto 15',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1b,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1b,
    act_text: "Practice Counting Upto 15",
    question_type: 'FIB',
    comp: G1_MA_A1b,
    lowValue: 0,
    highValue: 15,
    operandCnt: 1,
    heading: 'Pratice counting upto 15',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1c,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1c,
    act_text: "Practice Counting Upto 15",
    question_type: 'torf',
    comp: G1_MA_A1c,
    lowValue: 0,
    highValue: 15,
    operandCnt: 1,
    heading: 'Pratice counting upto 15',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1d,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1d,
    act_text: "Practice Counting Upto 15",
    question_type: 'FIB',
    comp: G1_MA_A1d,
    lowValue: 0,
    highValue: 15,
    operandCnt: 1,
    heading: 'Pratice counting upto 15',
    question: 'Count these ',
  },

// Grade 1 - couting range 0-20
  {
    id: ID_G1_MA_A1a2,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1a2,
    act_text: "Practice Counting Upto 20",
    question_type: 'FIB',
    comp: G1_MA_A1a2,
    lowValue: 0,
    highValue: 20,
    operandCnt: 1,
    heading: 'Pratice counting upto 20',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1b2,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1b2,
    act_text: "Practice Counting Upto 20",
    question_type: 'FIB',
    comp: G1_MA_A1b2,
    lowValue: 0,
    highValue: 20,
    operandCnt: 1,
    heading: 'Pratice counting upto 20',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1c2,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1c2,
    act_text: "Practice Counting Upto 20",
    question_type: 'FIB',
    comp: G1_MA_A1c2,
    lowValue: 0,
    highValue: 20,
    operandCnt: 1,
    heading: 'Pratice counting upto 20',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1d2,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1d2,
    act_text: "Practice Counting Upto 20",
    question_type: 'FIB',
    comp: G1_MA_A1d2,
    lowValue: 0,
    highValue: 20,
    operandCnt: 1,
    heading: 'Pratice counting upto 20',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1e,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1e,
    act_text: "Practice counting from 20 upto 50",
    question_type: 'textbox',
    comp: G1_MA_A1e,
    lowValue: 20,
    highValue: 50,
    operandCnt: 1,
    heading: 'Pratice counting from 20 upto 50',
    question: 'Count these ',
  },
  {
    id: ID_G1_MA_A1f,
    grade: 1,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G1_MA_A1f,
    act_text: "Practice counting from 20 upto 50",
    question_type: 'torf',
    comp: G1_MA_A1f,
    lowValue: 20,
    highValue: 50,
    operandCnt: 1,
    heading: 'Pratice counting from 20 upto 50',
    question: 'Count these ',
  },
// **************************************
//   Grade 2
// ************************************** */  

// Grade 2 - couting range 0-200
  {
    id: ID_G2_MA_A1a,
    grade: 2,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G2_MA_A1a,
    act_text: "Practice counting upto 200",
    question_type: 'textbox',
    comp: G2_MA_A1a,
    lowValue: 0,
    highValue: 200,
    operandCnt: 1,
    heading: 'Pratice counting upto 200',
    question: 'Count these ',
  },
  {
    id: ID_G2_MA_A1b,
    grade: 2,
    subject: "math",
    cat: "Counting",
    cat_type: "A",
    act_ID: ID_G2_MA_A1b,
    act_text: "Practice counting upto 200",
    question_type: 'torf',
    comp: G2_MA_A1b,
    lowValue: 0,
    highValue: 200,
    operandCnt: 1,
    heading: 'Pratice counting upto 200',
    question: 'Count these ',
  },
  // may not be accessing this old-task
  {
    id: 0,
    grade: 1,
    subject: "math",
    cat: "counting and number patterns",
    cat_type: "A",
    act_ID: 1,
    act_text: "counting review - upto 10",
    comp: Gk_MA_A1,
  },
];