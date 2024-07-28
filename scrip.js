function lire() {
    //Récuperer le texte entrer
    var texte = document.getElementById('texte').value;

    //Créer un objet de synthèse vocale
    var vocalSynthese = window.speechSynthesis;
    var message = new SpeechSynthesisUtterance(texte);

    //Séléctionner la voix
    message.voiceURI = 'native';
    message.lang = 'fr-FR';

    //Lire le message
    vocalSynthese.speak(message);
}