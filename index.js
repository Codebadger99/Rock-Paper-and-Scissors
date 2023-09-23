const buttons = document.querySelectorAll('button')
const container = document.querySelector('.gamingButton')
const subcontainer = document.querySelector('.sub-container')
const finalResult = document.querySelector('.finalResult')


buttons.forEach(button => {
    button.addEventListener('click', () => {
    const player = button.id
    const computer = computerPlay()
    console.log(player);
    console.log(computer);
    const finalResult = playRound(player, computer)
    container.style.display = 'none'
       subcontainer.innerHTML =   `
<div class="result">
      <div class="first-button">
         <h2>You Picked ${player}</h2>
        <button id="rock" class="my-button" disabled>
            <img src="./images/icon-${player}.svg" alt="rock" class="icon" />
          </button>
      </div>
      <button class="play" onclick="${goBack()}">You Will be reverted in 3 sec to play again</button>
      <div class="second-button">
         <h2>The House Pick ${computer}</h2>
         <button id="scissors" class="my-button" disabled>
            <img src="./images/icon-${computer}.svg" alt="scissors" class="icon" />
          </button>
      </div> 
    </div>
     <div class="finalResult">
        ${finalResult}
      </div>
</div> 
      `
   
    }) 

})

function computerPlay(){
    const choices = ["rock","paper", "scissors"]
    const RandomChoices = Math.floor(Math.random() * choices.length)
    return choices[RandomChoices]
}

function playRound(player, computer){
    if(player === computer){
        return "It's a Tie"
    } 
    else if (player == 'rock' && computer == 'scissors' ||
player == 'paper' && computer == 'rock' || player == 'scissors' &&
computer == 'paper'){
        return "You Win"
    } else {
        return "Computer Wins"
    }
}



function goBack(){
     setTimeout(() => {
          location.reload();
     }, 4000);  
}
