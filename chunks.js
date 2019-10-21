function chunk(arr, size) {
  let index = 0;
  let result = [];
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index = index + size;
  }
  return result;
}

console.log(chunk([1, 2, 3, 4], 3));
