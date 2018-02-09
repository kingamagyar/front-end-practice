var age = prompt("What's your age?");

function ageChecker(age) {
	if (age < 0) {
		alert("Error! Your age cannot be a negative number!");
	} else if (age % 2 !== 0) {
		alert("Your age is odd!");
	}
	if (age == 21) {
		alert("Happy 21st birthday!");
	} 
	if (age % Math.sqrt(age) === 0 ) {
		alert("Your age is a perfect square!");
	}
}

ageChecker(age);