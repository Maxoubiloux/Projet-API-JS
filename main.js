const btn = document.getElementById('btn');

let tabName = [];
let tabImg = [];
let tabOrigin = [];
let tabSpecies = [];
let tabStatus = [];

chara1.hidden = true
chara2.hidden = true
chara3.hidden = true
chara4.hidden = true

chara1_card.hidden = true
chara2_card.hidden = true
chara3_card.hidden = true
chara4_card.hidden = true

function fetchPhotos() {
    return fetch('https://rickandmortyapi.com/api/character/');
}

btn.addEventListener('click', () => {
        fetchPhotos().then((httpResponse) => {
            console.log('httpResponse: ', httpResponse);
            return httpResponse.json();
        }).then((characters) => {
            console.log(characters);
            if (btn.textContent === "Afficher les photos") {
                btn.textContent = "Masquer les photos";

                for (i = 0; i < 20; i++) {
                    resultName = characters.results[i].name;
                    resultImg = characters.results[i].image;
                    resultOrigin = characters.results[i].origin.name;
                    resultSpecies = characters.results[i].species;
                    resultStatus = characters.results[i].status;
    
                    tabName.push(resultName);
                    tabImg.push(resultImg);
                    tabOrigin.push(resultOrigin);
                    tabSpecies.push(resultSpecies);
                    tabStatus.push(resultStatus);
    
                    chara1.hidden = false
                    chara2.hidden = false
                    chara3.hidden = false
                    chara4.hidden = false
    
                    chara1_card.hidden = false
                    chara2_card.hidden = false
                    chara3_card.hidden = false
                    chara4_card.hidden = false
    
                    chara1.innerHTML = "<img src=" +tabImg[0]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[0]+ "<br><p class='text-center'>Origine : " +tabOrigin[0]+ "<p class='text-center'>Espèce : " +tabSpecies[0]+ "<br><p class='text-center'>" +tabStatus[0]+ "</p>"
                    chara2.innerHTML = "<img src=" +tabImg[1]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[1]+ "<br><p class='text-center'>Origine : " +tabOrigin[1]+ "<p class='text-center'>Espèce : " +tabSpecies[1]+ "<br><p class='text-center'>" +tabStatus[1]+ "</p>"
                    chara3.innerHTML = "<img src=" +tabImg[2]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[2]+ "<br><p class='text-center'>Origine : " +tabOrigin[2]+ "<p class='text-center'>Espèce : " +tabSpecies[2]+ "<br><p class='text-center'>" +tabStatus[2]+ "</p>"
                    chara4.innerHTML = "<img src=" +tabImg[15]+ " class='text-center mt-3'><br><p class='text-center'>" +tabName[15]+ "<br><p class='text-center'>Origine : " +tabOrigin[15]+ "<p class='text-center'>Espèce : " +tabSpecies[15]+ "<br><p class='text-center'>" +tabStatus[15]+ "</p>"
    
                    const selection = document.getElementById("selection");
        
                    selection.addEventListener('change', () => {
                        if (selection.value === '0') {
    
                            chara1.hidden = false
                            chara2.hidden = true
                            chara3.hidden = true
                            chara4.hidden = true
    
                            chara1_card.hidden = false
                            chara2_card.hidden = true
                            chara3_card.hidden = true
                            chara4_card.hidden = true
    
                        } else if (selection.value === '1') {
    
                            chara1.hidden = true
                            chara2.hidden = false
                            chara3.hidden = true
                            chara4.hidden = true
    
                            chara1_card.hidden = true
                            chara2_card.hidden = false
                            chara3_card.hidden = true
                            chara4_card.hidden = true
                            
    
                        } else if (selection.value === '2') {
    
                            chara1.hidden = true
                            chara2.hidden = true
                            chara3.hidden = false
                            chara4.hidden = true
    
                            chara1_card.hidden = true
                            chara2_card.hidden = true
                            chara3_card.hidden = false
                            chara4_card.hidden = true
                        } else if (selection.value === '3') {
    
                            chara1.hidden = true
                            chara2.hidden = true
                            chara3.hidden = true
                            chara4.hidden = false
    
                            chara1_card.hidden = true
                            chara2_card.hidden = true
                            chara3_card.hidden = true
                            chara4_card.hidden = false
                        }
                    })
                }
              } else {
                btn.textContent = "Afficher les photos";
                chara1.hidden = true
                chara2.hidden = true
                chara3.hidden = true
                chara4.hidden = true

                chara1_card.hidden = true
                chara2_card.hidden = true
                chara3_card.hidden = true
                chara4_card.hidden = true
            }
        })
    })