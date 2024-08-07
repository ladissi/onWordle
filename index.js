import { words } from './wordList.js'
// import confetti from 'canvas-confetti'

let resultEl = document.getElementById("result-el")
let titleEl = document.getElementById("title-el")
console.log("defined wordexists as blank in beginning of doc")

let wordExists = 
console.log("this is title element" + titleEl) 
// const splitWordleListMini = words.slice(0,5)

submitButton.addEventListener('click', wordleSearch);

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
        if (word == words[i]) {
            wordExists = true
            console.log("in if statement")
            break
        }
    }
    updateText(wordExists)
}

function updateText(val) {
    const inputEl = document.getElementById("userInput").value
    let word = inputEl.toLowerCase()
    titleEl.textContent = `Has ${word} appeared in wordle?`
    console.log("val of word exists in update text func: " + val)
    if (val) {
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
            gravity: 0.8,
            ticks: 300
          

        })
    }
}