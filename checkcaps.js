var arr = ["hi", "Hello", "here", "How", "He"];

function checkcapswithfilter(arr) {
  var list = arr.filter(function(item) {
    if (item.slice(0, 1) === item.slice(0, 1).toUpperCase()) {
      return item;
    }
  });

  console.log(list);
}

function checkcaps(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 1) === arr[i].slice(0, 1).toUpperCase()) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

checkcaps(arr);

checkcapswithfilter(arr);
