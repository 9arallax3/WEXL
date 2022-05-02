let questionL = [
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
  
  // returns a random response from questionL array
  export function randomWrong() {
     return (questionL[Math.floor(Math.random() * questionL.length)]);
  }