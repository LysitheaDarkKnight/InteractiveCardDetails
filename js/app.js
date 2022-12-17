let card;

let ui;

class Card{
    constructor(numberCard, nameCard, monthCard, yearCard, cvcCard) {
        this.numberCard = numberCard;
        this.nameCard = nameCard;
        this.monthCard = monthCard;
        this.yearCard = yearCard;
        this.cvcCard = cvcCard;
    }

}

const numberCard = document.querySelector('#card-number');
const nameCard = document.querySelector('#card-holder');
const monthCard = document.querySelector('#mm');
const yearCard = document.querySelector('#yy');
const cvcCard = document.querySelector('#cvc');

let isValid = {
    "number": false,
    "name": false,
    "month": false,
    "year": false,
    "cvc": false,
}

class UI{

    setError (message, msgClass){
    msgClass.innerText = message;
    msgClass.classList.add('error');
    msgClass.classList.remove('success');
    msgClass.previousElementSibling.style.borderColor = '#EF5350'

    
    }

    setSuccess (msgClass){
        msgClass.classList.add('success');
        msgClass.classList.remove('error');
        msgClass.previousElementSibling.style.borderColor = '#28a745';
    }

    addDetailsToCard(card){
        const numberCard = document.querySelector('.card-number');
        const nameCard = document.querySelector('.card-holder');
        const monthCard = document.querySelector('.mm');
        const yearCard = document.querySelector('.yy');
        const cvcCard = document.querySelector('.cvc');

        numberCard.innerHTML = card.numberCard;
        nameCard.innerHTML = card.nameCard;
        monthCard.innerHTML = card.monthCard;
        yearCard.innerHTML = card.yearCard;
        cvcCard.innerHTML = card.cvcCard;
    }

    clearFields () {
        document.querySelector('#card-number').value = '';
        document.querySelector('#card-holder').value = '';
        document.querySelector('#mm').value = '';
        document.querySelector('#yy').value = '';
        document.querySelector('#cvc').value = '';
        
    }

    displayThankYou(){
        document.querySelector('form').style.display = 'none'
        document.querySelector('.completed-state').style.display = 'grid'
    }

    displayForm(){
        document.querySelector('form').style.display = 'grid'
        document.querySelector('.completed-state').style.display = 'none'
    }

    resetCard() {
        document.querySelector('.card-number').innerHTML = '0000 0000 0000 0000'
        document.querySelector('.card-holder').innerHTML = 'JANE APPLESEED'
        document.querySelector('.mm').innerHTML = '00'
        document.querySelector('.yy').innerHTML = '00'
        document.querySelector('.cvc').innerHTML = '000'

        numberCard.style.borderColor = "";
        nameCard.style.borderColor = "";
        monthCard.style.borderColor = "";
        yearCard.style.borderColor = "";
        cvcCard.style.borderColor = "";

        isValid = {
            "number": false,
            "name": false,
            "month": false,
            "year": false,
            "cvc": false,
        }
    }
}

const confirm = document.querySelector('#form');
const cont = document.querySelector('.completed-state');


numberCard.addEventListener('blur', e => {
    card = new Card(numberCard, nameCard, monthCard, yearCard, cvcCard); 

    ui = new UI();

    const numberMsg = document.querySelector('.number-msg');

    const re = /^([0-9]{4}) ([0-9]{4})? ([0-9]{4})? ([0-9]{4})?$/;

    if(card.numberCard.value === '') {
        ui.setError ("Can't be blank", numberMsg)
        isValid["number"] = false;
    }

    else if (!re.test(card.numberCard.value)){
        ui.setError ('Please enter a valid number', numberMsg)
        isValid["number"] = false;
    } else {
        ui.setSuccess (numberMsg);
        numberMsg.innerHTML = '';
        isValid["number"] = true;
    }
});

nameCard.addEventListener('blur', e => {
    card = new Card(numberCard, nameCard, monthCard, yearCard, cvcCard); 

    ui = new UI();

    const nameMsg = document.querySelector('.name-msg');

    const re = /^[A-Za-z]{2,10}( [A-Za-z]{2,10})?$/;

    if(card.nameCard.value === '') {
        ui.setError ("Can't be blank", nameMsg)
        isValid["name"] = false;
    }
    else if (!re.test(card.nameCard.value)){
        ui.setError ('Please enter a valid name', nameMsg)
        isValid["name"] = false;

    } else {
        ui.setSuccess (nameMsg);
        nameMsg.innerHTML = '';
        isValid["name"] = true;
    }
});

monthCard.addEventListener('blur', e => {
    card = new Card(numberCard, nameCard, monthCard, yearCard, cvcCard); 

    ui = new UI();

    const dateMsg = document.querySelector('.date-msg');

    const re = /^0?[1-9]$|^1[0-2]$/;

    if(card.monthCard.value === '') {
        ui.setError ("Can't be blank", dateMsg)
        isValid["month"] = false;
        dateMsg.previousElementSibling.children[0].style.borderColor = '#EF5350'
    }
    else if (!re.test(card.monthCard.value)){
        ui.setError ('Please enter a valid date', dateMsg)
        isValid["month"] = false;
        dateMsg.previousElementSibling.children[0].style.borderColor = '#EF5350'

    } else {
        ui.setSuccess (dateMsg);
        dateMsg.innerHTML = '';
        isValid["month"] = true;
        dateMsg.previousElementSibling.children[0].style.borderColor = '#28a745'
    }
});

yearCard.addEventListener('blur', e => {
    card = new Card(numberCard, nameCard, monthCard, yearCard, cvcCard); 

    ui = new UI();

    const dateMsg = document.querySelector('.date-msg');

    const re = /^2[3-9]$/;

    if(card.yearCard.value === '') {
        ui.setError ("Can't be blank", dateMsg)
        isValid["year"] = false;
        dateMsg.previousElementSibling.children[1].style.borderColor = '#EF5350'
    }
    else if (!re.test(card.yearCard.value)){
        ui.setError ('Please enter a valid date', dateMsg)
        isValid["year"] = false;
        dateMsg.previousElementSibling.children[1].style.borderColor = '#EF5350'
    } else {
        ui.setSuccess (dateMsg);
        dateMsg.innerHTML = '';
        isValid["year"] = true;
        dateMsg.previousElementSibling.children[1].style.borderColor = '#28a745'
    }
});

cvcCard.addEventListener('blur', e => {
    card = new Card(numberCard, nameCard, monthCard, yearCard, cvcCard); 

    ui = new UI();

    const cvcMsg = document.querySelector('.cvc-msg');

    const re = /^[0-9]{3,4}$/;

    if(card.cvcCard.value === '') {
        ui.setError ("Can't be blank", cvcMsg)
        isValid["cvc"] = false;
    }
    else if (!re.test(card.cvcCard.value)){
        ui.setError ('Please enter a valid CVC', cvcMsg)
        isValid["cvc"] = false;
    } else {
        ui.setSuccess (cvcMsg);
        cvcMsg.innerHTML = '';
        isValid["cvc"] = true;
    }
});

confirm.addEventListener('submit', e => {

    // Get card values
    const number = document.querySelector('#card-number').value,
          holderName = document.querySelector('#card-holder').value,
          month = document.querySelector('#mm').value,
          year = document.querySelector('#yy').value,
          cvc = document.querySelector('#cvc').value;
    //Instantiate card
    card = new Card(number, holderName, month, year, cvc); 

    // Instantiate UI
    ui = new UI();




    if (isValid["number", "name", "month", "year", "cvc"] === true){
        ui.addDetailsToCard(card)
        ui.clearFields ()
        ui.displayThankYou()
    }


    e.preventDefault();
});

cont.addEventListener('submit', e => {
    ui = new UI();
    ui.displayForm()
    ui.resetCard()
    e.preventDefault();
})