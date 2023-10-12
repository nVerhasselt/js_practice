let mdp_input;
let compteur;
//Utilisation des RegExp
let regexMaj = new RegExp("[A-Z]");
let regexMin = new RegExp("[a-z]");
let regexNum = new RegExp("[0-9]");
let regexSpe = new RegExp("[\\W]");

//variable qui permet d'injeter le message dans le html
let message_html = document.getElementById('message');


//permet de lancer la fonction au moment de la pression de la touche du clavier.
document.getElementById("mdp").addEventListener('keyup', evaluateMdp, false);


//Fonction qui évalue la sécurité du mot de passe.
function evaluateMdp() {

    //On initialise compteur à 0.
    compteur = 0;

    //On récupère le mdp dans l'input html.
    mdp_input = document.getElementById("mdp").value;
    console.log(mdp_input);

    if (regexMaj.test(mdp_input)) {
        // .test vérifie s'il y a une correspondance entre un texte et une expression rationnelle. Elle retourne true en cas de succès et false dans le cas contraire.
        compteur = compteur + 1;
    }
    if (regexMin.test(mdp_input)) {
        compteur = compteur + 1;
    }
    if (regexNum.test(mdp_input)) {
        compteur = compteur + 1;
    }
    if (regexSpe.test(mdp_input)) {
        compteur = compteur + 1;
    }
    if (mdp_input.length < 8) {
        compteur = compteur - 1;
    }

    switch (compteur) {
        case 4: message_html.innerHTML = `<div class = "alert alert-success" role="alert">Très sécurisé.</div>`
        break;
        case 3: message_html.innerHTML = `<div class = "alert alert-success" role="alert">Sécurisé.</div>`
        break;
        case 2: message_html.innerHTML = `<div class = "alert alert-warning" role="alert">Moyennement sécurisé.</div>`
        break;
        case 1: message_html.innerHTML = `<div class = "alert alert-danger" role="alert">Dangereux.</div>`
        break;
        case 0: message_html.innerHTML = `<div class = "alert alert-danger" role="alert">Dangereux.</div>`
        break; 
        default:
            message_html.innerHTML = ``;
    }
}