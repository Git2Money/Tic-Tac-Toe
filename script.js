let gameWon = false
let currentPlayer = 'X'
let winningPlayer;
const tiles = document.querySelectorAll('.tile')
let numMoves = 0

tiles.forEach((tile, i) => {
	tile.addEventListener('click', () => {
		if (tile.innerHTML === '' && !gameWon) {
			tile.innerHTML = currentPlayer

			numMoves += 1

			checkGameStatus()

			if (gameWon) {
				winningPlayer = currentPlayer
				const printWinner = setTimeout(() => { alert("Player " + winningPlayer + " has won!") }, 750)
				const clearBoard = setTimeout(() => clearTiles(), 500)

				numMoves = 0
				gameWon = false
			}

			if (numMoves === 9 && !gameWon) {
				const printWinner = setTimeout(() => { alert("It's a draw!") }, 750)
				const clearBoard = setTimeout(() => clearTiles(), 500)
				numMoves = 0
			}

				gameWon = false
			}


			switchPlayer()
		}
	})
});

function checkGameStatus() {
	if (tiles[0].innerHTML === tiles[1].innerHTML && tiles[0].innerHTML === tiles[2].innerHTML && tiles[0].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[3].innerHTML === tiles[4].innerHTML && tiles[3].innerHTML === tiles[5].innerHTML && tiles[3].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[6].innerHTML === tiles[7].innerHTML && tiles[6].innerHTML === tiles[8].innerHTML && tiles[6].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[0].innerHTML === tiles[3].innerHTML && tiles[0].innerHTML === tiles[6].innerHTML && tiles[0].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[1].innerHTML === tiles[4].innerHTML && tiles[1].innerHTML === tiles[7].innerHTML && tiles[1].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[2].innerHTML === tiles[5].innerHTML && tiles[2].innerHTML === tiles[8].innerHTML && tiles[2].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[0].innerHTML === tiles[4].innerHTML && tiles[0].innerHTML === tiles[8].innerHTML && tiles[0].innerHTML === currentPlayer) {
		gameWon = true
	} else if (tiles[2].innerHTML === tiles[4].innerHTML && tiles[2].innerHTML === tiles[6].innerHTML && tiles[2].innerHTML === currentPlayer) {
		gameWon = true
	}
}

function switchPlayer() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O'
	} else {
		currentPlayer = 'X'
	}
}

function clearTiles() {
	tiles.forEach((tile, i) => {
		tile.innerHTML = ''
	})
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
// 	}
// };
//
// fetch('https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/%7Bstate%7D/%7Bplayer%7D', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
