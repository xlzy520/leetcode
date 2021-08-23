/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  // const arr = s.split('')
  let res = new Set()
  for (let i = 0; i < s.length; i++) {
    let item = ''+s[i]
    for (let j = 0; j < s.length; j++) {
      if (s[i] !== s[j]) {
        item += s[j]
      }
    }
    res.add(item)
  }
  console.log(res);
};

console.log(permutation('a'));
console.log(permutation('abc'));
