
/**
 * Check if the parameter str is parlindrome
 * 
 * == Algo notes ==
 * - Lowercase and Uppercase are treated as the same thing.
 * - Space is removed.
 * - Non-alphanumeric is removed.
 * 
 * Ref: https://en.wikipedia.org/wiki/Palindrome
 * @param {*} str 
 */
function isParlindrome(str) {

    if(!str) {
        return false;
    }
    else if(str.length == 0 || str.length == 1) {
        return false;
    }
    else {
    
    // // even | odd   
    // len: 4 >> 0-1, 2-3
    // len: 5 >> 0-1, 3-4
    // len: 6 >> 0-2, 3-5
    // len: 7 >> 0-2, 4-6
    

    //// String manipulation
    str = str.toLowerCase();
    str = makeStringOnlyAlphaNumeric(str);


    //// get string first, and string second
    var mid = getMidIndex(str.length);
    var firstStr = "";
    var secondStr = "";

    if(str.length % 2 == 0) {
        // Even case
        firstStr = str.substring(0, mid);
        secondStr = str.substring(mid);
    }
    else {
        // Odd case
        firstStr = str.substring(0, mid);
        secondStr = str.substring(mid + 1);
    }

    //// reverse on string second
    secondStr = secondStr.split("").reverse().join("");

    //// if it equals, then it is parlindrome
    if(firstStr == secondStr)
        return true;
    else
        return false;
    }
}

function getMidIndex(len) {

    if(len % 2 == 0)
        return len / 2;
    else
        return Math.floor(len / 2);
}

function makeStringOnlyAlphaNumeric(str) {
    str = str.replace(/[^a-z0-9]/gi,'');
    return str;
}

module.exports = isParlindrome;