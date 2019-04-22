function isPalindrome(word) {
    assign = true;
    
    var i = 0;
    var j = word.length - 1;

    while ((i < word.length) && (assign === true)) {
        if (word[i] !== word[j]) {
            assign = false;
        }
        i++;
        j--;
    }

    return assign ? true : false;
}

module.exports = { isPalindrome }