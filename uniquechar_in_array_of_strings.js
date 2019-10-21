var arr = ["abb", "bbb", "bb"];
uniquearr(arr);

function uniquearr(arr) {
  let prim = [];
  for (let i = 0; i < 26; i++) {
    prim[i] = 26;
  }

  for (let i = 0; i < arr.length; i++) {
    let sec = [];

    for (let i = 0; i < 26; i++) {
      sec[i] = false;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (prim[arr[i][j].charCodeAt(0) - 97]) {
        sec[arr[i][j].charCodeAt(0) - 97] = true;
      }
    }
    prim = Array.from(sec);
  }
  for (let i = 0; i < 26; i++) {
    if (prim[i]) {
      console.log(String.fromCharCode(i + 97));
      console.log();
    }
  }
}
