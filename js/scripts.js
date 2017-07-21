//Business Logic
function GameBoard () {
  this.gameDie = new Dice ();
  this.players = [];
}
//Each player alternates turns automatically
GameBoard.prototype.currentPlayer = function(rollin) {
  if (this.players[0].whosTurn === true) {
    this.players[1].whosTurn === false;
    this.players[0].calculateTurn(rollin);
    return ;
  } else {
    this.players[0].whosTurn === false;
    this.players[1].whosTurn === true;
    this.players[1].calculateTurn(rollin);
    return ;
  }
}
//Create dice object with set sides
function Dice () {
  this.sides = 6;
}
//Random number from 1-6
Dice.prototype.diceRoll = function() {
  return Math.floor(Math.random() * this.sides) + 1;
}
//Player Object
function Player (user, turn) {
  this.user = user;
  this.whosTurn = turn;
  this.turn = 0;
  this.total = 0;

}
Player.prototype.calculateTurn = function(thisRoll) {
  //If roll 1 then end
  if (thisRoll === 1) {
    // this.whosTurn = false;
    this.turn = 0;
    //this alert shows up twice on player1 for some reason, little buggy
    // alert('you rolled a one homie');
    return this.whosTurn = false;
  } else if (this.total >= 100) {

    this.turn = 0;
    this.total = 0;

    } else {
      this.turn += thisRoll;
    }
    return true;
  }

Player.prototype.hold = function () {
  this.total += this.turn;
  if (this.total >= 100) {
    console.log('congrats nerd you won!');
    this.turn = 0;
    this.total = 0;
  }
  return this.turn = 0;
}

//User Interface
$(document).ready(function() {
  var game =  new GameBoard ();
  var players = [];
  // Choose one player or two
  $('#onePlayer').click(function() {
    var player1 = new Player ('Player1', true);
    var cpu = new Player ('HAL', false);
    //empty array so index's later match up
    players.length = 0;
    players.push(player1, cpu);
    game.players.length = 0;
    game.players.push(player1, cpu);
    $('.col-md-6').show();
    $('.player2Column h3').text('Hello, my name is HAL.');
    // $('.square2 + p').text("Hal's turn: ");

    $('.btn-danger').hide();
  });

  $('#twoPlayers').click(function() {
    //Create two players
    var player1 = new Player ('Player1', true);
    var player2 = new Player ('Player2', false);
    //Empty array so index's match up
    players.length = 0;
    players.push(player1, player2);
    game.players.length = 0;
    game.players.push(player1, player2);
    $('.col-md-6').show();
    $('.btn-danger').hide();
  });
  //Player one roll random number and add together current turn unless user rolls a 1
  $('.player1').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    game.currentPlayer(thisRoll);
    var turn = game.players[0].calculateTurn(thisRoll);
    if (turn === false) {
      $('.btn-info').show();
      $(this).hide();
      $('.square').text('0');
    }
    //Add this roll number to player turn and player total
    $('.square1').text(thisRoll);
    $('.user1Turn').text(game.players[0].turn);
    $('.user1Total').text(game.players[0].total);
    (game.players);
  });
  //Player 1 save turn and add to total, reset fields
  $('.player1Hold').click(function () {
    game.players[0].hold();
    $('.user1Total').text(game.players[0].total);
    $('.user1Turn').text(game.players[0].turn);
    $('.player1').hide();
    $('.player2').show();
    // $('.square1').text('0');
    $('.square').text('0');
  });
  //Player two roll random number and add together current turn unless user rolls a 1
  $('.player2').click(function() {
    var thisRoll = game.gameDie.diceRoll();
    var turn = game.players[1].calculateTurn(thisRoll);
    if (turn === false) {
      $('.btn-info').show();
      $(this).hide();
      $('.square').text('0');
    }
    //Add this roll number to player turn and player total
    $('.square2').text(thisRoll);
    $('.user2Turn').text(game.players[1].turn);
    $('.user2Total').text(game.players[1].total);
  });
  //Player 2 save turn and add to total, reset fields
  $('.player2Hold').click(function () {
    game.players[1].hold();
    $('.user2Total').text(game.players[1].total);
    $('.user2Turn').text(game.players[1].turn);
    $('.player2').hide();
    $('.player1').show();
    // $('.square2').text('0');
    $('.square').text('0');
  });
});
