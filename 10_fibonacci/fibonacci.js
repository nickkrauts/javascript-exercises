const fibonacci = function(num) {
    //pass the function a number (or string converted to number)
    num = +num;
    let array = [1,1];
    if (num <= 0){
        return 'OOPS';
    }
    else if(true == (num == 1 || num == 2)){
        return 1;}
    
    //find which number/place in the fibonacci sequence corresponds to given number
    for (i = 1; i < num - 1; i++){
        array.push((array[i]+array[i-1]))
        console.log(array);
    }return array[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
