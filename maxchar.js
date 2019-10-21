const string = "hello world oo";
charmax(string);

function charmax(string) {
  string = string.trim();
  let obj = {};
  for (let char of string) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  let maxcharval = 0;
  let maxchar;
  for (let char in obj) {
    if (obj[char] > maxcharval) {
      maxcharval = obj[char];
      maxchar = char;
    }
  }

  console.log(maxchar + "-> " + maxcharval);
}
