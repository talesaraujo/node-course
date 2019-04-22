var sum = (x, y) => x + y;

var subtract = (x, y) => x - y;

var multiply = (x, y) => x * y;

function divide(x, y) {
    if ((x === 0) && (y === 0)) {
        return NaN;
    }
    else if(y === 0) {
        return Infinity;
    }
    else {
        return x / y;
    }
}

function pow(x, y) {
    var p = 1;

    for (var i = 0; i < y; i++) {
        p = p * x;
    }
    return p;
}

module.exports = { sum, subtract, multiply, divide, pow };