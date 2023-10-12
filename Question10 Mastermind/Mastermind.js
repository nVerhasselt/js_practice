//#region variables
let combination = [];
let fakeCombination = [];
let proposition = [];
let proposition_button = document.getElementById("proposition_button");
let rightPlace = 0;
let rightColour = 0;
let proposition_check = document.getElementById("proposition_check");
let proposition_list = document.getElementById("proposition_list");
let game = document.getElementById("game");
//variables pour color to select
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
//variable manche
let handsCounter = 0;
//bouton roujouer
let replay_button = document.getElementById("initialize");
let start_again_button = document.getElementById("start_again");

//#endregion variables


//#region Events
red.addEventListener("click", () => getNextInputProposition(0));
green.addEventListener("click", () => getNextInputProposition(1));
yellow.addEventListener("click", () => getNextInputProposition(2));
blue.addEventListener("click", () => getNextInputProposition(3));


// Lance la fonction à l'ouverture de la page.
window.addEventListener('load', newGame, false);

replay_button.addEventListener('click', initialize, false);
start_again_button.addEventListener('click', initialize, false);


//#endregion Events


function generateAnumber(Max) {
  // The Math.floor() method rounds a number DOWN to the nearest integer.
  // Random returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.you can scale your range.
  // Gives a float between 0 and 1 and multiplies it by Max. Rounds down the result and returns it.
  return Math.floor(Math.random() * Max);
}

function initialize() {
  document.getElementById("win_message").style.display = "none";
  document.getElementById("loose_message").style.display = "none";
  handsCounter = 0;
  document.getElementById("hands").remove();
  newGame();
}

function newGame() 
{
  handsCounter = 0;

    for (let i = 0; i < 4; i++) {
      combination.push(generateAnumber(4));
      console.log(`computer combination: ${combination}`);  
    }
    displayHands();
}


//Affiche 12 rangées de propositions vides
function displayHands()
{
    // Créer l'élément principal
  let handsDiv = document.createElement('div');
  handsDiv.setAttribute('id', 'hands');

  // Ajouter 12 listes de propositions à l'élément principal
  for (let i = 0; i < 12; i++) {
    let propositionList = document.createElement('div');
    propositionList.setAttribute('id', 'proposition_list');
    handsDiv.appendChild(propositionList);

    // Ajouter le numéro de proposition à la liste de propositions
  let propositionNumber = document.createElement('span');
  propositionNumber.textContent = i + 1 + ". ";
  propositionList.appendChild(propositionNumber);

    // Ajouter les points à la liste de propositions
    for (let j = 0; j < 4; j++) {
      let dot = document.createElement('div');
      dot.setAttribute('class', 'dot');
      propositionList.appendChild(dot);
    }

    // Ajouter le conteneur de résultats à la liste de propositions
    let matchingResult = document.createElement('div');
    matchingResult.setAttribute('class', 'matching_result');
    propositionList.appendChild(matchingResult);

    // Ajouter les points de résultat à la liste de propositions
    for (let k = 0; k < 4; k++) {
      let matchingDot = document.createElement('div');
      matchingDot.setAttribute('class', 'matching_dot');
      matchingResult.appendChild(matchingDot);
    }
  }
  //console.log(handsDiv);
  // Ajouter l'élément principal à la page
  game.appendChild(handsDiv);
}


// quand on click une pastille
function getNextInputProposition(clickedColorNumber)
{
  console.log(clickedColorNumber);
  proposition.push(clickedColorNumber);

  // Aller écrire la pastille[mancheIndex] avec la couleur de clickedColorNumber

  // toutes les manches
  document.getElementById("hands")
    // je prends la manche acutelle (premier enfant de id="hands").
    .children[handsCounter]
    // la pastille a l'index correspondant a la couleur (enfant numéro "indice" + 1(car numérotation compte pour un enfant))
      .children[proposition.length]
      // j'assigne l'attribut css correspondant
        .setAttribute('id', getColorNameByclickedColorNumber(clickedColorNumber));

  if(proposition.length == 4)
  {
    validateProposition();
  }

  if(handsCounter >= 12) {
    document.getElementById("loose_message").style.display = "block";
  }
}

//Fonction qui fait la correspondance entre chiffres et couleurs
function getColorNameByclickedColorNumber(clickedColorNumber) {
  if (clickedColorNumber == 0){
    return "red";
  }
  if (clickedColorNumber == 1){
    return "green";
  }
  if (clickedColorNumber == 2){
    return "yellow";
  }
  if (clickedColorNumber == 3){
    return "blue"
  }
}


function validateProposition() 
{
  console.log("making proposition");

  console.log(`Player propostion is: ${proposition}`);

  checkCombinations();

  proposition = [];

  handsCounter += 1;
  // incrémenter un 'index' de la manche en cours
}



function checkCombinations(){

  for( let i = 0; i < combination.length; i++) {
    fakeCombination[i] = combination[i];
  }
  
  rightColour=0;
  rightPlace = 0;

  for (let j = 0; j < 4; j++) 
  {
    console.log("Proposition = " + proposition[j] + " fakeCombination " + fakeCombination[j]);

    if (proposition[j] == fakeCombination[j])
    {
      proposition[j] = -1;
      fakeCombination[j] = -2;
      rightPlace = rightPlace + 1;


      console.log("rightPlace");
    }
    else 
    {
      for (let k = 0; k < 4; k++) 
      {
        if ((proposition[j] == fakeCombination[k]) && (fakeCombination[k] != proposition[k])) 
        {
          proposition[j] = -3;
          fakeCombination[k] = fakeCombination[k] -4;
          rightColour = rightColour + 1;

          console.log("rightColour");
        }
      }
    }

        let index = 0;
    for (let i = 0; i < rightPlace; i++) {
      document.getElementById("hands")
    // je prends la manche acutelle (premier enfant de id="hands").
    .children[handsCounter]
    // la pastille a l'index correspondant a la couleur (enfant numéro "indice" + 1(car numérotation compte pour un enfant))
      .children[5].children[index]
      // j'assigne l'attribut css correspondant
        .setAttribute('id', 'right_place_color');
        index++;
    }

    for (let i = 0; i < rightColour; i++) {
      document.getElementById("hands")
      // je prends la manche acutelle (premier enfant de id="hands").
      .children[handsCounter]
      // la pastille a l'index correspondant a la couleur (enfant numéro "indice" + 1(car numérotation compte pour un enfant))
      .children[5].children[index]
        // j'assigne l'attribut css correspondant
          .setAttribute('id', 'right_color_color');
          index++;
    }
  }

  if(rightPlace == 4) {
    document.getElementById("win_message").style.display = "block";
  }

  console.log(`place et couleur ok: ${rightPlace}`);
  console.log(`bonne couleur, mauvaise place: ${rightColour}`);
}  
