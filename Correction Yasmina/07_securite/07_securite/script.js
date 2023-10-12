let password_field = document.getElementById("password")
let results = document.getElementById("results")
let password = password_field.value;
let points = 0

password_field.oninput = function(){
    points = counting(password_field.value)
    switch (points) {
        case 0:
            results.innerText = "Aucune protection"
            results.style.backgroundColor = "var(--red)"
            break
        case 1:
            results.innerText = "Dangereux"
            results.style.backgroundColor = "var(--orange)"
            break
        case 2:
            results.innerText = "Moyen"
            results.style.backgroundColor = "var(--yellow)"
            break
        case 3:
            results.innerText = "Sécurisé"
            results.style.backgroundColor = "var(--second-green)"
            break
        case 4:
            results.innerText = "Très sécurisé"
            results.style.backgroundColor = "var(--main-green)"
            break
        default:
            results.innerText = ""
            results.style.backgroundColor = "white"
            break
    } 
}

function counting(password) {
    let points = 0
    if (password.match(/[^0-z\s]/)){
        points++
    }
    if(password.match(/[0-9]/)){
        points++
    }
    if(password.match(/[A-Z]/)){
        points++
    }
    if(password.length > 8){
        points++
    }
    return points
}