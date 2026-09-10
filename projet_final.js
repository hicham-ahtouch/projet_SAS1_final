const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
function main() {
    let user_input;
    do {

        console.log("=======================");
        console.log("    RAILWAY MANAGER    ");
        console.log("=======================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un tickets  ");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket   ");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets ");
        console.log("7. Trier les trajets   ");
        console.log("0. Quitter             ");

        user_input = Number(prompt("tapez votre choix: "))

        switch (user_input) {
            case 1:
                aff_trajets();
                break;
            case 2:
                achat_ticket();
                break;
            case 3:
                aff_tickets();
                break;
            case 4:
                //annuler les tickets
                break;
            case 5:
                //rechercher un ticket
                break;
            case 6:
                //filtrer les trajets
                break;
            case 7:
                //trier les trajets
                break;
            case 0:
                console.log("Merci d'utiliser notre application, BON VOYAGE! ");
                break;
            
            default:
                console.log("S'il-vous-plait entrer une choix valide entre 0 et 7!!");
                break;
        }
    } while (user_input != 0);
}
main()
function aff_trajets() {
    for (let trajet of trips) {
        console.log("=== TRAJETS DISPONIBLES ===")
        console.log("#", trajet.id);
        console.log(trajet.departure, "→", trajet.destination);
        console.log("departure_time :", trajet.departureTime)
        console.log("arrival_time :", trajet.arrivalTime);
        console.log("price :", trajet.price);
        console.log("available_seats :", trajet.availableSeats);
    }
}
function achat_ticket() {
    let Nom_du_passager = prompt("entre le nom du passager :");
    while (Nom_du_passager.trim() === " " || Nom_du_passager.trim() === "") {
        Nom_du_passager = prompt("entre le nom du passager :")
    }
    let id_trajet;
    do {
        id_trajet = prompt("entre votre trajet identifiant :")
    } while (isNaN(id_trajet) || id_trajet.trim()=== "" || id_trajet.trim()===" ");

    let trajet;
    for (let selectedtrajet of trips) {
        if (selectedtrajet.id === Number(id_trajet)) {
            trajet = selectedtrajet;
        }
    }
    if(trajet === undefined){
        console.log("trajet untrovable!!");
    }
    else if(trajet.availableSeats === 0){
        console.log("Désolé, le train est complet pour ce trajet!!");
    }
    else{
        let id_ticket = tickets.length + 1 ;
        let seat_numb = 51 - trajet.availableSeats;

        let ticket ={
            id : id_ticket,
            passengerName : Nom_du_passager,
            tripId : Number(id_trajet),
            seatNumber : seat_numb,
            price : trajet.price
        }
        tickets.push(ticket)
        trajet.availableSeats = trajet.availableSeats -1;
        console.log("Ticket acheté avec succès");
    }
}
function aff_tickets(){
    if(tickets.length !== 0){
        for(let ticket of tickets){
            let trajet;
    for(let selectedtrajet of trips){
        if(selectedtrajet.id === ticket.tripId){
            trajet = selectedtrajet;
        }
    }
            console.log("=== TICKETS ===")
            console.log("Ticket #", ticket.id)
            console.log("Passager:", ticket.passengerName.toLowerCase())
            console.log("Trajet:", trajet.departure , " → " , trajet.destination)
            console.log("Place:" , ticket.seatNumber)
            console.log("Prix:", ticket.price, "DH")
        }
    }
    else if(tickets.length === 0){
        console.log("Aucun ticket enregistré!!")
    }
}
function annuler_ticket(){
    let id_ticket;
    do{
        id_ticket = prompt("entre votre ticket identifiant: ")
    }while(isNaN(id_ticket) || id_ticket.trim() === "" || id.ticket.trim() === " ")
    if(id_ticket === undefined){
        console.log("ticket introuvable!!")
    }
    
}