function saveJustLetters(str){
    newString = str.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
    return newString;
}

//use this function to cut the string in half and flip the second half
function splitString(str){
    saveJustLetters(str);
    //pulls newString from saveJustLetters
    //convert string to array for splice
    let stringArray = newString.split('');
    let arrayLength = stringArray.length;
    let result = [];    
    const half = Math.ceil(arrayLength / 2); 
    //split string in half; if odd length, remove middle char
    if (arrayLength % 2 == 0) {
        //let firstHalf = str.slice(0,half);
        let firstHalf = stringArray.splice(0,half);
        //reverse second half
        let secondHalf = stringArray.splice(-half);
        let reversedSecondHalf = secondHalf.reverse();
        result = [firstHalf,reversedSecondHalf];
    }else {
        //QQ: how to remove middle string
        //AA: ended up converting to an array to use splice instead
        let firstHalf = stringArray.splice(0,half);
        //remove odd character from array
        firstHalf.pop();
        //reverse second half
        let secondHalf = stringArray.splice(-half);
        let reversedSecondHalf = secondHalf.reverse();
        result = [firstHalf,reversedSecondHalf];
    }
    return result;
 
}
const palindromes = function (str) {
    //gives us an array 'result' of first half and second half reversed to compare
    let result = splitString(str);
    //convert both arrays back into strings for easier comparison
    let firstHalfString = result[0].toString()
    let secondHalfString = result[1].toString()

    if (secondHalfString === firstHalfString) {
        return true;
    }else return false;
   
};



// Do not edit below this line
module.exports = palindromes;
