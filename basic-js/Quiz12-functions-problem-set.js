function isEven(num) {
	return num % 2 === 0;
}

function factorial(num) {
	var result = 1;
	for (var i = num; i > 0; i--) {
		result *= i;
	}
	return result;
}

function kebabToSnake(str) {
	return str.split('-').join('_');
}