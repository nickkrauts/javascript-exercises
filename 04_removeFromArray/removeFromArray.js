const removeFromArray = function(...args) {
    const array = args[0]
    for (let i = 1; i < args.length; i++) {
      //need another for loop to go through array one at a time
      for (let n = 0; n < array.length; n++)
      if (args[i] === array[n]) {
        array.splice(n,1);
      }
    }
  return array
  };

// Do not edit below this line
module.exports = removeFromArray;
