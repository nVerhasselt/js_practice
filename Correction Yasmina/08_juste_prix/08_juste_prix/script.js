const img = document.getElementById("pic")
const obj_name = document.getElementById("objet_name")
const text_field = document.getElementById("guess")
const sub_btn = document.getElementById("submit")
const res_btn = document.getElementById("reset")
const results = document.getElementById("results")
const table = {
    1: "Un appareil photo argentique",
    2: "Une armure du moyen-âge tardif en parfait état",
    3: "Un buste en pierre de Marc Aurèle, empereur Romain",
    4: "Une cassette audio des Rolling Stones",
    5: "Un vinyle original de Jimmy Hendrix"
}
let counter = 9
let price = getPrice()

window.onload = function(){
    let source = getNumber()
    let price = getPrice()    
    img.src = `img/${source}.jpg`
    obj_name.innerText = table[source]
}

sub_btn.onclick = function(){
    user_value = text_field.value
    if (counter > 0){
        if(user_value == price){
            results.innerText = "Oui oui oui ! Vous avez trouvé... Le juste prix !"
            sub_btn.style.display = "none"
            res_btn.style.display = "block"
        } else {
            results.innerText = `Faux ! Ce n'est pas la bonne valeur !\nIl vous reste ${counter} essais.`
            counter--
        }
    } else if (counter <= 0){
        results.innerText = `Et c'est perdu ! Le juste prix était ${price} €`
        sub_btn.style.display = "none"
        res_btn.style.display = "block"
    }    
}

res_btn.onclick = function(){
    location.reload()
}

function getNumber(){
    return Math.floor(Math.random() * (5 - 1) + 1);
}

function getPrice(){
    return Math.floor(Math.random() * (100 - 1) + 1)
}