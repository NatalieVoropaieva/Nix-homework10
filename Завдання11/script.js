const myAge = 12;

function checkAge (age) {
    if (age > 18) {
        return true;
    } else {

        return confirm( ' Батьки дозволили ?');
    }
}
checkAge(myAge)// якщо ми ввредемо функцію без else, то вона вивете і true s confirm