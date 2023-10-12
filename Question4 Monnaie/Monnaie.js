let moneyOwed;
let moneyReceived;
let tenEuros;
let fiveEuros;
let oneEuros;
let changeMessage_html = document.getElementById("changeMessage");

button_html.addEventListener("click", calculateChange, false);

function calculateChange() {

    //On récupère les valeurs entrées dans le html.
    moneyOwed_input = document.getElementById("totalToPay").value;
    console.log(moneyOwed_input);

    moneyReceived_input = document.getElementById("givenMoney").value;
    console.log(moneyReceived_input);

    change = moneyReceived_input - moneyOwed_input;
    console.log(change);

    //J'initialise mes variables
    tenEuros = 0;
    fiveEuros = 0;
    oneEuros = 0;

    //Algo tant que change >= 10, +1 billet de 10, -10 à rendre. la boucle recommence tant que change >=10 avant de passer à la suite. 
    while(change >= 10) {
        tenEuros = tenEuros + 1;
        change = change - 10;
    }

    while(change >= 5) {
        fiveEuros = fiveEuros + 1;
        change = change - 5;
    }

    while(change >= 1) {
        oneEuros = oneEuros + 1;
        change = change - 1;
    }

    console.log(tenEuros);
    console.log(fiveEuros);
    console.log(oneEuros);

    //Injection message avec les valeurs dans le HTML en utilisant la méthode des ` ${variable} ` pour la concaténation.
    changeMessage_html.innerHTML = `<div class = "alert alert-info" role="alert">Il faudra rendre ${tenEuros} billet(s) de 10 euros, ${fiveEuros} billet(s) de 5 euros et ${oneEuros} pièce(s) de 1 euros.</div>`;

    console.log(changeMessage_html);
}