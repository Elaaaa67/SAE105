const madiv = document.querySelector(".container");

var datas = JSON.parse(boutique)

var affichage = '';
for (i=0;i<datas.length; i++){

    affichage += `
            <div class="o">
            <img src="../medias/boutique/${datas[i].image}" alt="${datas[i].titre}">
            <h2>${datas[i].nom}</h2>
            <p>${datas[i].prix} €</p>
            <p>${datas[i].option}</p>
            <button onclick="window.location.href = '#ouvreModale${i}';">Aperçu </button>
            <div id="ouvreModale${i}" class="modalDialog">
      <div>
      
        <a href="#close" title="Fermer" class="close">x</a>
        <video src="../medias/boutique/gif/${datas[i].video}" alt="video${datas[i].titre}" autoplay loop muted>

      
    
      </div>
     
    </div>

            </div>
`
}
madiv.innerHTML = affichage;