var sum = (x, y) => x + y;

var subtract = (x, y) => x - y;

var multiply = (x, y) => x * y;

var divide = (x, y) => (y === 0) ? undefined : x / y;

function pow(x, y) {
    var p = 1;

    for (var i = 0; i < y; i++) {
        p = p * x;
    }
    return p;
}


module.exports = { sum, subtract, multiply, divide, pow }