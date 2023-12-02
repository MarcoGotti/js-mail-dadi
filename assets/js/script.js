//MAIL

//lista email che hanno accesso
const list =['1@gmail.com', '2@virgilio.it', '3@libero.it']

//chiedi a user la sua email
let userEmail = prompt('Insert your email');
console.log('ESERCIZIO  MAIL');
let correctEmail = false;
console.log(correctEmail);

//confronta
for (let i = 0; i < list.length; i++) {
    let element = list[i]; 
    if (element == userEmail){  // perchè == ?
        correctEmail = true;
        console.log(`Good! You are in
${userEmail} is a valid email`);
   }

}

if (correctEmail == false){   //perchè ==  ?
    console.log(`No way!
${userEmail} is not a valid`)
}


//GIOCO DEI DADI

console.log('ESERCIZIO  DADI');

//genera numero random 1-6

const firstDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log('Player One:', firstDice);

//genera altro numero 1-6

const secondDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log('Player Two:', secondDice);


//genera messaggio esito 

if (firstDice > secondDice){
    console.log('The winner is Player One');
} else if (secondDice > firstDice) {
    console.log('The winner is Player Two');
} else{
    console.log('That\'s an even !!');
}



