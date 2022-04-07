










const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/%7Bstate%7D/%7Bplayer%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
