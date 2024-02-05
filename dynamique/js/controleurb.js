const madiv = document.querySelector(".container");
const filtreButtons = document.querySelector('.filtre-buttons');
var datas = JSON.parse(univer);

function filterCategory(category) {
    var filteredData = datas.filter(item => {
        if (category === 'Villain') {
            return item.Type === 'Villain';
        } else if (category === 'Lieu') {
            return ['Knowhere', 'Klyntar', 'Terre-616', 'Tour avengers', 'Asgard'].includes(item.nom);
        } else if (category === 'Héro') {
            return ['Spider-man', 'Star-lord', 'Iron-man'].includes(item.nom);
        }
    });

    displayData(filteredData);
}

function resetFilter() {
    displayData(datas);
}

function displayData(dataArray) {
    var affichage = '';
    for (var i = 0; i < dataArray.length; i++) {
        affichage += `
            <div class="u">
                <img src="../medias/univer/${dataArray[i].image}" alt="${dataArray[i].nom}">
                <h2>${dataArray[i].nom}</h2>
                <p>${dataArray[i].Lieu}</p>
                <ul>
                    <li>${dataArray[i].Caractéristique}</li>
                    <li>${dataArray[i].Type}</li>
                    <li>${dataArray[i].Complet}</li>
                    <li>${dataArray[i].surnom}</li>
                    <li>${dataArray[i].taille}</li>
                </ul>
            </div>
        `
    };

    madiv.innerHTML = affichage;
}

displayData(datas);
