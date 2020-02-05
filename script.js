let score1 = document.getElementsByTagName("p")[1]
let score2 = document.getElementsByTagName("p")[2]
let roll = document.getElementsByTagName("p")[3]
let button = document.getElementById("roller")
let reset = document.getElementById("reset")
let dice = document.getElementById("dice")
let current1 = 0
let current2 = 0
let turnTracker = 0

document.addEventListener("click",(event)=> {
    if (event.target == button) {
        let num = Math.ceil(Math.random()* 6)
        if (turnTracker % 2 == 0) {
            current1+=num
        }else{
            current2+=num
        }
        score1.textContent = `Player One's current score is ${current1}`
        score2.textContent = `Player Two's current score is ${current2}`
        switch (true) {
            case num == 1:
                if (turnTracker % 2 == 0) {
                    score1.textContent = "Player One, you lose!"
                    score2.textContent = "Player Two, you win!"
                }else{
                    score1.textContent = "Player One, you win!"
                    score2.textContent = "Player Two, you lose!"
                }
                roll.textContent = `You rolled a one!`
                button.style.display = "none"
                reset.style.display = "inline"
                dice.style.backgroundImage = "url(img/dice1.png)"
                break
            case num == 2:
                roll.textContent = `You rolled a two!`
                dice.style.backgroundImage = "url(img/dice2.png)"
                break
            case num == 3:
                roll.textContent = `You rolled a three!`
                dice.style.backgroundImage = "url(img/dice3.png)"
                break
            case num == 4:
                roll.textContent = `You rolled a four!`
                dice.style.backgroundImage = "url(img/dice4.png)"
                break
            case num == 5:
                roll.textContent = `You rolled a five!`
                dice.style.backgroundImage = "url(img/dice5.png)"
                break
            case num == 6:
                roll.textContent = `You rolled a six!`
                dice.style.backgroundImage = "url(img/dice6.png)"
                break
        }
    }
    if (current1 >= 20) {
        score1.textContent = `Congratulations! You have won with a score of ${current1}.`
        button.style.display = "none"
        reset.style.display = "inline"
    }else if (current2 >= 20) {
        score2.textContent = `Congratulations! You have won with a score of ${current2}.`
        button.style.display = "none"
        reset.style.display = "inline"
    }
    turnTracker++
    if (turnTracker % 2 != 0) {
        button.textContent = "Player Two: ROLL THE DICE"
    }else{
        button.textContent = "Player One: ROLL THE DICE"
    }
})

document.addEventListener("click",(event)=>{
    if (event.target == reset) {
       window.location.reload(true)
    }
})