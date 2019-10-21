var arr = [
  { Id: "5", Name: "abc", Parent: "3", attr: "abc" },
  { Id: "2", Name: "abc", Parent: "1", attr: "abc" },
  { Id: "4", Name: "abc", Parent: "2", attr: "abc" },
  { Id: "3", Name: "abc", Parent: "2", attr: "abc" },
  { Id: "1", Name: "abc", Parent: "", attr: "abc" }
];

function convert(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    var obj = arr[i];
    obj.children = [];
    map[obj.Id] = obj;

    var parent = obj.Parent;
    if (!map[parent]) {
      map[parent] = {
        children: []
      };
    }
    map[parent].children.push(obj);
  }
  // return map["-"];

  for (var o in map) {
    console.log(map[o]);
  }
  // map.forEach(function(item){
  //   console.log(item);
  // })
}

console.log(JSON.stringify(convert(arr)));
