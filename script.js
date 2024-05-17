console.log("I love myself");   //égal Hello World mais ça ca me fait rire


//Séléction classe
let classe = 1
let listeInputRadio = document.querySelectorAll(".classe input");
for (let index = 0; index < listeInputRadio.length; index++) {
    listeInputRadio[index].addEventListener("change", (event) => {
        if (event.target.value === "1") {
            classe = 1  //Classe A
        } else {
            if (event.target.value === "2") {
                classe = 2  //Classe B
            } else {
                if (event.target.value === "3") {
                classe = 3  //Classe C
            } else {console.log("Bug class choice (line 11)")}
        }
        }
    })
}
//Sélection type
let type = 1
let listeSelectRadio = document.getElementById("select");
listeSelectRadio.addEventListener("change", () => {
    if (listeSelectRadio.value === "1") {
        type = 1
        console.log("private",type)
    } else {
        if (listeSelectRadio.value === "2") {
            type = 2
            console.log("random",type)
        } else {console.log("Bug type choice (line 25)")}
    }
})

let classresult = document.getElementById("resultat");
let reponse
let genbouton = document.getElementById("generer");
//Définition variables min et max de génération
let max
let min
let max2 = 255
let min2 = 255
console.log("avant génération",type)
//génération adresse IP aléatoire
genbouton.addEventListener("click", function () {
    if (type === 2) {
        if (classe === 1) {
            min = 0
            max = 126
            min2 = 0
            max2 = 255
        } else {
            if (classe === 2) {
                min = 128
                max = 191
                min2 = 0
                max2 = 255
            } else {
                if (classe === 3) {
                    min = 192
                    max = 223
                    min2 = 0
                    max2 = 255
                } else {console.log("Bug max min (line 57)")}
            }
        }
    } else { if (type === 1) {
        if (classe === 1) {
            min = 10
            max = 10
        } else {
            if (classe === 2) {
                min = 172
                max = 172
                min2 = 16
                max2 = 31
            } else {
                if (classe === 3) {
                    min = 192
                    max = 192
                    min2 = 168
                    max2 = 168
                } else {console.log("Bug max min (line 57)")}
            }
        }
    } else {console.log("Bug max min (line 57)")}
    }
    //génération adresse IP
    let nbr1 = Math.floor(Math.random() * (max-min+1)) + min;
    nbr1 = String(nbr1)
    let nbr2 = Math.floor(Math.random() * (max2-min2+1)) + min2;
    nbr2 = String(nbr2)
    let nbr3 = Math.floor(Math.random() * 255) + 0;
    nbr3 = String(nbr3)
    let nbr4 = Math.floor(Math.random() * 255) + 0;
    nbr4 = String(nbr4)
    reponse = nbr1 + "." + nbr2 + "." + nbr3 + "." + nbr4
    console.log("après génération",type)
    //affichage adresse IP
    let resultat = document.getElementById("result")
    classresult.value = reponse
});



let copyButton = document.getElementById("copy");
let copyIcon = document.getElementById("iconcopy");
function copyresult() {
    var copyText = document.getElementById("resultat");
    copyText.select();
    copyText.setSelectionRange(0, 99999);   //pour les téléphones
    navigator.clipboard.writeText(copyText.value);
    copyIcon.src = "images/correct.png"
    setTimeout(copieButton, 1000);
}

function copieButton() {
    copyIcon.src = "images/copier-le-symbole-dinterface-de-deux-feuilles-de-papier.png"
}