let task01 = {
    questionOption:["Which property of addition is shown?","Which equation shows the identity property of addition?"],
    question : '',
    startValue : 0,
    startText : '',
    startTextArray : ["Closure" , "Commutative","Associative" , "Identity"],
    optionTextArray : ["a + b = c" , "a+b = b+a ","(a+b) + c = a+(b+c)" , "a+0 = a"],
    endValue : 0,
    endText : '',
    answer : 0,
    endTextArray : ["ones" , "tens"]
}

const maxNumber = 10;
const minNumber = 0;


export function taskOne(){

    let qst = Math.floor(Math.random() * (task01.questionOption.length - minNumber)) + minNumber;
    task01.answer = Math.floor(Math.random() * (task01.startTextArray.length - minNumber)) + minNumber;
    task01.endValue = Math.floor(Math.random() * (task01.startTextArray.length - minNumber)) + minNumber;
    task01.startValue = qst;

    let a = Math.floor(Math.random() * maxNumber) + 1;
    let b = Math.floor(Math.random() * maxNumber) + 1;
    let c = Math.floor(Math.random() * maxNumber) + 1;
    task01.optionTextArray[0] = (a+"+"+b+"="+(a+b)).toString();
    task01.optionTextArray[1] = (a+"+"+b+"="+b+"+"+c).toString();
    task01.optionTextArray[2] = ("("+a+"+"+b+") + "+c+" = "+a+"+("+b+"+"+c+")").toString();
    task01.optionTextArray[3] = (a+"+0 = "+a).toString();
    if(qst != 0){
        task01.questionOption[1] = "Which equation shows the "+ task01.startTextArray[task01.answer]+" property of addition?";
    }
    task01.question = task01.questionOption[qst];

    


    return task01;
}

