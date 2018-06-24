/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var diceImgDOM = document.querySelector('.dice');
var player1GlobalScore = 0;
var player2GlobalScore = 0;
var activePlayer = 0;
var roundScore = 0;
var lastDice = 0;

var globalScore1DOM = document.getElementById('score-0');
var globalScore2DOM = document.getElementById('score-1');

//Initialize the placeholders to 0
globalScore1DOM.textContent = '0';
globalScore2DOM.textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Initially hide the dice image
diceImgDOM.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('#current-' + activePlayer);
    
    if (dice === 6 && dice === lastDice) {
        alert('2 6s in a row!');
        roundLost(diceDOM);
        lastDice = 0;
        return;
    }

    //display the dice image and
    //change the dice picture to show the rolled dice numbered image
    diceImgDOM.style.display = 'block';
    diceImgDOM.src = 'dice-' + dice + '.png';


    if (dice !== 1) {
        //Calculate the round score
        roundScore += dice;
        if ((roundScore + activePlayerGlobalScore()) >= 25) {
            document.querySelector('.player-' + activePlayer + '-panel' ).classList.toggle('winner');
        }
        
        //set the round score summed up number to the element
        diceDOM.textContent = roundScore;
        
    } else {
        roundLost(diceDOM);
    }
    //set the lastDice to the current rolled dice
    lastDice = dice;

});

function roundLost(diceDOM) {

    //hide the dice image
    diceImgDOM.style.display = 'none';
    //toggle active status of the current activePlayer
    document.querySelector('.player-' + activePlayer + '-panel' ).classList.toggle('active');
    roundScore = 0;
    diceDOM.textContent = roundScore;
    //change to new player
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel' ).classList.toggle('active');

}

document.querySelector('.btn-hold').addEventListener('click', function() {

    //last dice to 0 to avoid clashing an immediate 6 from another player
    lastDice = 0;

    diceImgDOM.style.display = 'none';

    var diceDOM = document.querySelector('#current-' + activePlayer);
    diceDOM.textContent = '0';

    document.querySelector('.player-' + activePlayer + '-panel' ).classList.toggle('active');

    //get the round score of active player and sum to global score of active player
    if (activePlayer === 0) {

        player1GlobalScore += roundScore;
        globalScore1DOM.textContent = player1GlobalScore;
        activePlayer = 1;
        

    }else {

        player2GlobalScore += roundScore;
        globalScore2DOM.textContent = player2GlobalScore
        activePlayer = 0;
    }
    

    roundScore = 0;
    document.querySelector('.player-' + activePlayer + '-panel' ).classList.toggle('active');



});

function activePlayerGlobalScore() {

  return activePlayer === 0? player1GlobalScore : player2GlobalScore;

}




