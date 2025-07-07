// MAIL
//creo array con mail invitati
const emailList = [
  "simone.visconti@gmail.com",
  "mark.zuckerberg@hotmail.com",
  "silvio.berlusconi@libero.it",
  "sam.altman@openai.com",
  "simone.inzaghi@gmail.com",
  "jeff.bezos@gmail.com",
  "sam.altman@gmail.com",
  "alicia.keys@gmail.com",
  "penny.hofstadter@gmail.com",
  "david.beckham@united.uk",
  "walter.white@gmail.com",
];

const userMail = prompt(`Inserisci la tua email`);

let check = false; //variabile di controllo

//ciclo l'array emails
for (let i = 0; i < emailList.length; i++) {
  //controllo se la mail inserita sia uguale a quella attualmente iterata
  if (userMail === emailList[i]) {
    //se è vera la condizione, allore imposta la variabile di controllo a true
    check = true;
  }
}

if (check === true) {
  console.log(`La mail è stata trovata`);
} else {
  console.log(`Mail non trovata`);
}

//DADI
//creo le variabili con 1 numero casuale
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;

//confronto le variabili
if (pcNumber > userNumber) {
  console.log(
    `Numero PC: ${pcNumber} numero Utente: ${userNumber} ha vinto il pc`
  );
} else if (userNumber > pcNumber) {
  console -
    log(`Numero Utente: ${userNumber} numero PC: ${pcNumber} ha vinto!`);
} else console.log(`Pareggio col numero: ${pcNumber}`);
