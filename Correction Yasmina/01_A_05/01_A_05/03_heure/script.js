let hour_field = document.getElementById("hour")
let minute_field = document.getElementById("minutes")
let second_field = document.getElementById("seconds")
let submit_btn = document.getElementById("submit")
let results = document.getElementById("results")

submit_btn.onclick = function(){
    if (!hour_field.checkValidity() || !minute_field.checkValidity() || !second_field.checkValidity()) {
        alert("Veuillez rentrer un format hh/mm/ss correct, je vous prie")
    } else {
        let hours = hour_field.value;
        let minutes = minute_field.value;
        let seconds = second_field.value;
        let time = calculations(hours, minutes, seconds)
        results.innerText = `Dans une seconde, il sera très exactement ${time.h} heures ${time.m} minutes et ${time.s} secondes !` 
    }
}

function calculations(h, m, s){
    s++
    if (s==60){
        s = 0
        m++
        if (m == 60){
            m = 0
            h++
            if (h == 24) {
                h = 0
            }
        }
    }
    return {h, m, s}
}