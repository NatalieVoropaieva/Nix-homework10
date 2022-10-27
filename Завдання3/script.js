function readNumber() {
    let num;

    do {
        num = prompt("Enter your number", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Your number: ${readNumber()}`);