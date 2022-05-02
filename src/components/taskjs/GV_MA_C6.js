let task01 = {
    questionOption:["Which property of addition is shown?","Which equation shows the identity property of multiplication?"],
    question : '',
    startValue : 0,
    startText : '',
    startTextArray : ["Distributive " , "Commutative","Associative" , "Identity"],
    optionTextArray : ["a × b + a × c = a × (b + c)" , "aXb = bXa ","(aXb) X c = aX(bXc)" , "aX1 = a"],
    endValue : 0,
    endText : '',
    answer : 0,
    endTextArray : ["ones" , "tens"]
}



export function taskOne(){

    let qst = Math.floor(Math.random() * (task01.questionOption.length - 0)) + 0;
    task01.answer = Math.floor(Math.random() * (task01.startTextArray.length - 0)) + 0;
    task01.endValue = Math.floor(Math.random() * (task01.startTextArray.length - 0)) + 0;
    task01.startValue = qst;

    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    task01.optionTextArray[0] = (a+"x"+b+"+"+a+"x"+c+"="+a+"X"+"("+b+"+"+c+")").toString();
    task01.optionTextArray[1] = (a+"X"+b+"="+b+"X"+c).toString();
    task01.optionTextArray[2] = ("("+a+"X"+b+") X "+c+" = "+a+"X("+b+"X"+c+")").toString();
    task01.optionTextArray[3] = (a+"X1 = "+a).toString();
    if(qst != 0){
        task01.questionOption[1] = "Which equation shows the "+ task01.startTextArray[task01.answer]+" property of multiplication?";
    }
    task01.question = task01.questionOption[qst];

    


    return task01;
}

