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
//comando per inserire mail
let mailPersonal = prompt("Insert your mail");

//ciclo for per controllare ogni posizione dell'array se contiene la mail inserita
for (i = 0; i < mailList.length; i++) {
  if (mailList[i] === mailPersonal) {
    //se c'è una corrispondenza allora esco dal ciclo con break
    invited = "You are invited";
    break;
  } else invited = "You are not invited";
}
console.log(`${mailPersonal}: ${invited}`);

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
