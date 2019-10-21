findmissingnumber([5, 2, 6, 1, 3]);

function findmissingnumber(arr) {
  n = arr.length + 1;
  let sum = 0;
  let esm = (n * (n + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(esm - sum);
}
