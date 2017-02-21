function binarySearch (array, target) {
  
  function findIt(low, high) {
    if(low > high) {
      return - 1;
    }
    var mid = Math.floor((low + high) / 2)
    
    if(array[mid] === target) {
      return mid;
    } else if(array[mid] > target) {
      return findIt(low, mid - 1);
    } else {
      return findIt(mid + 1, high);
    }
  };
  
  return findIt(0, array.length - 1);
}

/*

Input                       Output
array:
[ 5 ]                         -1
target:
4

array:
[ 11, 12, 13, 14, 15 ]         0
target:
11
array:
[ 11, 12, 13, 14, 15 ]         1
target:
12
array:
[ 11, 12, 13, 14, 15 ]         2
target:
13
array:
[ 11, 12, 13, 14, 15 ]         3
target:
14
array:
[ 11, 12, 13, 14, 15 ]         4
target:
15
array:
[ 11, 12, 13, 14, 15 ]        -1
target:
16
 */

// non-recursive version
var binarySearch = function (array, target) {
  var low = 0, high = array.length - 1, mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }    
  }  
  return -1;
};
