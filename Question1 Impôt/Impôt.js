let age;
let gender;
let button = document.getElementById("button");
let message = document.getElementById("message");

//Listener événement sur button, au click-> function checkImpo();
button.addEventListener("click", checkImpo, false);

function checkImpo() {
age = document.getElementById("age").value;
gender = document.getElementById("gender").value;

    // Condition SI (Genre==1 ET Age>20)
    if(gender == "H" && age >= 20) {
            //Instruction afficher message
            message.innerHTML = "<div class='alert alert-warning' role='alert'> Vous êtes imposable </div>";

            //2ème condition
        } else if((gender == "F" && age >= 18) && (gender == "F" && age <= 35)){
            //2ème instruction
            message.innerHTML = "<div class='alert alert-warning' role='alert'> Vous êtes imposable </div>";

        } else {
            message.innerHTML = "<div class='alert alert-success' role='alert'>Vous n'êtes pas imposable</div>";
        } 
    }

