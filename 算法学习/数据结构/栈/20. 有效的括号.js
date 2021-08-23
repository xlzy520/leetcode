var isValid = function(s) {
  const stack = [],
    map = {
      "(":")",
      "{":"}",
      "[":"]"
    };
  for (const ch of s) {
    if (map[ch]) {
      stack.push(ch)
      continue
    }
    if (map[stack.pop()] !== ch) {
      return false
    }
  }
  return !stack.length
};
