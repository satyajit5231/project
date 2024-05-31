// Generate a random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Check if the user's guess is correct, too high, or too low
function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number (${randomNumber}).`, 'green');
    } else if (guess < randomNumber) {
        setMessage('Too low! Try a higher number.', 'red');
    } else {
        setMessage('Too high! Try a lower number.', 'red');
    }
}

// Set message to display feedback to the user
function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}

// Generate random number between 1 and 100
const randomNumber = generateRandomNumber(1, 100);
