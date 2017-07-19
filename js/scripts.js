//Business Logic
function GameBoard () {
  this.gameDie = new Dice ();
  this.players = [];
  this.player1 = new Player ();
  this.player2 = new Player ();
  //Create dice object with set sides
  function Dice () {
    this.sides = 6;
  }
  //Create number of players

  //NEED TO REFACTOR TO MAKE PLAYER1 AND PLAYER2 MATCH UP TO THE USERNAME OF EACH INDEX OF THE PLAYERS ARRAY
  GameBoard.prototype.makePlayer = function(number) {
    for (var i =0; i < number; i++) {
    this.players.push(new Player(i+1));
    }
  }
  //Random number from 1-6
  Dice.prototype.diceRoll = function() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
  //Player Object
  function Player (user) {
    this.user = 'Player' + user;
    this.whosTurn = 0;
    this.turn = 0;
    this.total = 0;
  }
  //If roll 1 then end
  Player.prototype.calculateTurn = function(thisRoll) {
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
}
//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game =  new GameBoard ();
  //Choose one player or two
  $('#onePlayer').click(function() {
    var newestPlayers = game.makePlayer(1);
    console.log(game.players);
  });
  $('#twoPlayers').click(function() {
    var newestPlayers = game.makePlayer(2);
    console.log(game.players);
  });
  //Player one starts game..
  $('.player1').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    game.player1.calculateTurn(thisRoll);
    //Add this roll number to player turn and player total
    $('.square1').text(thisRoll);
    $('.user1Turn').text(game.player1.turn);
    $('.user1Total').text(game.player1.total);
  });
  $('.player1Hold').click(function () {
    console.log(game.player1.turn);
    game.player1.hold();
    $('.user1Total').text(game.player1.total);
    $('.user1Turn').text(game.player1.turn);
    $('.player1').hide();
    $('.player2').show();
    $('.square1').text('0');
  });


  $('.player2').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    game.player2.calculateTurn(thisRoll);
    //Add this roll number to player turn and player total
    $('.square2').text(thisRoll);
    $('.user2Turn').text(game.player2.turn);
    $('.user2Total').text(game.player2.total);
  });
  $('.player2Hold').click(function () {
    game.player2.hold();
    $('.user2Total').text(game.player2.total);
    $('.user2Turn').text(game.player2.turn);
    $('.player2').hide();
    $('.player1').show();
    $('.square2').text('0');
  });
});
