//DONE=>creo un array con all'interno degli oggetti 
// creo una funzione che generi gli elementi del DOM
    // mi ricavo gli oggetti dell'array uno per uno, con le relative proprietà => FOR 
    // mi ricavo tutti i valori delle chiavi dell'oggetto => FOR IN 
    // nella funzione inserisco tutte le chiavi degli elementi 
// creo un ascoltatore per il bottone
    // al click mi ricavo i valori inseriti
    // creo un oggetto 
    // all'interno dell'oggetto inserisco i valori
    // pusho l'oggetto nell'array principale 





const teamMembers = [
    {
        "nome" : "Wayne Barnett",
        "immagine" : "img/wayne-barnett-founder-ceo.jpg",
        "ruolo" : "Founder & CEO"
    },
    {
        "nome" : "Angela Caroll",
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "ruolo" : "Chief Editor"
    },
    {
        "nome" : "Walter Gordon",
        "immagine" : "img/walter-gordon-office-manager.jpg",
        "ruolo" : "Office Manager"
    },
    {
        "nome" : "Angela Lopez",
        "immagine" : "img/angela-lopez-social-media-manager.jpg",
        "ruolo" : "Social Media Manager"
    },
    {
        "nome" : "Scott Estrada",
        "immagine" : "img/scott-estrada-developer.jpg",
        "ruolo" : "developer"
    },
    {
        "nome" : "Barbara Ramos",
        "immagine" : "img/barbara-ramos-graphic-designer.jpg",
        "ruolo" : "Grafhic Designer"
    }

];

console.log(teamMembers);
for (let i = 0; i < teamMembers.length; i++){
    for ( let key in teamMembers[i] ){
        console.log(key, teamMembers[i][key]);
    }
}


// funzioni utili
function name(params) {
    
}