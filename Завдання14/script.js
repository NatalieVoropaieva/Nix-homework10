const pow = (x, n) => {
    if (n===0) return 1;
    let result = x;

    for (let i = 0; i < n-1; i++ ){
        result *= x;
    }
    return result;

}

alert(pow(1, 100))