const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let blockBord = false; 

function flipCard() {
    this.classList.add('flip');
    if(blockBord) return;
    if(this === firstCard) return;


    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click'.flipCard);
    secondCard.removeEventListener('click'.flipCard);

    resetBord();
}

function unflipCards(){
    blockBord = true;
    
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBord();
    }, 1500);
}


function resetBord(){
    [hasFlippedCard, blockBord] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){                   
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.ramdom() * 12);
        card.style.order = ramdomPosition;
    })
});

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
}) 

