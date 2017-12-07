var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guesses = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event){

	//Determines which key is pressed.
	var playerGuess = event.key;

	//Radomly chooses letter
	var letter = letters[Math.floor(Math.random() * letters.length)];

	//Determines if player guessed right letter.
	//Player gets 10 guesses. After 10 guesses, player loses.
	for (var i = 1; i > 0; i--){
		guessesLeft--;
		guesses = playerGuess + " " + guesses;

		if (playerGuess === letter){
			wins++;
		} else if (guessesLeft === 0) {
			losses++;
			guessesLeft = 10;
			guesses = "";
		}
	
	}

	//wins, losses, guesses left and letters guessed gets updated
	var winner = document.getElementById("wins");
	winner.innerHTML = wins;

	var loser = document.getElementById("losses");
	loser.innerHTML = losses;

	var remaining = document.getElementById("guessesLeft");
	remaining.innerHTML = guessesLeft;

	var guessed = document.getElementById("guesses");
	guessed.innerHTML = guesses;
}



