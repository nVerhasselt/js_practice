
let fullText = {}
let bad_choices = []
let good_choices = []
let partial_word = []

let word_field = document.getElementById("word")
let letter_field = document.getElementById("letter")
let sub_btn = document.getElementById("submit")
let alert_field = document.getElementById("alert")
let good_field = document.getElementById("good")
let bad_field = document.getElementById("bad")
let end_field = document.getElementById("end_message")
let img = document.getElementById("img")

// Requête pour ouvrir le fichier JSON

let requestURL = './src/index_2.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();
request.onload = function(){
    fullText = request.response
}

// Fonction qui va retourner un entier aléatoire entre 0 et le nombre de mots total du fichier .json

function getRandom(){
    return Math.floor(Math.random() * (fullText.length))
}

// Va retourner un boolean en fonction de si la lettre a déjà été employée, ou de si elle est valide

function checkLetter(letter){
    if(String(letter).match(/[A-z]/g) && String(letter).length === 1){
        if(good_choices.includes(letter) || bad_choices.includes(letter)){
            alert_field.innerText = "Vous avez déjà essayé cette lettre !"
            return false
        } else {
            alert_field.innerText = " "
            return true
        }
    }
    alert_field.innerText = "Entrée incorrecte"
    return false
}

// Va remplacer toutes les lettres du mot à trouver par des "_"

function cover(word){
    for(letter in word){
        partial_word.push("_")
    }
    word_field.innerText = partial_word.toString().replace(/\,/g, "")
}

// Obligé de faire tout dans le window.onload, car le reste du script s'exécute avant que la requete JSON se termine

window.onload = function(){
    word = fullText[getRandom()] // Prend un mot au hasard dans l'objet tiré du fichier JSON
    fullText = []                // Vide le fullText pour faire de la place et éviter de stocker 8500 mots dans la RAM
    cover(word)
    // console.log(word) // -> pour "tricher" et voir le mot quand même dans la console, pour débuguer
    bad_choices = []
    good_choices = []

    let lives = 9

    sub_btn.onclick = function(){
        let letter_value = String(letter_field.value).toLowerCase();                    // Récupère la lettre et vide le champ de formulaire
        letter_field.value = ""

        if(checkLetter(letter_value)){                                                  // Si la lettre n'a pas été encore utilisée           
            if (word.includes(letter_value)){                                           // Et si elle est présente dans le mot qu'on cherche :
                good_choices.push(letter_value)                                         // On l'ajoute à l'array good_choices, qu'on affiche ensuite
                good_field.innerText = `Bonnes lettres : ${good_choices}`
   
                let positions = []                                                      // Bout de code qui récupère toutes les positions d'une lettre au cas où elle est présente plusieurs fois
                let index = word.indexOf(letter_value)
                while(index!=-1){
                    positions.push(index)
                    index = word.indexOf(letter_value, index+1)
                }

                for(let position in positions){                                         // Va récupérer la valeur des lettres (et pas leur index) et les mettre au bon endroit de l'array "partial_word"
                    partial_word[positions[position]] = letter_value
                }                                

                word_field.innerText = partial_word.toString().replace(/\,/g, "")       // Affiche le mot avec les lettres trouvées révélées

            } else {                                                                    // Si la lettre n'est pas dans le mot :
                bad_choices.push(letter_value)
                lives--
                bad_field.innerText = `Mauvaises lettres : ${bad_choices}`
                img.src = `src/img/${8-lives}.png`
            };

            if (lives <= 0){                                                               // Quand plus de vies :
                sub_btn.innerText = "Réessayer"
                sub_btn.onclick = function(){
                    location.reload()
                }
                end_field.style.display = "block"
                end_field.style.color = "darkred"
                end_field.innerText = "Désolé, c'est perdu ! Voulez vous retenter votre chance ?"
                word_field.innerText = word.toString().replace(/\,/g, "")
                word_field.style.color = "darkred"                
            }

            if (!partial_word.includes("_")){                                               // Si le mot affiché n'a plus de "_", donc si on a gagné :
                sub_btn.innerText = "Réessayer"
                sub_btn.onclick = function(){
                    location.reload()
                }
                end_field.style.display = "block"
                end_field.style.color = "green"
                end_field.innerText = "Félicitation, c'est gagné ! Voulez vous retenter votre chance ?"
                word_field.style.color = "green"                
                
            }
        }
    }
}

