let text_field = document.getElementById("mail")
let answer_field = document.getElementById("answer")


text_field.onkeydown = function() {
    let text = text_field.value;
    if (!text.includes("@")){
        answer_field.innerText = "Il manque l'arobase"
    } else {
        text_split = text.split("@")
        if (!text_split[1].includes(".")){
            answer_field.innerText = "Assurez-vous qu'il y ait au moins un point derrière l'arobase"
            return
        } else {
            answer_field.innerText = "L'email que vous avez saisi est valide !"
        }
    }
}