var str = "hello world";
capitalizeletters(str);

function capitalizeletters(str) {
  let char = str.split(" ");
  const words = [];
  for (let i = 0; i < char.length; i++) {
    words.push(char[i].slice(0, 1).toUpperCase() + char[i].slice(1));
  }

  console.log(words);
}
