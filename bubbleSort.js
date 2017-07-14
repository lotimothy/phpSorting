function bubbleSort(arr) {
  var flag = true;
  while (flag) {
    flag = false; // stop if sorted
    for (var i=0; i<arr.length-1; i++) {
      if (arr[i]>arr[i+1]) { // keep bubbling item up
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        flag = true;
      }
    }
    console.log(arr, 'bubble up', temp);
  }
  return arr;
}

var testArray = [];
for (var ran=0; ran<10; ran++) {
  testArray[ran] = Math.floor(Math.random()*100);
}

console.log(testArray);
bubbleSort(testArray);
console.log(testArray);
