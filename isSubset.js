// litiral approach

function isSubset (array, sub) {
  var result = true;
  var list = {};
  // iterate through the array and add every item to the list obj
  // sample structure of list when given an arr of [1, "1", "1", 1]:
  //   list = {
  //       "1": {
  //           string: 2,
  //           number: 2
  //       }
  //   }
  array.forEach((item) => {
    if (list[item]) {
      if (list[item][typeof item]) {
        list[item][typeof item]++;
      } else {
        list[item][typeof item] = 1;
      }
    } else {
      list[item] = {};
      list[item][typeof item] = 1;
    }
  });

  for (let i = 0; i <= sub.length - 1; i++) {
    let currentSub = sub[i];
    let currentType = typeof sub[i];
    list[currentSub] && list[currentSub][currentType] ? list[currentSub][currentType]-- : result = false;
  }
  return result;
}

isSubset([1, 2, 3, "4", 4],  ["2", "3"]);
