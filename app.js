// oppgave 1 A

let a = 1;
while (a < 11) {
    console.log(a);
    a++;
}
// oppgave 1 B

let b = 1;
for (let b = 1; b < 11; b++) {
    console.log(b);
}

//oppgave 2 A

/*  let passord = prompt("Skriv inn passordet ditt:");
 while (passord !== "test") {
    passord = prompt("Feil passord, prøv igjen");}
  if (passord === "test") {
    alert("Riktig passord");
 } */

//oppgave 2 B
let passord;
let forsok = 0;
for (forsok = 0; forsok < 3; forsok++) {
    passord = prompt("Skriv inn passordet ditt:");
    if (passord === "test"){
        alert("Riktig passord");
        break;
    } else if (forsok === 2) {
        alert("Du har brukt opp alle forsøk");
    }
} 

//oppgave 3 A
