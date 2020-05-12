// Création d'un fonction permettant de d'ajouter une valeur a un display d'un ID
function changerDisplay(id, valeur) {
    var bloc = document.getElementById(id);
    bloc.style.display = valeur;
}

// Création d'une fonction permettant de retourner un element d'un ID
function bloc(id) {
    return document.getElementById(id);
}

// Déclaration des varaibles des boutons
var bouton1 = document.getElementById('b1');
var bouton2 = document.getElementById('b2');
var bouton3 = document.getElementById('b3');
var bouton4 = document.getElementById('b4');
   
// Action lorsque le premier bouton est actionné
bouton1.onclick = function() {
    changerDisplay('video1', 'block');
    // Pour avoir un background sombre derriere la video et z-index superieur pour ne pas cliquer sur des liens derriere la video pendant qu'elle tourne
    changerDisplay('galerie_video', 'block');
    // On declare une variable pour rechercher l'attribut SRC de la video pour changer l'autoplay au clic
    var element = document.getElementById('video1').querySelector('iframe');
    element.setAttribute('src', "https://www.youtube.com/embed/d6-Y5IxtYek?&autoplay=1");
}

// Action lorsque le deuxieme bouton est actionné
bouton2.onclick = function() {
    changerDisplay('video2', 'block');
    // Pour avoir un background sombre derriere la video et z-index superieur pour ne pas cliquer sur des liens derriere la video pendant qu'elle tourne
    changerDisplay('galerie_video', 'block');
    // On declare une variable pour rechercher l'attribut SRC de la video pour changer l'autoplay au clic
    var element = document.getElementById('video2').querySelector('iframe');
    element.setAttribute('src', "https://www.youtube.com/embed/crBuCEthLJw?&autoplay=1");
}

// Action lorsque le troisieme bouton est actionné
bouton3.onclick = function() {
    changerDisplay('video3', 'block');
    // Pour avoir un background sombre derriere la video et z-index superieur pour ne pas cliquer sur des liens derriere la video pendant qu'elle tourne
    changerDisplay('galerie_video', 'block');
    // On declare une variable pour rechercher l'attribut SRC de la video pour changer l'autoplay au clic
    var element = document.getElementById('video3').querySelector('iframe');
    element.setAttribute('src', "https://www.youtube.com/embed/MFO8sC1U-iY?&autoplay=1");
}

// Action lorsque le troisieme bouton est actionné
bouton4.onclick = function() {
    changerDisplay('video4', 'block');
    // Pour avoir un background sombre derriere la video et z-index superieur pour ne pas cliquer sur des liens derriere la video pendant qu'elle tourne
    changerDisplay('galerie_video', 'block');
    // On declare une variable pour rechercher l'attribut SRC de la video pour changer l'autoplay au clic
    var element = document.getElementById('video4').querySelector('iframe');
    element.setAttribute('src', "https://www.youtube.com/embed/Qvv4MfrJyDY?&autoplay=1");
}

// Fermer la fenêtre video lorsqu'on apppuie sur la croix en haut a droite du lecteur
// Declaration de la croix
var fermer = document.getElementsByClassName('close');
// Vu que c'est la meme class pour toutes les croix, on boucle
for(var i = 0; i < fermer.length; i++) {
    // Lorsque l'on clic sur la croix on demande a changer le display du bloc et a stoper la lecture de la video en cours
    fermer[i].onclick = function() {
        var maVideo1 = bloc('video1');
        var maVideo2 = bloc('video2');
        var maVideo3 = bloc('video3');
        var maVideo4 = bloc('video4');

        if(maVideo1.style.display == "block") {
            var element = document.getElementById('video1').querySelector('iframe');
            element.setAttribute('src', "https://www.youtube.com/embed/d6-Y5IxtYek?&autoplay=0");
            maVideo1.style.display = 'none';
            changerDisplay('galerie_video', 'none');
        }else if(maVideo2.style.display == "block") {
            var element = document.getElementById('video2').querySelector('iframe');
            element.setAttribute('src', "https://www.youtube.com/embed/crBuCEthLJw?&autoplay=0");
            maVideo2.style.display = 'none';
            changerDisplay('galerie_video', 'none');
        }else if(maVideo3.style.display == 'block') {
            var element = document.getElementById('video3').querySelector('iframe');
            element.setAttribute('src', "https://www.youtube.com/embed/MFO8sC1U-iY?&autoplay=0");
            maVideo3.style.display = 'none';
            changerDisplay('galerie_video', 'none');
        }else if(maVideo4.style.display == 'block') {
            var element = document.getElementById('video4').querySelector('iframe');
            element.setAttribute('src', "https://www.youtube.com/embed/Qvv4MfrJyDY?&autoplay=0");
            maVideo4.style.display = 'none';
            changerDisplay('galerie_video', 'none');
        }
    }
}