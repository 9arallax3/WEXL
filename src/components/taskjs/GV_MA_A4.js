import {convertNumberToWords} from './Utility/wordTonum';
import {randomNumbers} from './Utility/randomNumGen';

let task01 = {
    question : "How do you write this number using words?",
    displayValue : "",    
    answer : 0,
    randomAnswer : 0,
    options: [0,1,2,3]
}

let task02 = {
    question : "How do you write this number using digits?",
    displayValue : "",    
    answer : 0,
    randomAnswer : 0,
    options: [0,1,2,3]
}


export function taskOne(){  
    task01.displayValue =  Math.floor( Math.random() * 10000);
    task01.randomAnswer = Math.floor(Math.random() * (task01.options.length));
    let max = task01.displayValue + 5;
    let min = task01.displayValue - 5;  
    task01.options = randomNumbers(task01.options.length,max,min);
    task01.displayValue = task01.options[task01.randomAnswer];
    for (let index = 0; index < task01.options.length; index++) {        
        task01.options[index] =  convertNumberToWords(task01.options[index]);
    } 
    task01.answer = task01.randomAnswer;
    return task01;
}

export function taskTwo(){  
    task02.displayValue =  Math.floor( Math.random() * 10000);
    task02.randomAnswer = Math.floor(Math.random() * (task02.options.length));
    let max = task02.displayValue + 5;
    let min = task02.displayValue - 5;  
    task02.options = randomNumbers(task02.options.length,max,min);
    task02.displayValue = convertNumberToWords(task02.options[task02.randomAnswer]);
    
    task02.answer = task02.randomAnswer;
    return task02;
}



  
