const cards = document.querySelectorAll ('.memoryCards');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;

  this.classList.add('flip');

    if (!hasFlippedCard) {
    //første klikk
    hasFlippedCard = true;
    firstCard = this;

    return;
}
    //andre klikk
    secondCard = this;

    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unFlipCards();
}

function disableCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
    }, 1500);  
}
      
function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));