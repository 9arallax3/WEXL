
let randomClockObj = {   
    minutes : 0,
    hours : 0,
    setMinutesPos : 0,
    setHourPos : 0
 
 }
 
 export function randomClock_hr() {
   let randomValueMin = 0;
   randomClockObj.minutes = randomValueMin * 5;
   randomClockObj.setMinutesPos = randomValueMin * 30;
   let randomValueHour = Math.floor(Math.random() * 12); 
   randomClockObj.hours = randomValueHour;
   randomClockObj.setHourPos = randomValueHour * 30;
   if (randomClockObj.hours == 0)
      randomClockObj.hours =12;
   return randomClockObj;
}
 
 export function randomClock() {
    let randomValueMin = Math.floor(Math.random() * 12);
    randomClockObj.minutes = randomValueMin * 5;
    randomClockObj.setMinutesPos = (randomValueMin * 30);
    let randomValueHour = Math.floor(Math.random() * 12); 
    randomClockObj.hours = randomValueHour;
    randomClockObj.setHourPos = (randomValueHour * 30) + 90*(randomValueMin/60);
    if (randomClockObj.hours == 0)
      randomClockObj.hours =12;
    return randomClockObj;
 }

 export const rot_degree = [
   "transform: rotate(30deg);",
   "transform: rotate(60deg);",
   "transform: rotate(90deg);",
   "transform: rotate(120deg);",
   "transform: rotate(150deg);",
   "transform: rotate(180deg);",
   "transform: rotate(210deg);",
   "transform: rotate(240deg);",
   "transform: rotate(270deg);",
   "transform: rotate(300deg);",
   "transform: rotate(330deg);",
   "transform: rotate(360deg);"
];

export const min_phrases = [
   " O'clock.",
   " five past ", " ten past ", " quarter past ", " twenty past ", " twenty-five past ", "half past ",
   " twenty-five to ", " twenty to ", " quarter to ", " ten to ", " five to "
];