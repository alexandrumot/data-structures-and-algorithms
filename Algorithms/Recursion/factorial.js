result = 1;

function factorial(n) {
    if (n === 1) {
        return result;
    } 

    result *= n;
    return factorial(n-1)
}

console.log(factorial(10));
