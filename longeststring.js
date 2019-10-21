let words = ["a", "banana", "app", "appl", "ap", "apple", "apply"];

var longeststring = function(words) {
  let set = new Set(words);
  let res = "";
  words.forEach(a => {
    if (a.length < res.length) return;
    if (a.length == res.length && a > res) return;
    for (let i = a.length - 1; i > 0; i--) {
      if (!set.has(a.substring(0, i))) {
        return;
      }
      res = a;
    }
  });
  return res;
};

console.log(longeststring(words));
