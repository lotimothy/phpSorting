var testArray = [];
for (var ran=0; ran<10; ran++) {
  testArray[ran] = Math.floor(Math.random()*100);
}

function insertionSort(arr){
	for (var i=1; i<arr.length; i++) {
		var element = arr[i]; // elmeent is what will be inserted
		var j = i; // set j to same place as i
		while (j > 0 && arr[j-1] > element) { // shuffle to make space for j
			arr[j] = arr[j-1];
			j = j-1;
		}
		arr[j] = element; // set j to element
		console.log(arr, 'inserted', element);
	}
  return arr;
}

console.log(testArray);
insertionSort(testArray);
console.log(testArray);
