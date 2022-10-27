const myAge = 12;
const checkAge = (age) => age > 18 || confirm('Батьки дозволили?') ? alert(true): alert(false);
checkAge(myAge);