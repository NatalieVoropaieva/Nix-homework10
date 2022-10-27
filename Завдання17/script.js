let value = null;
let numbers = [];
let isNumber = false;
do {
    value = prompt('Enter your numbers:');
    const number = +value;
    isNumber = value !== null && !isNaN(number);
    if (isNumber) {
        numbers.push(number)
    }
} while (numbers.length < 10)

const sumNegative = (str) =>{


    let sum = 0;
    for (let element of str){
        if (element < 0) {
            sum += element;
        }
    }
    return sum;
}
alert(sumNegative(numbers))