let hours;
let minutes;
let seconds;
let timePlusOneSec;
let NewTime_html = document.getElementById("timePlusOneSec");

button_html.addEventListener("click", plusOneSec, false);

function plusOneSec(){

    //On récupère les valeurs entrées dans le html.
    hours_input = parseInt(document.getElementById("hour").value);
    console.log(hours_input);

    minutes_input = parseInt(document.getElementById("minutes").value);
    console.log(minutes_input);

    seconds_input = parseInt(document.getElementById("seconds").value);
    console.log(seconds_input);

    seconds_input += +1;
    console.log(seconds_input);

    //Algo  pour que remettre à zéro à 60s, 60min et ajouter 1min et 1h. 24h=>remet h à zéro 
    if (seconds_input == 60) 
    {
        seconds_input = 0;
        minutes_input += +1;
    }
    if (minutes_input == 60)
    {
        minutes_input = 0;
        hours_input += +1;
    }
    if (hours_input = 24)
    {
        hours_input = 0;
    }

    console.log(seconds_input);
    console.log(minutes_input);
    console.log(hours_input);

    // Variable qui récupère le message qui annonce l'heure après avoir ajouté 1 seconde.
    timePlusOneSec = '<div class = "alert alert-info" role="alert">Dans une seconde il sera ' + hours_input + ' heures, ' + minutes_input + ' minutes et ' + seconds_input + ' secondes</div>';

    // 
    NewTime_html.innerHTML = timePlusOneSec;

    console.log(NewTime_html);

}