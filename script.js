console.log("I love myself");
//let motUtilisateur = prompt("Entrez un mot :")
//console.log(motUtilisateur)


let classe = 1

//Séléction classe
let listeInputRadio = document.querySelectorAll(".classe input");
for (let index = 0; index < listeInputRadio.length; index++) {
    listeInputRadio[index].addEventListener("change", (event) => {
        if (event.target.value === "1") {
            classe = 1  //Classe A
        } else {
            if (event.target.value === "2") {
                classe = 2  //Classe B
            } else { 
                classe = 3  //Classe C
            }
        }
        //console.log(classe)
    })
}

let reponse
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
    if (classe === 1) {
        let nbr1 = Math.floor(Math.random() * (126+1)) + 0;
        nbr1 = String(nbr1)
        let nbr2 = Math.floor(Math.random() * 255) + 0;
        nbr2 = String(nbr2)
        let nbr3 = Math.floor(Math.random() * 255) + 0;
        nbr3 = String(nbr3)
        let nbr4 = Math.floor(Math.random() * 255) + 0;
        nbr4 = String(nbr4)
        reponse = nbr1 + "." + nbr2 + "." + nbr3 + "." + nbr4
        console.log(reponse)
    }
    if (classe === 2) {
        let nbr1 = Math.floor(Math.random() * (191-128+1)) + 128;
        nbr1 = String(nbr1)
        let nbr2 = Math.floor(Math.random() * 255) + 0;
        nbr2 = String(nbr2)
        let nbr3 = Math.floor(Math.random() * 255) + 0;
        nbr3 = String(nbr3)
        let nbr4 = Math.floor(Math.random() * 255) + 0;
        nbr4 = String(nbr4)
        reponse = nbr1 + "." + nbr2 + "." + nbr3 + "." + nbr4
        console.log(reponse)
    }
    if (classe === 3) {
        let nbr1 = Math.floor(Math.random() * (223-192+1)) + 192;
        nbr1 = String(nbr1)
        let nbr2 = Math.floor(Math.random() * 255) + 0;
        nbr2 = String(nbr2)
        let nbr3 = Math.floor(Math.random() * 255) + 0;
        nbr3 = String(nbr3)
        let nbr4 = Math.floor(Math.random() * 255) + 0;
        nbr4 = String(nbr4)
        reponse = nbr1 + "." + nbr2 + "." + nbr3 + "." + nbr4
        console.log(reponse)
    }
});



//let randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);