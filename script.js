const cards = document.querySelectorAll ('.memoryCards');

function flipCard () {
    console.log ('I was clicked');
    console.log(this)
}

cards.forEach(card => card.addEventListener('click', flipCard));