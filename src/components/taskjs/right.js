let questionL = [
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

// returns a random response from questinL array
export function randomCorrect() {
   return (questionL[Math.floor(Math.random() * questionL.length)]);
}