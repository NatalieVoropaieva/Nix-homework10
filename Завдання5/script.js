const randomInteger = (min, max) => {
    let randomNumber = min - 0.5 + Math.random() * (max);
    return Math.round(randomNumber);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
