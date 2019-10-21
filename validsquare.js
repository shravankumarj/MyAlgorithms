let words = ["ball", "area", "read", "lady"];
console.log(validsquare(words));

function validsquare(words) {
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    for (let j = 0; j < element.length; j++) {
      if (
        j >= words.length ||
        i >= words[j].length ||
        words[i].charAt(j) != words[j].charAt(i)
      ) {
        return false;
      }
    }
  }
  return true;
}
