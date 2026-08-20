const fibonacci = function(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return a;
};

console.log(fibonacci(2))

// Do not edit below this line
module.exports = fibonacci;
