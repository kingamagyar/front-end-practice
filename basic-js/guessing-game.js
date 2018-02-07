var secretNumber = 4;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);


if (guess === secretNumber) {
	alert("Congrats, you got it right!");
} else if (guess > secretNumber) {
	alert("Too high, guess again.");
} else {
	alert("It's too low, guess again.");
}