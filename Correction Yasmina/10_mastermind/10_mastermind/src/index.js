const colors = ["white", "gold", "darkorange", "darkred", "deeppink", "indigo", "yellowgreen", "dodgerblue"]      // Le code est fait tel qu'on puisse changer les couleurs par d'autres, et tout se mettra à jour
const palette = document.querySelectorAll(".color_btn");
const resBtn = document.getElementById("reset")
const subBtn = document.getElementById("submit")
const msgBox = document.querySelector(".box1-2")
let main_combination = []
let activeLine = {                                     
     // Objet principal qui va contenir toutes les méthodes et propriétés utiles pour la suite
    position : 0, // Equivaut au compteur de vies
    matchingDiv : "", // Element du DOM qui correspond à la ligne active que l'user va compléter
    matchingCounter :"",  // Element du DOM qui correspond au compteur de bonnes réponses de la ligne active
    combination : [],
    initialize(){  
        // Méthode qui va reset la combinaison de l'user et mettre en surbrillance les éléments du DOM qui correspondent à la ligne active
        activeLine.combination = []
        activeLine.matchingDiv = document.querySelector(`.box.box${14 - activeLine.position}`)
        activeLine.matchingDiv.style.border = "#006AE8 solid 2px";
        activeLine.matchingDiv.style.boxShadow = "00px 00px 10px #006AE8";
        activeLine.matchingCounter = document.querySelector(".center").querySelector(`.box.box${14 - activeLine.position}`)
    },
    move(){                             
        // Méthode qui va enlever la surbrillance de la ligne et décaler la ligne active d'un cran vers le haut
        activeLine.matchingDiv.style.border = "none";
        activeLine.matchingDiv.style.boxShadow = "none";
        activeLine.position++       
    },
    empty(){                            // Va reset les input utilisateurs, sous le capot comme visuellement
        for (let element in activeLine.combination) {
            activeLine.matchingDiv.querySelectorAll(".inbox")[element].style.backgroundColor = "transparent"
        }
        activeLine.combination = []
    },
    fill(e){                            // Va colorer les cases vides de la ligne active avec les input de l'user
        if(activeLine.combination.length != 4){
            activeLine.matchingDiv.querySelectorAll(".inbox")[activeLine.combination.length].style.backgroundColor = e.currentTarget.id
            activeLine.combination.push(e.currentTarget.id)
        }
    },
    win(){                              // Va afficher un message de victoire et permet de recharger la page pour une nouvelle partie
        msgBox.style.backgroundColor = "#3CB371"
        msgBox.querySelector("#messages").innerText = "Félicitations, c'est gagné !"
        document.getElementById("cover").style.display = "none"
        resBtn.style.display = "none"
        subBtn.innerText = "Réessayer"
        subBtn.onclick = function(){location.reload()}
    },
    lose(){                             // Va afficher un message de défaite et permet de recharger la page pour une nouvelle partie
        msgBox.style.backgroundColor = "#B33C7E"
        msgBox.querySelector("#messages").innerText = "Désolé, c'est perdu !"
        document.getElementById("cover").style.display = "none"
        resBtn.style.display = "none"
        subBtn.innerText = "Réessayer"
        subBtn.onclick = function(){location.reload()}
    },
    validate(){                         // Méthode principale qui va comparer la combinaison de l'user à la combinaison à trouver
        if(activeLine.combination.length != 4){
            msgBox.style.backgroundColor = "darkred"
            msgBox.querySelector("#messages").innerText = "Ligne incomplète !"
        } else {
            msgBox.style.backgroundColor = "#dddada"
            msgBox.querySelector("#messages").innerText = "Mastermind";
            let answers = (function () {                                // Méthode IIFE qui va se charger de la comparaison
                let fullMatch = 0
                let partialMatch = 0
                for(let mainColIndex in main_combination){ 
                    // Loops + conditions imbriqués pour voir si une couleur et correcte ET bien placée
                    for(let userColIndex in activeLine.combination){
                        if(main_combination[mainColIndex] == activeLine.combination[userColIndex]){
                            if(mainColIndex == userColIndex){
                                fullMatch++
                            } else {
                                partialMatch++
                            }
                            break
                        }
                    }
                }
                // Colorer le compteur avec les bonnes couleurs, rouge pour "couleur bien placée" et blanc pour "couleur présente mais mal placée"
                for(let i = 0; i < fullMatch; i++){
                    activeLine.matchingCounter.querySelectorAll(".inbox")[i].style.backgroundColor = "green"                    
                }
                for(let i = fullMatch; i < fullMatch + partialMatch; i++){
                    activeLine.matchingCounter.querySelectorAll(".inbox")[i].style.backgroundColor = "white"
                }
                return fullMatch  // Renvoie une valeur qui servira à déterminer l'étape à suivre
            })()
            if(answers === 4){                          // Si valeur renvoyée par l'IIFE === 4, le joueur a gagné
                activeLine.win()
            } else if (activeLine.position === 11){     // Si le joueur dépasse la dernière ligne, il a perdu
                activeLine.lose()
            } else {                                    // Sinon, on passe à la ligne suivante
                activeLine.move()
                activeLine.initialize()
            }            
        }
    }    
}

window.onload = function(){
    for(let i = 0; i < 8; i++){ // Loop qui va chercher les couleurs de l'array "colors" et les associer aux boutons de couleur
        palette[i].style.backgroundColor = colors[i]
        palette[i].id = colors[i]
        palette[i].addEventListener("click", activeLine.fill)
    }
    let j = 0 // Va prendre 4 couleurs aléatoires non identiques dans l'array couleurs et en faire la combinaison à trouver
    let combField = document.querySelector(".box.box1").getElementsByClassName("inbox")
    while(j < 4){
        let picked_color = colors[Math.floor(Math.random() * 8)]
        if(!main_combination.includes(picked_color)){
            main_combination[j] = picked_color
            combField[j].style.backgroundColor = `${main_combination[j]}`
            j++
        }
    }
    resBtn.addEventListener("click", activeLine.empty) // Assignation de leurs comportements aux boutons, et lancement du jeu à proprement parler
    subBtn.addEventListener("click", activeLine.validate)
    activeLine.initialize()
}