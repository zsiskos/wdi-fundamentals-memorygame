const cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	},
];

const cardsInPlay = [];

// Checks rank to see if cards match and displays alert to let user know
function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You've found a match!");
	} else {
		alert("Sorry, try again.");
	};
	};
};

// Flips the card the user chooses and then initates a check for match

function flipCard() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

//Creates the game board for cards
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};	
};

createBoard();

// adds a play again button to reload page after game
	let reset = document.getElementById('reset');
	reset.addEventListener('click', resetGame)

function resetGame() {
	window.location.reload();
};






