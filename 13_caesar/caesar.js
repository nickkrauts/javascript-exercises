//input string, shift all letter in string by num, but DO NOT shift punctuation/spaces.
//Hint: You may need to convert letters to their unicode values. Be sure to read the documentation!
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
//Capital letters stay capital, lower stay lower
//https://www.programiz.com/javascript/examples/ascii-value-character
//to convert letter to ASCII =>    const result = string.charCodeAt(0);
//A - Z is 65 - 90; a - z is 97 - 122;

//letter by letter, convert to ascii, add num, convert back to letter
const stringToAsciiArray = function(string) {
    let asciiArray = string.split('');
    for (let i = 0; i < asciiArray.length; i++) {
        
        asciiArray[i] = asciiArray[i].charCodeAt(0);    
    }  
    return asciiArray;
}

const asciiArrayCypher = function(string,num) {
    asciiArray = stringToAsciiArray(string);
    for (let i = 0; i < asciiArray.length; i++) {
        
    //only convert letters, not punctuation or spaces, to ASCII
    if (true == (asciiArray[i] >= 65 && asciiArray[i] <= 90) 
        || (asciiArray[i] >= 97 && asciiArray[i] <= 122)){
        //keep capital letters capital, lowercase lower. WHILE LOOP?
        if (num > 25) {
            num -= 26;
            asciiArray[i] = (asciiArray[i] + num);

            
        }else {
            asciiArray[i] = (asciiArray[i] + num);
           }
    }else continue;
    
}
return asciiArray;
}
//take asciiArray and convert each array ASCII number back into letters/characters

const asciiToGlyph = function(string,num) {
    asciiArray = asciiArrayCypher(string,num)
    for (let i = 0; i < asciiArray.length; i++) {    
        asciiArray[i] = String.fromCharCode(asciiArray[i]);
}
    let letterArray = asciiArray;
    return letterArray;
}

const caesar = function(string, num) {
    letterArray = asciiToGlyph(string, num);
    finalString = letterArray.join('');
    return finalString;
};


// Do not edit below this line
module.exports = caesar;
