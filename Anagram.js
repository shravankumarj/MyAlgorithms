Anagrams("rail safety", "fairy tales");

function Anagrams(str1, str2) {
  if (cleanString(str1) === cleanString(str2)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function cleanString(str) {
  return str
    .replace(/[^w]/g, "")
    .split("")
    .sort()
    .join("");
}
