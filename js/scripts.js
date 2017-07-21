//Business Logic
function GameBoard () {
  this.gameDie = new Dice ();
  this.players = [];
}

  //Create dice object with set sides
function Dice () {
  this.sides = 6;
}
//Random number from 1-6
Dice.prototype.diceRoll = function() {
  return Math.floor(Math.random() * this.sides) + 1;
}
  //Create number of players

  //NEED TO REFACTOR TO MAKE PLAYER1 AND PLAYER2 MATCH UP TO THE USERNAME OF EACH INDEX OF THE PLAYERS ARRAY
  // GameBoard.prototype.makePlayer = function(number) {
  //   for (var i =0; i < number; i++) {
  //   this.players.push(new Player(i + 1) );
  //   }
  // }

  //Player Object
  function Player (user) {
    this.user = user;
    this.whosTurn =
    this.turn = 0;
    this.total = 0;
  }

  Player.prototype.calculateTurn = function(thisRoll) {
    //If roll 1 then end
    if (thisRoll === 1) {
      alert('Your turn is over!');
      this.whosTurn = 0;
      this.turn = 0;
      return false;
    } else {
      this.turn += thisRoll;
      if (this.total >= 100) {
        this.turn = 0;
        this.total = 0;
        alert('You win!!!!!!');
        return true;
      }
    }
  }
  Player.prototype.hold = function () {
    this.total += this.turn;
    if (this.total >= 100) {
      this.turn = 0;
      this.total = 0;
      alert('You win!');
    }
    return this.turn = 0;
  }

//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game =  new GameBoard ();
  var players = [];
  // Choose one player or two
  $('#onePlayer').click(function() {
    var player1 = new Player ('Player1');
    var cpu = new Player ('HAL');
    //empty array so index's later match up
    players.length = 0;
    players.push(player1, cpu);
    game.players.length = 0;
    game.players.push(player1, cpu);
    $('.col-md-6').show();
    $('.player2Column h3').text('Hello, my name is HAL.');
    $('.square2 + p').text("HAL's Total:");
    console.log(players);
    $('.btn-danger').hide();
  });
  $('#twoPlayers').click(function() {
    var player1 = new Player ('Player1');
    var player2 = new Player ('Player2');
    //empty array so index's match up
    players.length = 0;
    players.push(player1, player2);
    game.players.length = 0;
    game.players.push(player1, player2);
    console.log(players);
    $('.col-md-6').show();
    $('.btn-danger').hide();
  });

  //Player one roll random number and add together current turn unless user rolls a 1
  $('.player1').click(function() {
    console.log(players);
    console.log(game.players);
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
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
