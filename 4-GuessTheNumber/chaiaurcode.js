const inputguess=document.querySelector('#guessField')
const submitbtn=document.querySelector('#subt')
const previousguess=document.querySelector('.guesses')
const loworhi=document.querySelector('.lowOrHi')
const remainGuess=document.querySelector('.lastResult')
const textcontainer=document.querySelector('.resultParas')

let playGame=true
let previousGuesscont=[]
let leftnoOfGuess=10
const restartbtn=document.createElement('button')//for restarting display button

const randomNumber=parseInt(Math.random()*100+1)
if(playGame){
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        validateGuess(parseInt(inputguess.value))
    })  
}
function validateGuess(guess){
    if(isNaN(guess))
    {
        alert('Not a valid number')
    }
    else if(guess<1){
        alert('Guess is less than 1')
    }
    else if(guess>100)
    {
        alert('Guess is more than 100')
    }
    else{
        if(previousGuesscont.includes(guess)){
            console.log(previousGuesscont)
            inputguess.value=''
            return alert('This guess is already checked')
            
        }
        else{
            previousGuesscont.push(guess)
            console.log(previousGuesscont)
            cleanupGuess(guess)
            if(leftnoOfGuess<1){  
                displayMessage(`Game Over the correct number was ${randomNumber}`)
                endGame()
            }
            else{
                checkGuess(guess)
            } 
        } 
    }
}

function checkGuess(guess){
    console.log(randomNumber)
    if(guess===randomNumber){
        displayMessage(`${guess} is the correct Guess`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`${guess} is tooo Low`)
    }
    else if(guess>randomNumber){
        displayMessage(`${guess} is tooo high`)
    }
}

function cleanupGuess(guess){
    inputguess.value=''
    leftnoOfGuess--   
    // show previous guesses  
    previousguess.className='restartbutton' 
    previousguess.innerHTML+=`${guess},`
    remainGuess.innerHTML=leftnoOfGuess
}

function displayMessage(message){
    return loworhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
   inputguess.value=''
   inputguess.setAttribute("disabled"," ")
   
   restartbtn.innerHTML='Restart Game'
   textcontainer.appendChild(restartbtn)
   playGame=false
   newGame()
}

function newGame(){
    const newRestartbutton=document.querySelector('.restartbutton')
    newRestartbutton.addEventListener('click',(e)=>{
        e.preventDefault()
        inputguess.value=''   
        previousGuesscont=[]
        leftnoOfGuess=10
        inputguess.removeAttribute('disabled')
        textcontainer.removeChild(restartbtn)
        randomNumber=parseInt(Math.random()*100+1)

        playGame=true
    });
    
}