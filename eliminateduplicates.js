var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
// // //var arr=[1,2,3,4,2,3,4];
eliminateduplicateArray(names);

function eliminateduplicateArray(names) {
  let obj = {};

  for (let str of names) {
    if (obj[str]) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }
  }
  let result = [];
  for (let str in obj) {
    if (obj[str] < 2) {
      result.push(str);
    }
  }
  console.log(result);  
}
