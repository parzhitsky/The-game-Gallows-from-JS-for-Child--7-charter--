var words = [
    "cat", "dog"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    /*массив з літерами відповіді*/

}

var remainingLetters = word.length; //(літери, які залишились невгаданими)
var numberOfattempts = word.length*2; //кількість спроб

while (remainingLetters > 0 && numberOfattempts >0) {
    alert(answerArray.join(" ")); //перетворюємо масив з рисочками на рядок
    var guess = prompt("Guess a letter, or click Cancel to stop playing.")

    /*(введена літера)*/
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter")
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            } else if (guess === word[j].toUpperCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;

            } 
        }
    }
    numberOfattempts--; 
}

alert(answerArray.join(" ")); //відповідь
alert("Good job! the answer was " + word);

