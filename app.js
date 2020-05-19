let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.results > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// caching dom
function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter == 'r') return 'Rock';
	if (letter == 'p') return 'Paper';
	if (letter == 's') return 'Scissors';
}

function win(user, computer) {
	const smallUserTag = 'user'.fontsize(3).sub();
	const smallComputerTag = 'computer'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(
		user
	)}${smallUserTag} beats ${convertToWord(
		computer
	)}${smallComputerTag}. You win.`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(user, computer) {
	const smallUserTag = 'user'.fontsize(3).sub();
	const smallComputerTag = 'computer'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(
		user
	)}${smallUserTag} loses to ${convertToWord(
		computer
	)}${smallComputerTag}. You lost.`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(user, computer) {
	const smallUserTag = 'user'.fontsize(3).sub();
	const smallComputerTag = 'computer'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(
		user
	)}${smallUserTag} and ${convertToWord(
		computer
	)}${smallComputerTag}. It's a draw.`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log('computer choice is ' + computerChoice);
	console.log('user choice is ' + userChoice);
	switch (userChoice + computerChoice) {
		case 'pr':
		case 'rs':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'sr':
		case 'ps':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
}
function main() {
	rock_div.addEventListener(
		'click',
		() => game('r')
		// console.log('You clicked Rock');
	);
	paper_div.addEventListener(
		'click',
		() => game('p')
		// console.log('You clicked Paper');
	);
	scissors_div.addEventListener(
		'click',
		() => game('s')
		// console.log('You clicked Scissors');
	);
}

main();
