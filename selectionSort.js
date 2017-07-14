var testArray = [];
for (var ran=0; ran<10; ran++) {
  testArray[ran] = Math.floor(Math.random()*100);
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
    console.log(arr, 'selected', temp);
	}
  return arr;
}

console.log(testArray);
selectionSort(testArray);
console.log(testArray);
