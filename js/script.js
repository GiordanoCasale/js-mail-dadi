//primo esercizio
//creiamo un array con la lista delle email degli invitati
const list = ["peppescoppiato@libero.it", "ginobuonvino@hotmail.com", "monkeydluffy@gmail.com", "kenkaneki@vattelaapesca.com", "paolobianchi@bellafrate.it", "mariobros@fungolandia.it", "axelblaze@soccer.com"];
//andiamo a definire la variabile con il prompt
let email = prompt("inserisci la mail dove è stato inviato l'invito");
//andiamo a definire la variabile che ci permetterà di fare il check
let checkmail = false;
//facciamo ciclare la lista con il for
for(let i=0; i<list.length; i++){
    if(list[i] == email){
        checkmail = true;    
    }
}
//andiamo a confermare il controllo in base alla variabile
if(checkmail){
    console.log("Presenza nella lista confermata")
}
else{
    console.log("Nessun riscontro all'interno della lista")
}
//fine primo esercizio

//secondo esercizio
//andiamo a creare le variabili per l'utente e il pc
const user= Math.floor((Math.random() * 6) + 1);
const pc= Math.floor((Math.random() * 6) + 1);
console.log(user)
console.log(pc)
//andiamo a mettere le condizioni del risultato con if,else if e else
if(user>pc){
    console.log("Vince User")
}

else if(user==pc){
    console.log("Pareggio")
}

else{
    console.log("Vince Pc")
}
//fine secondo esercizio