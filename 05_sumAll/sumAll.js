const sumAll = function(numStart,numEnd) {
    if (numStart < 0 || numEnd < 0 == true) {
        return 'ERROR';
    }else if ((typeof numStart !== 'number' 
                || typeof numEnd  !== 'number')== true){
                    return 'ERROR'; 
                }
    
    if (numStart > numEnd) {
        let newNumEnd = numStart;
        let newNumStart = numEnd;
        numEnd = newNumEnd;
        numStart = newNumStart;
    }
    
    let numLength = numEnd - numStart + 1;
    let sumNums = (numLength/2) * (numStart + numEnd);
     return sumNums;   
};

// Do not edit below this line
module.exports = sumAll;
