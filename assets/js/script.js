console.log(Date.now());

//MAIL

//lista email che hanno accesso
const list =['1@gmail.com', '2@virgilio.it', '3@libero.it']

//check by clicking
const buttonEmail = document.getElementById('buttonEmail');
buttonEmail.addEventListener('click', function() {
    //read input
    const userEmail = document.getElementById('emailInput').value
    let correctEmail = false;
    for (let i = 0; i < list.length; i++) {
        let element = list[i]; 
        if (element === userEmail){  
            correctEmail = true;//il ciclo cerca solo true o false!!!
            //document.getElementById('positiveCheck').classList.remove('d-none');
            //document.getElementById('emailInput').classList.remove('is-invalid'); 
       }
    
    } 
    if (correctEmail === false){  
        document.getElementById('positiveCheck').classList.add('d-none');
        document.getElementById('emailInput').classList.add('is-invalid');  
    } else {
        document.getElementById('positiveCheck').classList.remove('d-none');
        document.getElementById('emailInput').classList.remove('is-invalid'); 
    }
    
});

//clean up the input
emailInput.addEventListener('click', function(){ //***why do I need two clicks????
    document.getElementById('emailInput').classList.remove('is-invalid'); 
});




//GIOCO DEI DADI

//click and play
const buttonDice  = document.getElementById('buttonDice');
buttonDice.addEventListener('click', function() { //***perchè se refresho non tornano i value iniziali "Your Dice", "Bobby's"??
    
    //genera numero random 1-6

    const firstDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
    document.getElementById('userDice').value = firstDice;

    //genera altro numero 1-6

    const secondDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
    document.getElementById('bobbyDice').value = secondDice;

    //genera messaggio esito 
        //create const utility
        const userDice = document.getElementById('userDice');
        const bobbyDice = document.getElementById('bobbyDice');
        const resultEl = document.querySelector('span');
        
    if (firstDice > secondDice){
        userDice.classList.add('border', 'border-danger', 'border-3');
        bobbyDice.classList.remove('border', 'border-danger', 'border-success', 'border-2');
        resultEl.innerText = ('You WIN !!!')
        resultEl.classList.remove('text-bg-success');
        resultEl.classList.add('text-bg-danger');
    } else if (secondDice > firstDice) {
        bobbyDice.classList.add('border', 'border-danger', 'border-3');
        userDice.classList.remove('border', 'border-danger', 'border-success', 'border-2');
        resultEl.innerText = ('Bobby wins!');
        resultEl.classList.remove('text-bg-success');
        resultEl.classList.add('text-bg-danger');
    } else{
        resultEl.innerText = ('It\'s an even!')
        //document.getElementById('userDice', 'bobbyDice').classList.remove('border-danger');
        // si possono inserire due Id in un unico getElementBy Id? come?
        bobbyDice.classList.remove('border-danger');
        userDice.classList.remove('border-danger');
        bobbyDice.classList.add('border', 'border-success', 'border-3');
        userDice.classList.add('border', 'border-success', 'border-3');
        resultEl.classList.remove('text-bg-danger');
        resultEl.classList.add('text-bg-success');
    }
})




