window.addEventListener('load', init);

// Globals

let selected = document.getElementById("diff");
let value = selected.value;
let time = Number(value)+1;
// console.log('time', time)
function changeVal() {
    value = document.getElementById("diff").value;
    document.getElementById("seconds").innerHTML = value;
    let sel = document.getElementById("diff");
    let text = sel.options[sel.selectedIndex].text;
    value = Number(value)+1
    if (text == 'Easy') {
        time = value
        startMatch()
    } else if (text == 'Medium') {	
        time = value
        startMatch()
    } else if (text == 'Hard') {
        time = value
        startMatch()
    }
    console.log(value)
}

// To change level
// const value = levels.easy;


let score = 0;
let isPlaying;

console.log(time)

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize Game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = value;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = value + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1, display 0
    if (score < 0) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = 'Wrong Word';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}