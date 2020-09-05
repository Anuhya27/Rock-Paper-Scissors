document.addEventListener('DOMContentLoaded',function(){
	let userScore=0;
	let computerScore=0;
	const userScore_span=document.getElementById('user-score');
	const computerScore_span=document.getElementById('computer-score');
	const scoreBoard_div=document.querySelector(".score-board");
	const result_p=document.querySelector(".result>p");
	const rock_div=document.getElementById("r");
	const paper_div=document.getElementById("p");
	const scissors_div=document.getElementById("s");
	function getComputerChoice( ) {
		var choices=['r','p','s'];
		var randomNumber=Math.floor(Math.random()*3);
		return choices[randomNumber];
	}
	function convertToWord(letter) {
		if(letter=="r")
			return "rock";
		if (letter=="p") {
			return "paper";
		}
		if (letter=='s') {
			return "scissors";
		}
	}
	function win(userChoice,computerChoice){
		userScore++;
		userScore_span.innerHTML=userScore;
		computerScore_span.innerHTML=computerScore;
		const userWord= "user".fontsize(3).sub();
		const compWord= "comp".fontsize(3).sub();
		result_p.innerHTML= `${convertToWord(userChoice)}${userWord} beats ${convertToWord(computerChoice)}${compWord}. You win!`;
		document.getElementById(userChoice).classlist.add('green-glow');
	}
	function loose(userChoice,computerChoice ){
		computerScore++;	
		userScore_span.innerHTML=userScore;
		computerScore_span.innerHTML=computerScore;
		const userWord= "user".fontsize(3).sub();
		const compWord= "comp".fontsize(3).sub();
		result_p.innerHTML= `${convertToWord(userChoice)}${userWord} loses to ${convertToWord(computerChoice)}${compWord}. You loose!`;
	
	}
	function draw(userChoice,computerChoice){
		const userWord= "user".fontsize(3).sub();
		const compWord= "comp".fontsize(3).sub();
		result_p.innerHTML= `${convertToWord(userChoice)}${userWord} equals ${convertToWord(computerChoice)}${compWord}. It's draw`;
	
	}

	
	function game(userChoice) {
		var computerChoice=getComputerChoice();
		console.log(computerChoice);
		switch(userChoice+computerChoice){

			case "rs":
			case "pr":
			case "sp":
						win(userChoice,computerChoice);
						break;
			case "sr":
			case "rp":
			case "ps":
						loose(userChoice,computerChoice);
						break;
			case "rr":
			case "pp":
			case "ss":
						draw(userChoice,computerChoice);			
						break;
			
		}	
	}
	function main(){
		rock_div.addEventListener('click',function(){
			game("r");
		})
		paper_div.addEventListener('click',function(){
			game("p");
		})
		scissors_div.addEventListener('click',function(){
			game("s");
		})		
	}
	main();
});