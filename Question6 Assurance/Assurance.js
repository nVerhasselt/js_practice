//Je déclare mes variables
let button = document.getElementById("button");
let message_html = document.getElementById("message");
let insurancePrice;

//Je paramètre mon event au click
button.addEventListener("click", calculatePrice, false);

//Fonction qui calcule le tarif
function calculatePrice() {

    //Récupère valeurs dans les input html
    let age = document.getElementById('age').value;
    let licence = document.getElementById('yearsOfLicence').value;
    let loyalty = document.getElementById('insuranceLoyalty').value;
    let carCrash = document.getElementById('carCrashNumber').value;

    carCrash = 3 - carCrash;
    console.log(`points accidents: ${carCrash}`);

    //Initialise ma variable à 0.
    insurancePrice = 0;
    
    //Systèmes de points. Conditions pour comptabiliser les poionts.
    if (age < 25) {
        age = 0;
    }
    else {
        age = 1;
    }
    console.log(`points age: ${age}`);


    if (licence < 2) {
        licence = 0;
    }
    else {
        licence = 1;
    }
    console.log(`points licence: ${licence}`);

    if (loyalty < 5) {
        loyalty = 0;
    }
    else{
        loyalty = 1;
    }
    console.log(`points loyalty: ${loyalty}`);

    insurancePrice = age + licence + loyalty + carCrash;
    console.log(`total points: ${insurancePrice}`);

    if (insurancePrice < 2) {
        message_html.innerHTML = `<div class = "alert alert-dark" role="alert">La compagnie ne peut pas vous assurer.</div>`;
        return;
    }

    switch (insurancePrice) {
        case 6: message_html.innerHTML = `<div class = "alert alert-primary" role="alert">Vous bénéficiez du tarif bleu.</div>`
        break;
        case 5: message_html.innerHTML = `<div class = "alert alert-success" role="alert">Vous bénéficiez du tarif vert.</div>`
        break;
        case 4: message_html.innerHTML = `<div class = "alert alert-warning" role="alert">Vous bénéficiez du tarif orange.</div>`
        break;
        case 3: message_html.innerHTML = `<div class = "alert alert-danger" role="alert">Vous bénéficiez du tarif rouge.</div>`
        break;
        case 2: message_html.innerHTML = `<div class = "alert alert-dark" role="alert">La compagnie ne peut pas vous assurer.</div>`
        break; 
        default;
    }

    

}
