const words = ['financierement', 'economiquement', 'bringueballant', 'emmitouflaient', 'deboulonnaient'];
let currentWord = [];
let wordToFind;
let randomNumber;
let letter = document.getElementById("letter_input");
let attemptCounter;
let displayAttempt = document.getElementById("attemptLeft");
let message = document.getElementById("message");
button = document.getElementById("button");

letter.addEventListener("keyup",checkLetters);

function initialize(){

    // randomNumber takes the value generateAnumber
    randomNumber = generateAnumber(5);
    console.log(`random number is: ${randomNumber}`);

    // wordToFind takes the value of one of the table words according to randomNumber
    wordToFind = words[randomNumber];
    console.log(`The word is ${wordToFind}`);

    for(let i = 0; i < wordToFind.length; ++i){
    currentWord[i] = "_";
    }
    attemptCounter = 9;
    displayAttempt.innerHTML = `Il vous reste ${attemptCounter} tentatives!`;
    displayCurrentWord();
    letter.value = '';
}

// Generate a random number
function generateAnumber(Max) {
    // The Math.floor() method rounds a number DOWN to the nearest integer.
    // Random returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.you can scale your range.

    // Gives a float between 0 and 1 and multiplies it by Max. Rounds down the result and returns it.
    return Math.floor(Math.random() * Max);
}



function displayCurrentWord() {
    let word_html = '';
    for(let i = 0 ; i < currentWord.length ; i++) {
        word_html += currentWord[i] + ' ';
    }
    document.getElementById("currentWord").innerHTML = word_html;
}




function checkLetters(letter_keyboardevent) 
 {
    console.log(letter);

    let toCheckLetter = letter_keyboardevent.key;
    let foundletter = false;

    for(let i = 0; i < wordToFind.length; ++i){
         if(wordToFind[i] == toCheckLetter)
         {
            currentWord[i] = toCheckLetter;
            foundletter = true;
         }
    }

    displayCurrentWord();   

    //  regarder si mot trouvé 
    // condition victoire
    let foundword = true;
    for(let i = 0; i < wordToFind.length; ++i)
    {
        if(wordToFind[i] != currentWord[i]) 
        {
           foundword = false;
        }
    }
    
    if(foundword == true){
        // afficher gagné
        message.innerHTML = `Vous avez gagné!`
        button.innerHTML = `<button type="button" class="btn btn-default mt-3">Recommencez</button>`
        button.addEventListener("click", initialize,false);
        return;
    }

    // condition défaite
    if(attemptCounter == 0) {
       message.innerHTML = `Vous avez perdu!`;
       return; 
    }

    if(!foundletter){
        attemptCounter--;
    }
  
    displayAttempt.innerHTML = `Il vous reste ${attemptCounter} tentatives!`;
 
}