let email_input;
let cutEmail;
let arobasePosition; 
let Message_html = document.getElementById('message');


//Pour que la vérif se fasse uniquement lorsque l'on click sur entrer.
/*document.getElementById('emailToCheck').addEventListener('keydown',(keyboardEvent) => {
    if(keyboardEvent.code == 'Enter'){
        checkEmail();
    }
}, false);
*/

//Permet de lancer l'event après relachement de la touche du clavier.
document.getElementById('emailToCheck').addEventListener('keydown', checkEmail, false);

function checkEmail() {
   
    // On récupère l'email entré dans le html.
    email_input = document.getElementById("emailToCheck").value;
    console.log(email_input);

    //Vérifier si l'adresse entrée contient un @ et un point.
    if (email_input.includes('@') && email_input.includes('.')) {

        //Si oui, on determine où se trouve l'@,
        arobasePosition = email_input.indexOf('@');

        //On coupe l'adresse au niveau de l'@.
        cutEmail = email_input.substring(arobasePosition);

        //Pour vérifier si le point est situé dans cette partie.
        if (cutEmail.includes(".")) {

            //On affiche le message disant que l'adresse mail est valide
            Message_html.innerHTML = `<div class = "alert alert-success" role="alert">L'adresse mail est valide.</div>`
        }
    }

}

