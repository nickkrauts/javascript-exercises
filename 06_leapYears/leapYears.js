const leapYears = function(year) {

    //start with cases that will always fail
    //anything not divis by 4
    if (year % 4 !== 0) {
        return false;
    }
    //exclude years divisible by 100 but not 400
    else if (year % 100 == 0 && year % 400 !== 0) {
        return false;
    }//divis by 400
    else if (year % 400 == 0){
        return true;
    }else {
        return true;
    }
    //leapyears ARE divisible by four
    
    

};

// Do not edit below this line
module.exports = leapYears;
