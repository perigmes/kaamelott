fetch("https://kaamelott.chaudie.re/api");
.then(function() {

})
.catch(function() {

});
(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);

    function initialiser(evt){
        let bouton = document.getElementById("citationkaamelot");
        bouton.addEventListener("click", Affichercitation);
    }

    function Affichercitation (evt){
        let citation = document.getElementById("citation");
        citation.innerHTML ="Citation de l'api";
        let auteur = document.getElementById("auteur");
        auteur.innerHTML ="auteur";
        let episode = document.getElementById("episode");
        episode.innerHTML ="episode";
    }
}())