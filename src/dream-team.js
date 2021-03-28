// //const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  members = members.filter(e => typeof e === 'string' && e !== '');
  if (members) {  // && e !== ''
    for (var i = 0; i < members.length; i++) {
      members[i] = members[i].replace(/\s/g, '').slice(0,1);
    }
  }
  return members.sort().join('').toUpperCase();
};


// let members = ['     Olivia', 1111, 'Lily', 'Oscar', true, null];
// members;
// members = members.filter(e => typeof e === 'string' && e !== '');
// members;

// for (var i = 0; i < members.length; i++) {
//   members[i] = members[i].replace(/\s/g, '').slice(0,1);
// }

// members;
// members = members.sort();
// members;

// members = members.join('');
// members;

