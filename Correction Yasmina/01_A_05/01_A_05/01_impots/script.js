let sex_input = document.getElementById("sex")
let age_input = document.getElementById("age")
let submit_btn = document.getElementById("submit")
let answer = document.getElementById("answer")

submit_btn.onclick = function() {
    let sex_value = sex_input.options[sex_input.selectedIndex].value;
    let age_value = age_input.value
    if(check(age_value, sex_value)){
        answer.innerText = "Saisie invalide."
    } else {
        if (calculations(sex_value, age_value)) {
            answer.innerText = "Félicitations, vous êtes éligible à l'impôt !"
        } 
        else if (!calculations(sex_value, age_value)) {
            answer.innerText = "Dommage, pas d'impôt pour vous cette année."
        }
    }    
}

function check(age, sex){
    if(age.match(/[^0-9]/) || age.length == 0 || sex == ""){
        return true
    }
    else return false
}

function calculations(sex, age) {
    switch (sex) {
        case "homme":
            if (age >= 20) {
                return true
            } else {
                return false
            }
        case "femme":
            if (age >= 18 && age <= 35) {
                return true
            } else {
                return false
            }
        default:
            alert("Erreur : champs incorrects")
            break
    }
}