const string = prompt('Enter you sentence')

const truncate = (str, maxlength) => {
    return alert(str.slice(0, maxlength)+'...')
}
truncate(string, 20)