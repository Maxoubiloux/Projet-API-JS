// On récupère le bouton à partir de son id.
const btn = document.getElementById('btn');

// On initialise les tableaux qui vont contenir les données des personnages.
let tabName = [];
let tabImg = [];
let tabOrigin = [];
let tabSpecies = [];
let tabStatus = [];

// On masque initialement les personnages.
chara1.hidden = true
chara2.hidden = true
chara3.hidden = true
chara4.hidden = true

// On masque initialement les cartes des personnages.
chara1_card.hidden = true
chara2_card.hidden = true
chara3_card.hidden = true
chara4_card.hidden = true

// Cette fonction envoie une requête HTTP pour récupérer des données des personnages.
function fetchPhotos() {
    return fetch('https://rickandmortyapi.com/api/character/');
}

// On ajoute un gestionnaire d'événements pour le clic sur le bouton.
btn.addEventListener('click', () => {
    // On envoie la requête HTTP et on convertit la réponse en JSON.
    fetchPhotos().then((httpResponse) => {
        console.log('httpResponse: ', httpResponse);
        return httpResponse.json();
    }).then((characters) => {
        console.log(characters);
        // Si le bouton affiche "Afficher les photos", cela signifie que les photos ne sont pas encore affichées.
        if (btn.textContent === "Afficher les photos") {
            // On change le texte du bouton pour "Masquer les photos".
            btn.textContent = "Masquer les photos";
            // Pour chaque personnage dans les 20 premiers résultats :
            for (i = 0; i < 20; i++) {
                // On récupère les données du personnage.
                resultName = characters.results[i].name;
                resultImg = characters.results[i].image;
                resultOrigin = characters.results[i].origin.name;
                resultSpecies = characters.results[i].species;
                resultStatus = characters.results[i].status;

                // On ajoute les données aux tableaux.
                tabName.push(resultName);
                tabImg.push(resultImg);
                tabOrigin.push(resultOrigin);
                tabSpecies.push(resultSpecies);
                tabStatus.push(resultStatus);

                // On affiche les personnages.
                chara1.hidden = false
                chara2.hidden = false
                chara3.hidden = false
                chara4.hidden = false

                // On affiche les cartes des personnages.
                chara1_card.hidden = false
                chara2_card.hidden = false
                chara3_card.hidden = false
                chara4_card.hidden = false

                // On affiche les données du personnage sur sa carte correspondante.
                chara1.innerHTML = "<img src=" +tabImg[0]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[0]+ "<br><p class='text-center'>Origine : " +tabOrigin[0]+ "<p class='text-center'>Espèce : " +tabSpecies[0]+ "<br><p class='text-center'>" +tabStatus[0]+ "</p>"
                chara2.innerHTML = "<img src=" +tabImg[1]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[1]+ "<br><p class='text-center'>Origine : " +tabOrigin[1]+ "<p class='text-center'>Espèce : " +tabSpecies[1]+ "<br><p class='text-center'>" +tabStatus[1]+ "</p>"
                chara3.innerHTML = "<img src=" +tabImg[2]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[2]+ "<br><p class='text-center'>Origine : " +tabOrigin[2]+ "<p class='text-center'>Espèce : " +tabSpecies[2]+ "<br><p class='text-center'>" +tabStatus[2]+ "</p>"
                chara4.innerHTML = "<img src=" +tabImg[15]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[15]+ "<br><p class='text-center'>Origine : " +tabOrigin[15]+ "<p class='text-center'>Espèce : " +tabSpecies[15]+ "<br><p class='text-center'>" +tabStatus[15]+ "</p>"
    
                // Sélection de l'élément de liste déroulante HTML avec l'identifiant "selection"
                const selection = document.getElementById("selection");

                // Ajout d'un écouteur d'événement pour détecter les changements dans la liste déroulante
                selection.addEventListener('change', () => {
                    // Si l'élément sélectionné a une valeur de '0'
                    if (selection.value === '0') {
                        // Afficher le premier personnage et masquer les autres
                        chara1.hidden = false
                        chara2.hidden = true
                        chara3.hidden = true
                        chara4.hidden = true

                        // Afficher la carte du premier personnage et masquer les autres
                        chara1_card.hidden = false
                        chara2_card.hidden = true
                        chara3_card.hidden = true
                        chara4_card.hidden = true

                    } else if (selection.value === '1') {
                        // Afficher le deuxième personnage et masquer les autres
                        chara1.hidden = true
                        chara2.hidden = false
                        chara3.hidden = true
                        chara4.hidden = true

                        // Afficher la carte du deuxième personnage et masquer les autres
                        chara1_card.hidden = true
                        chara2_card.hidden = false
                        chara3_card.hidden = true
                        chara4_card.hidden = true

                    } else if (selection.value === '2') {
                        // Afficher le troisième personnage et masquer les autres
                        chara1.hidden = true
                        chara2.hidden = true
                        chara3.hidden = false
                        chara4.hidden = true

                        // Afficher la carte du troisième personnage et masquer les autres
                        chara1_card.hidden = true
                        chara2_card.hidden = true
                        chara3_card.hidden = false
                        chara4_card.hidden = true

                    } else if (selection.value === '3') {
                        // Afficher le quatrième personnage et masquer les autres
                        chara1.hidden = true
                        chara2.hidden = true
                        chara3.hidden = true
                        chara4.hidden = false

                        // Afficher la carte du quatrième personnage et masquer les autres
                        chara1_card.hidden = true
                        chara2_card.hidden = true
                        chara3_card.hidden = true
                        chara4_card.hidden = false
                    }
                })
            }

        // Si le texte du bouton est "Masquer les photos"
        } else {
            // On change le texte du bouton pour "Masquer les photos".
            btn.textContent = "Afficher les photos";

            // On masque les personnages.
            chara1.hidden = true
            chara2.hidden = true
            chara3.hidden = true
            chara4.hidden = true

            // On masque les cartes des personnages.
            chara1_card.hidden = true
            chara2_card.hidden = true
            chara3_card.hidden = true
            chara4_card.hidden = true
        }
    })
})