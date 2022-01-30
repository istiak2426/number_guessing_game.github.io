
let low = 1;
let high = 10;
let cor = Math.floor(Math.random() * high) + low;
console.log(cor)

let userRes = parseInt(prompt("Guess a number between 1-10! You have 3 attempts"))



if(!userRes || userRes < low || userRes > high ){
	alert ("Enter a valid number");
}
else{


for (let i=0; i<3; i++)
{
	if(userRes == cor)
	{
		alert("Game over! You win!")
		break;
	}

		else if(userRes < cor )
		{
			alert("Correct answer is greater! Try again! 2 attempts left");
			let userRes4 = parseInt(prompt("Guess a number between 1-10"));
			if(!userRes4 || userRes4 < low || userRes4 > high )
			{
				alert ("Enter a valid number");
				break;
			}
			else
			{
				if(userRes4 == cor)
				{
					alert("Game over! You win!")
					break;
				}
				else if (userRes4 < cor)
				{
					alert("Correct answer is greater! Try again! 1 attempt left");
					let userRes6 = parseInt(prompt("Guess a number between 1-10"));
					if(!userRes6 || userRes6 < low || userRes6 > high )
					{
						alert ("Enter a valid number");
						break;
					}
					else
					{ 
						if (userRes6 == cor)
						{
						alert("Game over! You win")
						break;
						}
						else
						{
						alert("Game over! You lose!")
						break;
						}
					}
				}
				else
				{
					alert("Correct answer is smaller!! Try again! 1 attempt left");
					let userRes5= parseInt(prompt("Guess a number between 1-10"))
					if(!userRes5 || userRes5 < low || userRes5 > high )
					{
						alert ("Enter a valid number");
						break;
					}
					else
					{
						if(userRes5 == cor)
						{
							alert("Game over! You win")
							break;
						}
						else
						{
							alert("Game over! You lose!");
							break;
						}
					}
				}
			}	
		}

		else 
		{
			alert("Correct answer is smaller! Try again! 2 attempts left");
			let userRes2 = parseInt(prompt("Guess a number between 1-10"));
			if(!userRes2 || userRes2 < low || userRes2 > high )
			{
				alert ("Enter a valid number");
				break;
			}
			else
			{
				if(userRes2 == cor)
				{
					alert("Game over! You win")
					break;
				}
				else if(userRes2 < cor)
				{
					alert("Correct answer is greater! Try again! 1 attempt left");
					let userRes7 = parseInt(prompt("Guess a number between 1-10"));
					if(!userRes7 || userRes7 < low || userRes7 > high )
					{
						alert ("Enter a valid number");
						break;
					}
					else
					{
						if(userRes7 == cor)
						{
							alert("Game over! You win")
							break;
						}
						else
						{
							alert("You lose! Game over")
							break;
						}
					}
				}
				else
				{
					alert("Correct answer is smaller! Try again! 1 attempt left");
					let userRes3 = parseInt(prompt("Guess a number between 1-10"));
					if(!userRes3 || userRes3 < low || userRes3 > high )
					{
						alert ("Enter a valid number");
						break;
					}
					else
					{
						if (userRes3 == cor)
						{
							alert("Game over! You win");
							break;
						}
						else 
						{
							alert("Game over! You lose!")
							break;
						}
					}
				}
			}
		}
} 
}
let againBtn= document.querySelector(".againBtn").addEventListener("click",  restart)

function restart()
{
	location.reload();
}

	


