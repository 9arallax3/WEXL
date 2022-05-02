let task01 = {
    startValue : 0,
    startText : '',
    startTextArray : ["thousands" , "hundreds"],
    endValue : 0,
    endText : '',
    answer : 0,
    endTextArray : ["ones" , "tens"]
}

let task02 = {
    displayArray : [],
    endValue : 0,
    answer : 0,
    inputNumber : 0
}

let task03 = {
    displayValue : [],    
    answer : "",
    colorValue : 0,     
    options : ["thousands" , "hundreds","tens" , "ones"]
}

let task04 = {
    thousands : 0,
    hundreds : 0,
    tens : 0,
    ones : 0,
    answer : 0
}


const thousands = 1000;
const hundreds = 100;
const tens = 10;

export function taskOne(){
    task01.startValue = Math.floor(Math.random() * 9)+1;  
    task01.startText = task01.startTextArray[(Math.floor(Math.random() * 2) + 1) -1];
    task01.endText = task01.endTextArray[(Math.floor(Math.random() * 2) + 1) -1];
    
    if(task01.startText == "thousands" && task01.endText == "ones"){
        task01.answer = task01.startValue * thousands;
      
    }else if(task01.startText == "thousands" && task01.endText == "tens"){
        task01.answer = task01.startValue * hundreds;
       
    }else if(task01.startText == "hundreds" && task01.endText == "tens"){
        task01.answer = task01.startValue * tens;
       
    }else if(task01.startText == "hundreds" && task01.endText == "ones"){
        task01.answer = task01.startValue * hundreds;
       
    }
    return task01;
}

export function taskTwo(){
    task02.displayArray[0] = Math.floor(Math.random() * tens) * thousands;
    task02.displayArray[1] = Math.floor(Math.random() * tens)* hundreds;
    task02.displayArray[2] = Math.floor(Math.random() * tens) * tens;
    task02.displayArray[3] = Math.floor(Math.random() * tens);
    for (let index = 0; index < task02.displayArray.length; index++) {
        task02.endValue +=task02.displayArray[index];        
    }
    task02.inputNumber = Math.floor(Math.random() * 4);
    task02.answer = task02.displayArray[task02.inputNumber] ;
    return task02;
}

export function taskThree(){
    let value = Math.floor(thousands + Math.random() * (thousands * 9)).toString();
    task03.displayValue = Array.from(value);
    task03.colorValue = Math.floor(Math.random() * 4);
    task03.answer = task03.options[task03.colorValue];    
    return task03;
}

export function taskFour(){
    task04.thousands = Math.floor(Math.random() * tens);
    task04.hundreds = Math.floor(Math.random() * tens);
    task04.tens = Math.floor(Math.random() * tens);
    task04.ones = Math.floor(Math.random() * tens);
    task04.answer = (task04.thousands * thousands) + (task04.hundreds * hundreds) + (task04.tens * tens) + (task04.ones * 1) ;
    return task04;
}

//------------------------------------------------------------------
// let tempNum  = Math.floor(Math.random() * 1000 - 100) + 100;
// let tempNumbArray = tempNum.split('').reverse();
// let tempLength = tempNumbArray.length;
// let d_units = ['ones','tens','hundreds','thousands'];