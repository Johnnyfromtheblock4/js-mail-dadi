// MAIL
let invited;

//creo array con mail invitati
const mailList = [
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

let check = false; //variabile di controllo

//ciclo l'array emails
for(let i=0; i>mailList.length, i++){
  //controllo se la mail inserita sia uguale a quella attualmente iterata
  if(userMail === mailList[i]) {
    //se è vera la condizione, allore imposta la variabile di controllo a true
    check = true;
  }
}

if(check === true) {
  console.log(`La mail è stata trovata`)
}
else {
  console.log(`Mail non trovata`)
}

//DADI
//creo le variabili con 1 numero casuale
const numPc = Math.floor(Math.random() * 6) + 1;
const numUser = Math.floor(Math.random() * 6) + 1;
let point;
//confronto le variabili
if (numPc > numUser) {
  point = `Ha vinto il PC con il numero: ${numPc} contro il numero dello user: ${numUser}`;
} else if (numUser > numPc) {
  point = `Ha vinto lo user con il numero: ${numUser} contro il numero del PC: ${numPc}`;
} else point = `Pareggio col numero: ${numUser}`;

console.log(point);
