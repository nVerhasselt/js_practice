let amount_field = document.getElementById("amount")
let submit_btn = document.getElementById("submit")
let results = document.getElementById("results")
let p_10 = document.getElementById("bill_10")
let p_5 = document.getElementById("bill_5")
let p_piece = document.getElementById("piece")

submit_btn.onclick = function(){
    if(amount_field.value.length != 0 && !amount_field.value.match(/[\,\.]/)){
        let stuff = Number(amount_field.value)
        let money = calculations(stuff)
        results.innerText = "Voilà ce que je peux vous proposer : "
        if (money.bill_10) {
            p_10.innerText = `${money.bill_10} billets de 10€`
        }
        if (money.bill_5) {
            p_5.innerText = `${money.bill_5} billets de 5€`
        }
        if (money.rest) {
            p_piece.innerText = `${money.rest} pièces de 1€`
        }
    } else {
        alert("Veuillez rentrer un montant correct")
    }
}

function calculations(amount){
    switch (true) {
        case (amount >= 10):
            let bill_10 = Math.floor(amount/10)
            var rest = amount%10
            if (rest >= 5) {
                let bill_5 = Math.floor(rest/5)
                rest = amount%5
                return {bill_10, bill_5, rest}
            } else {
                return {bill_10, rest}
            }            
        case (amount <10 && amount >= 5):
            let bill_5 = Math.floor(amount/5)
            var rest = amount%5
            return {bill_5, rest}
        case (amount < 5):
            return amount
        default:
            alert("Une erreur s'est produite")
            break
    }
}