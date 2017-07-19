//Business Logic
function LetsPlay () {
  this.gameDie = new Dice ();
  this.player1 = new Player ();
  this.player2 = new Player ();

  function Dice () {
    this.sides = 6;
  }

  Dice.prototype.diceRoll = function() {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  function Player () {
    this.user = 'Player: ';
    this.roll = [];
    this.turn = 0;
    this.total = 0;
  }

  Player.prototype.calculateTurn = function(thisRoll) {
    if (thisRoll === 1) {
      alert('Your turn is over!');
      return this.turn = 0;
    } else {
      this.turn += thisRoll;
      if (this.total >= 100) {
        this.turn = 0;
        this.total = 0;
        return alert('You win!!!!!!');
      }
    }
  }
  Player.prototype.hold = function () {
    this.total += this.turn;
    return this.turn = 0;
  }
}
//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game =  new LetsPlay ();

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
    console.log(game.player2.turn);
    game.player2.hold();
    // alert("hello");
    $('.user2Total').text(game.player2.total);
    $('.user2Turn').text(game.player2.turn);
  });
});
