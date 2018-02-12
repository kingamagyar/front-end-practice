//returns the array in reverse order
function printReverse(array) {
	var newArray = [];
	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

//returns true if 2 elements in the array are identical
function isUniform(array) {
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] === array[j]) {
				return true;
			}
		}
	}
	return false;
}

//returns the sum of the numbers in the array
function sumArray(array) {
	var sum = 0;
	array.forEach(function(element) {
		sum += element;
	});
	return sum;
}

//returns the highest number in the array
function max(array) {
	var maxNumber = array[0];
	
	for (var i = 0; i < array.length; i++) {
		if (array[i] > maxNumber) {
			maxNumber = array[i];
		}
	}
	return maxNumber;
}