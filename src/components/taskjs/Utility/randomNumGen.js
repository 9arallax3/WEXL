export function randomNumbers(count, max , min){
    var stop = count;
    var numbers = [];
    for (let i = 0; i < stop; i++) {
    var n =  Math.floor(Math.random() * (max - min)) + min;
    var check = numbers.includes(n);
        
        if(check === false) {
            numbers.push(n);
        } else {
            while(check === true){
            n =  Math.floor(Math.random() * (max - min)) + min;
            check = numbers.includes(n);
                if(check === false){
                numbers.push(n);
                }
            }
        }
        }
    return numbers;
  }


  export function randomArrayNumbers(count, max , min,arrayV){
    var stop = count;
    var numbers = [];
    for (let i = 0; i < stop; i++) {
    var n =  Math.floor(Math.random() * (max - min)) + min;
    var check = numbers.includes(n);
        
        if(check === false) {
            numbers.push(arrayV[n]);
        } else {
            while(check === true){
            n =  Math.floor(Math.random() * (max - min)) + min;
            check = numbers.includes(n);
                if(check === false){
                numbers.push(arrayV[n]);
                }
            }
        }
        }
    return numbers;
  }