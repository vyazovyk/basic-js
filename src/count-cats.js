//const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for(let i = 0; i < matrix.lenght; i++) {
    let depth = matrix[i];
    for(let j = 0; j < depth.length; j++) {
      if(depth[j] == '^^') {
        count++;
      }
    }
  }
  return count;
};
