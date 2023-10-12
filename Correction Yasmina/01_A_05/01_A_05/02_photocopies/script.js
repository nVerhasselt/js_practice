let input_nbr = document.getElementById("number")
let submit_btn = document.getElementById("submit")
let results = document.getElementById("results")

submit_btn.onclick = function() {
    let nbr_photo = input_nbr.value
    results.innerText = `Pour ${nbr_photo} photocopies, cela vous coûtera la bagatelle de ${calculations(nbr_photo)} € !`
}

function calculations(nbr) {
    if (nbr <= 10) {    
        return nbr * 0.1
    }
    else if (nbr >= 10 && nbr <= 30) {
        return 1 + (nbr-10) * 0.09
    }
    else {
        return 2.8 + (nbr-30) * 0.08
    }
}