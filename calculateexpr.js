console.log(calculate("23+432-220+10-20"));

function calculate(expr) {
  var chars = expr.split("");
  let op = [];
  let index = 0;
  let n = [];
  n[index] = "";

  for (let c = 0; c < chars.length; c++) {
    if (isNaN(parseInt(chars[c]))) {
      op[index] = chars[c];
      index++;
      n[index] = "";
    } else {
      n[index] += chars[c];
    }

    expr = parseFloat(n[0]);
    for (let o = 0; o < array.length; o++) {
            var num = parseFloat(n[o + 1]);

    }
  }
}
