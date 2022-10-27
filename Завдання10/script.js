let value = null;
let numbers = [];
let isNumber = false;
do {
    value = prompt('Enter your numbers:', 0);
    const number = +value;
    isNumber = value !== null && !isNaN(number);
    if (isNumber) {
        numbers.push(number)
    }
} while (isNumber)

const sumInput = (str) =>{
    let sum = 0;
    for (let element of str){
        sum += element;
    }
     alert(sum)
}
sumInput(numbers)