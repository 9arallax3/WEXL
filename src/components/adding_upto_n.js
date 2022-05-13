let rn1 = 0;
let rn2 =0;
let n = 0;

const COUNT_LOWNUM = 1;
const COUNT_HIGHNUM = 10;
 
let  c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
let  w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
let  correct_answer = 0;
let  usr_resp = null;


function Add_upto_n() {
  rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM));
  rn2 = COUNT_LOWNUM;
  c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM +c_ans.CORRECT_ANS_MSG_LOWNUM);
  w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
  correct_answer = rn1 + rn2;
  usr_resp = null;
  ans_submit = false;
}
Add_upto_n();

function submitted() {
    ans_submit = true;
  }

  function skill_exit() {}














