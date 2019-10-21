function getSecondLargest(arr) {
  (biggest = -Infinity), (next_biggest = -Infinity);

  for (var i = 0, n = arr.length; i < n; ++i) {
    var nr = arr[i]; // convert to number first

    if (nr > biggest) {
      next_biggest = biggest; // save previous biggest value
      biggest = nr;
    } else if (nr < biggest && nr > next_biggest) {
      next_biggest = nr; // new second biggest value
    }
  }
  console.log(next_biggest);
  return next_biggest;
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 12, 7, 8, 9, 10]));
