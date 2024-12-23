const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let new_members = members.filter((item) => typeof item === "string");
    new_members = new_members.map((item) => item.trim())
    if (new_members.length === 0) {
      return false;
    }
    let res = [];
    for (let i = 0; i < new_members.length; i++) {
      res.push(new_members[i][0]);
    }
    res = res.sort((a, b) => a.localeCompare(b));
    res_str = res.join('').toUpperCase();

    return res_str;
} else {
  return false;
}
}

module.exports = {
  createDreamTeam
};
