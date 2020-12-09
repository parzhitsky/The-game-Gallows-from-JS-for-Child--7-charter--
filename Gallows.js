var words = [
    "cat", "dog"
];
function pickWord() {
    return words[Math.floor(Math.random() * words.length)];

}; // отримуємо слово з масиву з відповідями
var word = pickWord();

/*function setupAnswerArray(word) {
   
   
};
*/

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    
}


var remainingLetters = word.length; //(літери, які залишились невгаданими)
var numberOfattempts = 3;//word.length * 2; //кількість спроб

while (remainingLetters > 0 && numberOfattempts > 0) {
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
