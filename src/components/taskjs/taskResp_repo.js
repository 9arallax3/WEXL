const correctAns_resp_ary = [
    'Yes, you got it!',
    'Correct!',
    'Wow, you are a champ!',
    'You are a winner!',
    'Splendid!',
    'You got it!',
    'You got the correct answer!',
    'You are doing great!',
    'Prefect!',
    'Super!'
  ];
const wrongAns_resp_ary = [
   'Sorry, you did not get it.',
   'Incorrect.',
   'Better luck next time, champ!',
   'Oops, you missed!',
   'Good try, but not correct.',
   'Sorry, try again!',
   'You did not get the answer.',
   'Sorry! Keep trying.',
   'Sorry, better luck next time.',
   'Yikes! missed it.'
];

  // returns a random response from wrongAns response array
  export function randomWrong() {
     return (wrongAns_resp_ary[Math.floor(Math.random() * wrongAns_resp_ary.length)]);
  }

  // returns a random response from correctAns response array
  export function randomCorrect() {
     return (correctAns_resp_ary[Math.floor(Math.random() * correctAns_resp_ary.length)]);
  }