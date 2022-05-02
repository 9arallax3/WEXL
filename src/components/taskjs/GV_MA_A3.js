let task01 = {
    question : "Which words make this statement true?",
    options : ["greater","lesser","equal"],
    valueRight : 0,
    valueLeft : 0,
    answer : ''
}

const tenthousands = 10000;

export function taskOne(){
   
    task01.answer = task01.options[(Math.floor(Math.random() * 3) + 1) -1];
    task01.valueLeft = Math.floor( Math.random() * tenthousands);
    if(task01.answer.toString() === "greater"){        
        task01.valueRight = Math.floor(Math.random() * (task01.valueLeft - 1)) + 1;
    }else if(task01.answer.toString() === "lesser"){
        task01.valueRight = Math.floor(Math.random() * ((tenthousands + 10) - task01.valueLeft)) + task01.valueLeft;
    }else if(task01.answer.toString() === "equal"){
        task01.valueRight = task01.valueLeft;
    }
    return task01;
}


