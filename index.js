// import { words } from './wordList.js'
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, get } from 'firebase/database';
// import confetti from 'canvas-confetti'
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
let resultEl = document.getElementById("result-el")
let titleEl = document.getElementById("title-el")
let errorMessageEl = document.getElementById('error-message');
let wordExists ;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database()

let words = [];

function fetchWords() {
    const wordsRef = database.ref('words');
    wordsRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
            words = Object.values(snapshot.val());
            console.log("Words fetched successfully");
        } else {
            console.log("No words available");
        }
    }).catch((error) => {
        console.error("Error fetching words:", error);
    });
}

fetchWords();

// 
submitButton.disabled = true;

userInput.addEventListener('input', function() {
    // Enable submit button only if input length is exactly 5
    submitButton.disabled = this.value.length !== 5;
    errorMessageEl.textContent = '';

});

submitButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    
    if (userInput.value.length === 5) {
        // Proceed with submission logic here
        console.log('Submitting:', userInput.value);
        wordleSearch();
        userInput.value = ''
        userInput.focus();
        userInput.blur();
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        // Scroll to top to show result clearly
        window.scrollTo(0, 0);
        // Disable submit button again
        submitButton.disabled = true;
        // Your existing submission logic...
    } else {
        errorMessageEl.textContent = 'Please enter a 5-letter word.';
    }
});


function wordleSearch() {
    console.log("made wordexists false in wordlesearch")
    let wordExists = false
    // convert input value into variable to be used for comparison
    const inputEl = document.getElementById("userInput").value
    // converting input value into uppercase for comparison reasons
    let word = inputEl.toUpperCase()
    // check word is appropriately turned cap and captured
    console.log("this is word now: " + word)
    // run this loop as many times as there are items in wordList
    for (let i=0;i<words.length; i++) {
        // if this word of the list equals our word run this function
        if (word === words[i].toUpperCase()) {
            wordExists = true
            console.log("word found in list")
            break
        }
    }
    updateText(wordExists)
}

function updateText(inWordle) {
    const inputEl = document.getElementById("userInput").value
    let word = inputEl.toLowerCase()

    titleEl.innerHTML = `Has <span class="shimmer">${word}</span> appeared in wordle?`

    // titleEl.textContent = `Has ${<p class="shimmer">word</p>} appeared in wordle?`

    if (inWordle) {
        console.log("ran word exists")
        resultEl.textContent = "Yes"
    }
    else {
        console.log("ran word does not exist")
        resultEl.textContent = "No"
        confetti({
            particleCount:200,
            spread:50,
            origin: {y:0.9},
            velocity: 3,
            gravity: 0.7,
            ticks: 300
          

        })
    }
}