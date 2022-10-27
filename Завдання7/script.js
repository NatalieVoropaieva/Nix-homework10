const string = prompt('Enter password:');
const checkSpam = (str) => {
    const lowerCase = str.toLowerCase()
    if (lowerCase.includes('viagra') || lowerCase.includes('xxx')){
        alert(true)
    }else{
        alert(false)
    }
}
checkSpam(string);