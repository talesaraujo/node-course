var calculator = require('./calculator');
var parity = require('./parity')
var palindrome = require('./palindrome')

function testSum(x, y) {
    if (calculator.sum(x, y) === (x + y)) {
        return true;
    }
    else {
        return false;
    }
}

function testSubtract(x, y) {
    if (calculator.subtract(x, y) === (x - y)) {
        return true;
    }
    else {
        return false;
    }
}

function testMultiply(x, y) {
    if (calculator.multiply(x, y) === (x * y)) {
        return true;
    }
    else {
        return false;
    }
}

function testDivide(x, y) {
    if (calculator.divide(x, y) === (x / y)) {
        return true;
    }
    else {
        return false;
    }
}

function testPow(x, y) {
    if (calculator.pow(x, y) === (x ** y)) {
        return true;
    }
    else {
        return false;
    }
}

var testParity = (x) => parity.even(x) ? true : false;

result = calculator.divide(10, 3)

console.log(calculator.divide(10, 3))

console.log(palindrome.isPalindrome('able was i ere i saw elba'))