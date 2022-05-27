const COUNT_HIGHNUM = 10; // max number to which the addendum / operand is allowed
export let correct_answer = 0;
let fixed_num = 1;
let usr_resp = null;
let ans_submit = false;
let rn1 = 0;
let rn2 = 0;
let op = ["+","-"]


export function add_n(op, fixed_num) {
  rn1 = Math.floor(Math.random() * (COUNT_HIGHNUM - fixed_num) + 1);
  rn2 = fixed_num;
  console.log("correct ans: ",correct_answer," rn1: ",rn1," n:",rn2," op:",op); 

  switch (op) {
      case "+":
        console.log("inside case +: op= ", op);
        correct_answer = rn1 + rn2;
        break;
      case "-":
        console.log("inside case -: op= ", op);
        correct_answer = rn1 - rn2;
      break;
      default:
        correct_answer = rn1 + rn2;
        break ;
    }
  usr_resp = null;
  ans_submit = false;
} 

add_n("-", fixed_num);