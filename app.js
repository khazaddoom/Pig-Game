/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var rollDiceBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-hold');
var dicePic = document.querySelector('.dice');

var activePlayer = 0;
var diceRolleValue;
var currentScore;
var currentPlayer;


rollDiceBtn.addEventListener('click', function() {

   diceRolleValue = Math.floor(Math.random() * 6)
   diceRolleValue++;

   //change the current score of the activePlayer
   currentPlayer = document.querySelector('#current-' + activePlayer);

   currentScore = parseInt(document.querySelector('#current-' + activePlayer).textContent);
   currentScore += diceRolleValue;

   currentPlayer.textContent = currentScore;

   //change the dice picture to mimic the rolled dice number
   dicePic.src = 'dice-' + diceRolleValue + '.png';

   //document.querySelector('#current-0').innerHTML = '<h1>' + (num + 1) + '</h1>';

});

holdBtn.addEventListener('click', function() {

    if (activePlayer === 0) {
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }



});




