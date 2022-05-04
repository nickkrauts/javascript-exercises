const ftoc = function(tempInFahren) {
    let tempInCel = ((tempInFahren-32)*(5/9));
    return +tempInCel.toFixed(1);
    
};//Still need to round to nearest tenth

const ctof = function(tempInCel) {
  let tempInFahren = ((tempInCel*(9/5)+32));
    return +tempInFahren.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
