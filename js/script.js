//DONE=>creo un array con all'interno degli oggetti 
// DONE=>creo una funzione che generi gli elementi del DOM
    // DONE=>scorro gli oggetti dell'array=> FOR 
    // DONE=>per ogni oggetto ricavo i valori delle chiavi e le salvo dentro delle variabili => FOR IN 
    // DONE=>nella funzione inserisco tutte le chiavi degli elementi 
// DONE=>creo un ascoltatore per il bottone
    // DONE=>al click mi ricavo i valori inseriti e li salvo in una variabile
    // DONE=>creo un oggetto 
    // DONE=>all'interno dell'oggetto inserisco i valori
    // DONE=>pusho i l'oggetto nell'array
    // DONE=>stampo l'oggetto in pagina tramite la funzione





const teamMembers = [
    {
        "nameTeam" : "Wayne Barnett",
        "image" : "img/wayne-barnett-founder-ceo.jpg",
        "role" : "Founder & CEO"
    },
    {
        "nameTeam" : "Angela Caroll",
        "image" : "img/angela-caroll-chief-editor.jpg",
        "role" : "Chief Editor"
    },
    {
        "nameTeam" : "Walter Gordon",
        "image" : "img/walter-gordon-office-manager.jpg",
        "role" : "Office Manager"
    },
    {
        "nameTeam" : "Angela Lopez",
        "image" : "img/angela-lopez-social-media-manager.jpg",
        "role" : "Social Media Manager"
    },
    {
        "nameTeam" : "Scott Estrada",
        "image" : "img/scott-estrada-developer.jpg",
        "role" : "developer"
    },
    {
        "nameTeam" : "Barbara Ramos",
        "image" : "img/barbara-ramos-graphic-designer.jpg",
        "role" : "Grafhic Designer"
    }

];

//costante per collegare il container
const containerCard = document.querySelector(".team-container");
//ciclo che uso per scorrere ogni elemento dell'array
for (let i = 0; i < teamMembers.length; i++){
    // creo delle variabili per salvarmi le informazioni chiave
    let nameTeam = teamMembers[i].nameTeam;
    let image = teamMembers[i].image;
    let role = teamMembers[i].role;
    // funzione che utilizzo per stampare le card
    createTeamCard(nameTeam, image, role );
};

//costante per collegare il bottone
const btn = document.querySelector("#addMemberButton");

btn.addEventListener("click",

    function(){
        let nameForm = document.querySelector("#name").value;
        let imageForm = document.querySelector("#image").value;
        let roleForm = document.querySelector("#role").value;
        const newMember = {
            "nameTeam" : nameForm,
            "image" : imageForm,
            "role" : roleForm
        };
        teamMembers.push(newMember)
        console.log( "array agg" , teamMembers);
        console.log( "nuovo membro"  , newMember);
        createTeamCard(nameForm, imageForm, roleForm);
    }

);




function createTeamCard(nameTeam, image, role) {
    containerCard.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src= ${image}
                alt= ${nameTeam}
              />
            </div>
            <div class="card-text">
              <h3>${nameTeam}</h3>
              <p>${role}</p>
            </div>
        </div>
    `
}


// funzioni utili
/* function createTeamCard() {
    let teamCard = document.createElement("div");
    teamCard.classList.add("team-card");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    let imgProfile = document.createElement("img");
    cardImage.append(imgProfile);
    cardImage.classList.add("card-image");
} */

