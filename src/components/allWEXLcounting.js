//************************************
// Counting related component in WEXL
//
//************************************
// Grade k - counting 0-3
import { COUNTING_TASK_END_ID } from "./allCountingComp";
import W_L_MA_B1 from "../components/WEXL/LKG/W_L_MA_B1.svelte"; // objects; select from number pad
import W_L_MA_B2 from "../components/WEXL/LKG/W_L_MA_B2.svelte"; // objects; select from number pad
import W_L_MA_B3 from "../components/WEXL/LKG/W_L_MA_B3.svelte"; // dots; select from number pad
import W_L_MA_B4 from "../components/WEXL/LKG/W_L_MA_B4.svelte"; // shapes; select from number pad
import W_L_MA_B5 from "../components/WEXL/LKG/W_L_MA_B5.svelte"; // dots in tenframe; select from number pad
import W_L_MA_B6 from "../components/WEXL/LKG/W_L_MA_B6.svelte"; // shows number / dnd in tenframe; select from number pad
import W_L_MA_B7 from "../components/WEXL/LKG/W_L_MA_B7.svelte"; // show buttons & a challenge number; select correct # button

// Grade k - counting 0-5
import W_L_MA_C1 from "../components/WEXL/LKG/W_L_MA_C1.svelte"; // objects; select from number pad
import W_L_MA_C2 from "../components/WEXL/LKG/W_L_MA_C2.svelte"; // objects; select from number pad
import W_L_MA_C3 from "../components/WEXL/LKG/W_L_MA_C3.svelte"; // dots; select from number pad
import W_L_MA_C4 from "../components/WEXL/LKG/W_L_MA_C4.svelte"; // shapes; select from number pad
import W_L_MA_C5 from "../components/WEXL/LKG/W_L_MA_C5.svelte"; // dots in tenframe; select from number pad
import W_L_MA_C6 from "../components/WEXL/LKG/W_L_MA_C6.svelte"; // shows number / dnd in tenframe; select from number pad
import W_L_MA_C7 from "../components/WEXL/LKG/W_L_MA_C7.svelte"; // show buttons & a challenge number; select correct # button

// Grade k - counting 0-10
import W_L_MA_D1 from "../components/WEXL/LKG/W_L_MA_D1.svelte"; // objects; select from number pad
import W_L_MA_D2 from "../components/WEXL/LKG/W_L_MA_D2.svelte"; // objects; select from number pad
import W_L_MA_D3 from "../components/WEXL/LKG/W_L_MA_D3.svelte"; // dots; select from number pad
import W_L_MA_D4 from "../components/WEXL/LKG/W_L_MA_D4.svelte"; // shapes; select from number pad
import W_L_MA_D5 from "../components/WEXL/LKG/W_L_MA_D5.svelte"; // dots in tenframe; select from number pad
import W_L_MA_D6 from "../components/WEXL/LKG/W_L_MA_D6.svelte"; // shows number / dnd in tenframe; select from number pad
import W_L_MA_D7 from "../components/WEXL/LKG/W_L_MA_D7.svelte"; // show buttons & a challenge number; select correct # button

// UKG activities - counting 0-3
import W_U_MA_A1 from "../components/WEXL/UKG/W_U_MA_A1.svelte"; 
import W_U_MA_A2 from "../components/WEXL/UKG/W_U_MA_A2.svelte"; 
import W_U_MA_A3 from "../components/WEXL/UKG/W_U_MA_A3.svelte"; 
import W_U_MA_A4 from "../components/WEXL/UKG/W_U_MA_A4.svelte"; 
import W_U_MA_A5 from "../components/WEXL/UKG/W_U_MA_A5.svelte"; 
import W_U_MA_A6 from "../components/WEXL/UKG/W_U_MA_A6.svelte"; 

// UKG activities - counting 0-5
import W_U_MA_B1 from "../components/WEXL/UKG/W_U_MA_B1.svelte"; 
import W_U_MA_B2 from "../components/WEXL/UKG/W_U_MA_B2.svelte"; 
import W_U_MA_B3 from "../components/WEXL/UKG/W_U_MA_B3.svelte"; 
import W_U_MA_B4 from "../components/WEXL/UKG/W_U_MA_B4.svelte"; 
import W_U_MA_B5 from "../components/WEXL/UKG/W_U_MA_B5.svelte"; 
import W_U_MA_B6 from "../components/WEXL/UKG/W_U_MA_B6.svelte"; 
import W_U_MA_B7 from "../components/WEXL/UKG/W_U_MA_B7.svelte"; 
import W_U_MA_B8 from "../components/WEXL/UKG/W_U_MA_B8.svelte"; 
import W_U_MA_B9 from "../components/WEXL/UKG/W_U_MA_B9.svelte"; 
import W_U_MA_B10 from "../components/WEXL/UKG/W_U_MA_B10.svelte"; 

// UKG activities - counting 0-10
import W_U_MA_C1 from "../components/WEXL/UKG/W_U_MA_C1.svelte"; 
import W_U_MA_C2 from "../components/WEXL/UKG/W_U_MA_C2.svelte"; 
import W_U_MA_C3 from "../components/WEXL/UKG/W_U_MA_C3.svelte"; 
import W_U_MA_C4 from "../components/WEXL/UKG/W_U_MA_C4.svelte"; 
import W_U_MA_C5 from "../components/WEXL/UKG/W_U_MA_C5.svelte"; 
import W_U_MA_C6 from "../components/WEXL/UKG/W_U_MA_C6.svelte"; 
import W_U_MA_C7 from "../components/WEXL/UKG/W_U_MA_C7.svelte"; 
import W_U_MA_C8 from "../components/WEXL/UKG/W_U_MA_C8.svelte"; 
import W_U_MA_C9 from "../components/WEXL/UKG/W_U_MA_C9.svelte"; 
import W_U_MA_C10 from "../components/WEXL/UKG/W_U_MA_C10.svelte"; 
import W_U_MA_C11 from "../components/WEXL/UKG/W_U_MA_C11.svelte"; 
import W_U_MA_C12 from "../components/WEXL/UKG/W_U_MA_C12.svelte"; 
import W_U_MA_C13 from "../components/WEXL/UKG/W_U_MA_C13.svelte"; 
import W_U_MA_C14 from "../components/WEXL/UKG/W_U_MA_C14.svelte"; 
import W_U_MA_C15 from "../components/WEXL/UKG/W_U_MA_C15.svelte"; 
import W_U_MA_C16 from "../components/WEXL/UKG/W_U_MA_C16.svelte"; 
import W_U_MA_C17 from "../components/WEXL/UKG/W_U_MA_C17.svelte"; 
import W_U_MA_C18 from "../components/WEXL/UKG/W_U_MA_C18.svelte"; 
import W_U_MA_C19 from "../components/WEXL/UKG/W_U_MA_C19.svelte"; 
import W_U_MA_C20 from "../components/WEXL/UKG/W_U_MA_C20.svelte"; 

//************************************
// Counting related Identifiers
//************************************
export const W_COUNTING_TASK_START_ID = 0; //COUNTING_TASK_END_ID+1;

// Grade L - counting range 0-3
export const ID_W_L_MA_B1 = W_COUNTING_TASK_START_ID; //objects, range:0-3, keypad
export const ID_W_L_MA_B2 = ID_W_L_MA_B1 +1; //objects, range:0-3, keypad
export const ID_W_L_MA_B3 = ID_W_L_MA_B2 +1; //dots, range:0-3, keypad
export const ID_W_L_MA_B4 = ID_W_L_MA_B3 +1; //shapes, range:0-3, keypad
export const ID_W_L_MA_B5 = ID_W_L_MA_B4 +1; //dots in tenframe, range:0-3, keypad
export const ID_W_L_MA_B6 = ID_W_L_MA_B5 +1; //DnD numbers in tenframe, range:0-3, keypad
export const ID_W_L_MA_B7 = ID_W_L_MA_B6 +1; //select a button, range:0-3, keypad

// Grade L - counting range 0-5
export const ID_W_L_MA_C1 = ID_W_L_MA_B7 +1; //objects, range:0-3, keypad
export const ID_W_L_MA_C2 = ID_W_L_MA_C1 +1; //objects, range:0-3, keypad
export const ID_W_L_MA_C3 = ID_W_L_MA_C2 +1; //dots, range:0-3, keypad
export const ID_W_L_MA_C4 = ID_W_L_MA_C3 +1; //shapes, range:0-3, keypad
export const ID_W_L_MA_C5 = ID_W_L_MA_C4 +1; //dots in tenframe, range:0-3, keypad
export const ID_W_L_MA_C6 = ID_W_L_MA_C5 +1; //DnD numbers in tenframe, range:0-3, keypad
export const ID_W_L_MA_C7 = ID_W_L_MA_C6 +1; //select a button, range:0-3, keypad

// Grade L - counting range 0-10
export const ID_W_L_MA_D1 = ID_W_L_MA_C7 +1; //objects, range:0-3, keypad
export const ID_W_L_MA_D2 = ID_W_L_MA_D1 +1; //objects, range:0-3, keypad
export const ID_W_L_MA_D3 = ID_W_L_MA_D2 +1; //dots, range:0-3, keypad
export const ID_W_L_MA_D4 = ID_W_L_MA_D3 +1; //shapes, range:0-3, keypad
export const ID_W_L_MA_D5 = ID_W_L_MA_D4 +1; //dots in tenframe, range:0-3, keypad
export const ID_W_L_MA_D6 = ID_W_L_MA_D5 +1; //DnD numbers in tenframe, range:0-3, keypad
export const ID_W_L_MA_D7 = ID_W_L_MA_D6 +1; //select a button, range:0-3, keypad

// Grade U - counting range 0-3
export const ID_W_U_MA_A1 = ID_W_L_MA_D7 +1; //pics, range:0-3, keypad
export const ID_W_U_MA_A2 = ID_W_U_MA_A1 +1; //objects, range:0-3, keypad
export const ID_W_U_MA_A3 = ID_W_U_MA_A2 +1; //drag and drop, range:0-3, keypad
export const ID_W_U_MA_A4 = ID_W_U_MA_A3 +1; //dots in tenframe, range:0-3, keypad
export const ID_W_U_MA_A5 = ID_W_U_MA_A4 +1; //drag and drop, range:0-3, keypad
export const ID_W_U_MA_A6 = ID_W_U_MA_A5 +1; //3 buttons, range:0-3, keypad

// Grade U - counting range 0-5
export const ID_W_U_MA_B1 = ID_W_U_MA_A6 +1; //pics, range:0-5, keypad
export const ID_W_U_MA_B2 = ID_W_U_MA_B1 +1; //objects, range:0-5, keypad
export const ID_W_U_MA_B3 = ID_W_U_MA_B2 +1; //drag and drop, range:0-5, keypad
export const ID_W_U_MA_B4 = ID_W_U_MA_B3 +1; //dots in tenframe, range:0-5, keypad
export const ID_W_U_MA_B5 = ID_W_U_MA_B4 +1; //drag and drop, range:0-5, keypad
export const ID_W_U_MA_B6 = ID_W_U_MA_B5 +1; //3 buttons, range:0-5, keypad
export const ID_W_U_MA_B7 = ID_W_U_MA_B6 +1; //3 buttons one more, range:0-5, keypad
export const ID_W_U_MA_B8 = ID_W_U_MA_B7 +1; //textbox few more, range:0-5, keypad
export const ID_W_U_MA_B9 = ID_W_U_MA_B8 +1; //3 buttons one less, range:0-5, keypad
export const ID_W_U_MA_B10 = ID_W_U_MA_B9 +1; //textbox few more, range:0-5, keypad

// Grade U - counting range 0-10
export const ID_W_U_MA_C1 = ID_W_U_MA_B10 +1; //pics, range:0-10, keypad
export const ID_W_U_MA_C2 = ID_W_U_MA_C1 +1; //objects, range:0-10, keypad
export const ID_W_U_MA_C3 = ID_W_U_MA_C2 +1; //drag and drop, range:0-10, keypad
export const ID_W_U_MA_C4 = ID_W_U_MA_C3 +1; //dots in tenframe, range:0-10, keypad
export const ID_W_U_MA_C5 = ID_W_U_MA_C4 +1; //drag and drop, range:0-10, keypad
export const ID_W_U_MA_C6 = ID_W_U_MA_C5 +1; //3 buttons, range:0-10, keypad
export const ID_W_U_MA_C7 = ID_W_U_MA_C6 +1; //3 buttons one more, range:0-10, keypad
export const ID_W_U_MA_C8 = ID_W_U_MA_C7 +1; //textbox few more, range:0-10, keypad
export const ID_W_U_MA_C9 = ID_W_U_MA_C8 +1; //3 buttons one less, range:0-10, keypad
export const ID_W_U_MA_C10 = ID_W_U_MA_C9 +1; //textbox few more, range:0-10, keypad
export const ID_W_U_MA_C11 = ID_W_U_MA_C10 +1; //3 buttons one more, range:0-10, keypad
export const ID_W_U_MA_C12 = ID_W_U_MA_C11 +1; //textbox few more, range:0-10, keypad
export const ID_W_U_MA_C13 = ID_W_U_MA_C12 +1; //skip1up, next in sequence, range:0-10, textbox
export const ID_W_U_MA_C14 = ID_W_U_MA_C13 +1; //missing shapes in 10, range:0-10, textbox
export const ID_W_U_MA_C15 = ID_W_U_MA_C14 +1; //Numberline
export const ID_W_U_MA_C16 = ID_W_U_MA_C15 +1; //Numberline - correct_answer is hidden
export const ID_W_U_MA_C17 = ID_W_U_MA_C16 +1; //Numberline - beforeX, afterX, betweenXY
export const ID_W_U_MA_C18 = ID_W_U_MA_C17 +1; // not implemented - requires multiple correct ans in sequence
export const ID_W_U_MA_C19 = ID_W_U_MA_C18 +1; // numberwords recognition
export const ID_W_U_MA_C20 = ID_W_U_MA_C19 +1; // not implemented - requires multiple correct answers in sequence

export const W_COUNTING_TASK_END_ID = ID_W_U_MA_C20;


//******************************* */
// Activities List 
// all counting components only
//
//******************************* */
export const W_COUNTING_TASKS_LIST = [
  {
    id: ID_W_L_MA_B1,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B1,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B1,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B2,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B2,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B2,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B3,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B3,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B3,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"5%",
    img_type: "dots",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B4,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B4,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B4,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B5,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B5,
    act_text: "Practice counting from 0 to 3 on a tenframe",
    comp: W_L_MA_B5,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B6, // not implemented
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B6,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B6,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_L_MA_B7,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_B7,
    act_text: "Practice counting from 0 to 3",
    comp: W_L_MA_B7,
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 4, //includes 0 in count upto 3
  },

  // Grade K - counting range 0-5
  {
    id: ID_W_L_MA_C1,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C1,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C1,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C2,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C2,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C2,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C3,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C3,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C3,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"5%",
    img_type: "dots",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C4,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C4,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C4,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C5,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C5,
    act_text: "Practice counting from 0 to 5 on a tenframe",
    comp: W_L_MA_C5,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C6, // not implemented
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C6,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C6,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_L_MA_C7,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_C7,
    act_text: "Practice counting from 0 to 5",
    comp: W_L_MA_C7,
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },

  // Grade K - counting range 0-10
  {
    id: ID_W_L_MA_D1,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D1,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D1,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D2,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D2,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D2,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D3,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D3,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D3,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"5%",
    img_type: "dots",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D4,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D4,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D4,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D5,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D5,
    act_text: "Practice counting from 0 to 10 on a tenframe",
    comp: W_L_MA_D5,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D6, // not implemented
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D6,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D6,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_L_MA_D7,
    grade: -2,
    subject: "math",
    act_ID: ID_W_L_MA_D7,
    act_text: "Practice counting from 0 to 10",
    comp: W_L_MA_D7,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"7%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 11, //includes 0 in count upto 10
  },

  // Grade U - counting range 0-3
  {
    id: ID_W_U_MA_A1, // same as ID_W_L_MA_B1
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A1,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A1, //reusing existing LKG activity W_L_MA_B1
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_U_MA_A2,  // same as W_L_MA_B2
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A2,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A2, //reusing existing LKG activity W_L_MA_B2
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_U_MA_A3, // not implemented
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A3,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A3, //reusing existing LKG activity Drag and drop
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_U_MA_A4, // same as ID_W_L_MA_B5
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A4,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A4, //reusing existing LKG activity W_L_MA_B5
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_U_MA_A5, // not implemented
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A5,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A5, //reusing existing LKG activity 
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"30%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 4, //includes 0 in count upto 3
  },
  {
    id: ID_W_U_MA_A6, // same as ID_W_L_MA_B7
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_A6,
    act_text: "Practice counting from 0 to 3",
    comp: W_U_MA_A6, //reusing existing LKG activity W_L_MA_B7
    lowValue: 1,
    highValue: 3,
    operandCnt: 1,
    heading: 'Practice counting upto 3',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 4, //includes 0 in count upto 3
  },
  
  // Grade U - counting range 0-5
  {
    id: ID_W_U_MA_B1, // same as W_L_MA_C1
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B1,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B1, //reusing existing LKG activity W_L_MA_C1
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B2, // same as ID_W_L_MA_C2
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B2,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B2, //reusing existing LKG activity W_L_MA_C2
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B3,  // not implemented
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B3,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B3, //reusing existing LKG activity 
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"20%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B4, // same as ID_W_L_MA_C5
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B4,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B4, //reusing existing LKG activity W_L_MA_C5
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B5, // same as ID_W_L_MA_C5
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B5,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B5, //reusing existing LKG activity W_L_MA_C5
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "toypad",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B6,  // same as ID_W_L_MA_C7
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B6,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B6, //reusing existing LKG activity W_L_MA_C7
    lowValue: 1,
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B7,
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B7,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B7, 
    lowValue: 2, // when doing 1 more, we subtract from 1 correct answer; min should be 1
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'oneMore',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B8,
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B8,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B8,
    lowValue: 1, 
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'fewMore',
    img_prcnt:"15%",
    img_type: "tenframe",
    inputMethod: "textbox",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B9,
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B9,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B9, 
    lowValue: 1, 
    highValue: 4, // when doing 1 less, we add 1 to correct answer; after adding 1, not to exceed 5
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'oneLess',
    img_prcnt:"15%",
    img_type: "tenframe",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_B10,
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_B10,
    act_text: "Practice counting from 0 to 5",
    comp: W_U_MA_B10,
    lowValue: 1, 
    highValue: 5,
    operandCnt: 1,
    heading: 'Practice counting upto 5',
    question: 'Count these ',
    question_type: 'fewLess',
    img_prcnt:"15%",
    img_type: "pics",
    inputMethod: "textbox",
    max_button: 6, //includes 0 in count upto 5
  },


  // Grade U - counting 0-10
  {
    id: ID_W_U_MA_C1, // reusing existing ID_W_L_MA_B1
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C1,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C1, // reusing existing ID_W_L_MA_B1
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C2, // same as ID_W_L_MA_B2
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C2,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C2, // reusing an existing ID_W_L_MA_B2
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C3, // not implemented
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C3,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C3,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C4, // same as ID_W_L_MA_B5
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C4,
    act_text: "Practice counting from 0 to 10 on a tenframe",
    comp: W_U_MA_C4, // reusing existing ID_W_L_MA_B5
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C5, // not implemented
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C5,
    act_text: "Practice counting from 0 to 10 on a tenframe",
    comp: W_U_MA_C5,
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C6,  // same as ID_W_L_MA_B7
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C6,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C6, // reusing existing ID_W_L_MA_B7
    lowValue: 1,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'select',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C7,  // same as ID_W_U_MA_B7
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C7, 
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C7, // reusing existing ID_W_U_MA_B7
    lowValue: 2, // when doing 1 more, we subtract from 1 correct answer; min should be 1
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'oneMore',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_C8, // same as ID_W_U_MA_B8
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C8,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C8, // reusing existing ID_W_U_MA_B8
    lowValue: 1, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'fewMore',
    img_prcnt:"10%",
    img_type: "tenframe",
    inputMethod: "textbox",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_C9, // same as ID_W_U_MA_B9
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C9,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C9,  // reusing existing ID_W_U_MA_B9
    lowValue: 1, 
    highValue: 9, // when doing 1 less, we add 1 to correct answer; after adding 1, not to exceed 10
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'oneLess',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_C10, // same as ID_W_U_MA_B10
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C10,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C10, //reusing existing ID_W_U_MA_B10
    lowValue: 1, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'fewLess',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C11,  // same as ID_W_U_MA_B7, C7
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C11, 
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C11, // reusing existing ID_W_U_MA_B7
    lowValue: 2, // when doing 1 more, we subtract from 1 correct answer; min should be 1
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'oneMore',
    img_prcnt:"10%",
    img_type: "shapes",
    inputMethod: "threeBtn",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_C12, // same as ID_W_U_MA_B8, C8
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C12,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C12, // reusing existing ID_W_U_MA_B8
    lowValue: -1, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'fewMore',
    img_prcnt:"10%",
    img_type: "dots-tenframe",
    inputMethod: "textbox",
    max_button: 6, //includes 0 in count upto 5
  },
  {
    id: ID_W_U_MA_C13, 
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C13,
    act_text: "Practice counting from 0 to 10",
    comp: W_U_MA_C13, 
    lowValue: -1, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting upto 10',
    question: 'Count these ',
    question_type: 'seq1up',
    img_prcnt:"10%",
    img_type: "pics",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C14,
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C14,
    act_text: "Practice counting from 0 to 10 on a tenframe",
    comp: W_U_MA_C14,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice counting from 0 to 10',
    question: 'Count these ',
    question_type: 'gap',
    img_prcnt:"10%",
    img_type: "tenframe",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C15,  // not implemented properly. This has to do with Tally Marks
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C15,
    act_text: "Practice Numberline based counting from 0 to 10 on a tenframe",
    comp: W_U_MA_C15,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice Numberline based counting from 0 to 10',
    question: 'Count these ',
    question_type: 'gap',
    img_prcnt:"10%",
    img_type: "tenframe",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C16,  // numberline
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C16,
    act_text: "Practice Numberline based counting from 0 to 10",
    comp: W_U_MA_C16,
    lowValue: 0,
    highValue: 10,
    operandCnt: 1,
    heading: 'Practice Numberline based counting from 0 to 10',
    question: 'Show missing number',
    question_type: 'hide',
    img_prcnt:"10%",
    img_type: "numberline",
    inputMethod: "toypad",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C17,  // numberline
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C17,
    act_text: "Practice Numberline based counting from 0 to 10",
    comp: W_U_MA_C17,
    lowValue: 1,    // while count is between 0-10, for doing before and after we need to limit the range to 1-9
    highValue: 9,
    operandCnt: 1,
    heading: 'What comes before',
    question: 'before after inbetween',
    question_type: 'beforeX',   //beforeX, afterX, betweenXY
    img_prcnt:"10%",
    img_type: "numberline",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C18,  // not implemented - requires multiple correct answers
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C18,
    act_text: "Practice Numberline based counting from 0 to 10",
    comp: W_U_MA_C18,
    lowValue: 0,    // while count is between 0-10, for doing before and after we need to limit the range to 1-9
    highValue: 10,
    operandCnt: 1,
    heading: 'What comes before',
    question: 'before after inbetween',
    question_type: 'beforeX',   //beforeX, afterX, betweenXY
    img_prcnt:"10%",
    img_type: "numberline",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C19,  // numberline
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C19,
    act_text: "Practice Numberline based counting from 0 to 10",
    comp: W_U_MA_C19,
    lowValue: 0, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Number Word Recognition',
    question: 'What number is this?',
    question_type: 'recognition',   //beforeX, afterX, betweenXY
    img_prcnt:"10%",
    img_type: "numberWords",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
  {
    id: ID_W_U_MA_C20,  // not implemented - multiple correct answers
    grade: -1,
    subject: "math",
    act_ID: ID_W_U_MA_C20,
    act_text: "Practice Numberline based counting from 0 to 10",
    comp: W_U_MA_C20,
    lowValue: 0, 
    highValue: 10,
    operandCnt: 1,
    heading: 'Number Word Recognition',
    question: 'What number is this?',
    question_type: 'recognition',   //beforeX, afterX, betweenXY
    img_prcnt:"10%",
    img_type: "numberWords",
    inputMethod: "textbox",
    max_button: 11, //includes 0 in count upto 10
  },
];