var testArray1 = [];
for (var ran=0; ran<10; ran++) {
  testArray1[ran] = Math.floor(Math.random()*100);
}

var testArray2 = [];
for (var ran=0; ran<10; ran++) {
  testArray2[ran] = Math.floor(Math.random()*100);
}

function mergeSort(arr1, arr2){
  var newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
    } else {
      newArr.push(arr2[0]);
      arr2.shift();
    }
  }
  if (arr1.length) {
    for (var i=0; i<arr1.length; i++) {
      newArr.push(arr1[i]);
    }
  }
  if (arr2.length) {
    for (var j=0; j<arr2.length; j++) {
      newArr.push(arr2[j]);
    }
  }
  console.log(newArr);
  return newArr;
}

insertionSort(testArray1);
selectionSort(testArray2);
console.log(testArray1, testArray2);
mergeSort(testArray1, testArray2);


function insertionSort(arr){
	for (var i=1; i<arr.length; i++) {
		var element = arr[i]; // elmeent is what will be inserted
		var j = i; // set j to same place as i
		while (j > 0 && arr[j-1] > element) { // shuffle to make space for j
			arr[j] = arr[j-1];
			j = j-1;
		}
		arr[j] = element; // set j to element
	}
  return arr;
}

function selectionSort(arr){
	for (var i=0; i<arr.length; i++) {
		var min = i;
		for (var j=i+1; j<arr.length; j++) {
			if (arr[j]<arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var temp = arr[min];
			arr[min] = arr[i];
			arr[i] = temp;
		}
	}
  return arr;
}
