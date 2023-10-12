let age_field = document.getElementById("age")
let permis_field = document.getElementById("permis")
let accident_field = document.getElementById("accident")
let anciennete_field = document.getElementById("anciennete")
let submit_btn = document.getElementById("submit")
let results = document.getElementById("results")
let color = document.getElementById("color")

submit_btn.onclick = function(){
    if (!age_field.checkValidity() || !permis_field.checkValidity() || !accident_field.checkValidity() || !anciennete_field.checkValidity()){
        alert("Valeurs erronnées")
        return
    }
    let age = age_field.value;
    let permis = permis_field.value;
    let accident = accident_field.value;
    let anciennete = anciennete_field.value;

    let points = 0;
    if (age >= 25) {
        points++
    }
    if (permis >= 2){
        points++
    }
    points = points - accident
    if (points >= 0 && anciennete > 1){
        points++
    }

    switch(points){
        case 0:
            results.innerText = "Au vu de votre profil, vous pourrez bénéficier du tarif rouge !"
            color.style.backgroundColor = "red"
            break
        case 1:
            results.innerText = "Vu vos antécédents, le tarif orange est décidément fait pour vous !"
            color.style.backgroundColor = "orange"
            break
        case 2:
            results.innerText = "Nous pensons que le tarif vous correspondant le mieux est le vert !"
            color.style.backgroundColor = "green"
            break
        case 3:
            results.innerText = "Devant vos compétences en conduite, nous sommes fiers de vous accorder le tarif bleu !"
            color.style.backgroundColor = "blue"
            break
        default:
            results.innerText = "Etant donné ces informations, nous sommes au regret de vous annoncer que vous n'êtes pas assurable."
            color.style.backgroundColor = "white"
            break
    }
}