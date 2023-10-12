// 1 table with object names
const itemName = ['Une chaise gaming', 'Un costume d\'Halloween', 'Un barbecue', 'Une guitare', 'Un sac à main'];

// 1 table with the names of pictures
const itemPic = ['chaise.png', 'costume-haloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png'];

let proposedPrice;
let mysteryPrice;
let randomNumber;
let attemptCounter;
let picture = document.getElementById('object');
let pictureName = document.getElementById('objectName');
let button = document.getElementById('button_html');
let message = document.getElementById('message');
let displayAttempt = document.getElementById("attemptLeft");


function generateAnumber(Max) {
    // The Math.floor() method rounds a number DOWN to the nearest integer.
    // Random returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.you can scale your range.

    // Gives a float between 0 and 1 and multiplies it by Max. Rounds down the result and returns it.
    return Math.floor(Math.random() * Max);
}

// As we don't want to return 0, we add 1. + 1 allows to get to 100, otherwise it won't return more than 99. 
mysteryPrice = generateAnumber(100) + 1;
console.log(`price is ${mysteryPrice}`);

// As we have a table from 0 to 4, we put 5 and it will return from 0 to 4.
randomNumber = generateAnumber(5);

// Function which needs an argument (one of the table values), and returns the value in the html tag.
function displayPic(picture) {
    return '<img src="image-juste-prix/' + picture + '" class="img-fluid" width="30%" alt="image">';
}

// Selects an item from the table according to the random number, calls the function (which places it in the tag) and sends it to HTML. 
picture.innerHTML = displayPic(itemPic[randomNumber]);

// Takes the value of a name from the itemName table.
pictureName.innerHTML = itemName[randomNumber];

attemptCounter = 10;

// Message with value sent to HTML.
displayAttempt.innerHTML = "Il vous reste " + attemptCounter + " tentatives."; 

// Event on click.
button.addEventListener("click", checkProposition, false);

// check if proposition is equal, more or less than mysteryPrice, then sends the msg to html and remove 1 from attemptCounter.
function checkProposition(){
    proposedPrice = document.getElementById("priceProposition").value;
    if(attemptCounter == 0) {
        displayAttempt.innerHTML = "Il vous reste " + attemptCounter + " tentatives.";
        message.innerHTML = `Désolé, vous avez perdu!<br> Le juste prix était ${mysteryPrice} euros`; 
        button.disabled = true;
    }
    else {
        if(proposedPrice > mysteryPrice) {
            message.innerHTML = `C'est moins!`;
            attemptCounter--;
            displayAttempt.innerHTML = "Il vous reste " + attemptCounter + " tentatives.";
        }
        if(proposedPrice < mysteryPrice) {
            message.innerHTML = `C'est plus!`;
            attemptCounter--;
            displayAttempt.innerHTML = "Il vous reste " + attemptCounter + " tentatives.";
        }
        if(proposedPrice == mysteryPrice) {
            message.innerHTML = `<div class = "alert alert-success mt-3" role="alert"> C'est gagné!</div>`;
            attemptCounter--;
            displayAttempt.innerHTML = `<div class = "alert alert-success mt-3" role="alert">Vous avez trouvé en ${10 - attemptCounter} tentative(s)</div>`;
            button.disabled = true;
        }  
    }
}

