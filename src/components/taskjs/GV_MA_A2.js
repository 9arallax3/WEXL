let task01 = {
    endValue : 0,
    endText : '',
    answer : 0,
    endTextArray : ["hundreds" , "tens","thousands","ten thousands","ones"]
}

const tenthousands = 10000;
const thousands = 1000;
const hundreds = 100;
const tens = 10;


export function taskOne(){
    task01.endValue = Math.floor(Math.random() * 9)+1;  
    task01.endText = task01.endTextArray[(Math.floor(Math.random() * task01.endTextArray.length))];
    if(task01.endText == "hundreds"){
        task01.answer = task01.endValue * hundreds;
    }else if(task01.endText == "tens"){
        task01.answer = task01.endValue * tens;
    }else if(task01.endText == "thousands"){
        task01.answer = task01.endValue * thousands;
    }else if(task01.endText == "ten thousands"){
        task01.answer = task01.endValue * tenthousands;
    }else if(task01.endText == "ones"){
        task01.answer = task01.endValue * 1;
    }    
    return task01;
}