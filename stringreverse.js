var string = "hello";
console.log(reversestring(string));
console.log(reversestringloop(string));
function reversestring(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function reversestringloop(string) {
  let reverstring1 = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverstring1 = reverstring1 + string[i];
  }
  return reverstring1;
}
