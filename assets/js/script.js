//MAIL

console.log('ESERCIZIO  MAIL');

//lista email che hanno accesso
const list =['mrc.gotti@gmail.com', 'abc@virgilio.it', '123@libero.it']

//chiedi a user la sua email
let userEmail = prompt('Insert your email');
console.log(userEmail === list[0]);

//confronta
for (let i = 0; i < list.length; i++) {
    var element = list[i];
    console.log(element === userEmail); 
}
 
if (element === userEmail){
    console.log('Good! You are in');
}



//GIOCO DEI DADI

console.log('ESERCIZIO  DADI');

//genera numero random 1-6

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
const firstDice = Number(getRndInteger(1, 6))
console.log('Player One:', firstDice);

//genera altro numero 1-6

const secondDice = Number(getRndInteger(1, 6))
console.log('Player Two:', secondDice);


//genera messaggio esito 

if (firstDice > secondDice){
    console.log('The winner is Player One');
} else if (secondDice > firstDice) {
    console.log('The winner is Player Two');
} else{
    console.log('That\'s an even !!');
}



