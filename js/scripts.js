//Business Logic
function LetsPlay () {
  this.gameDie = new Dice();
  this.player1 = new Player ();

  function Dice () {
    this.sides = 6;
  }

  Dice.prototype.diceRoll = function() {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  function Player () {
    this.user = 'Player 1';
    this.roll = [];
    this.turn = 0;
    this.total = 0;
  }

  Player.prototype.calculateTurn = function(thisRoll) {
    if (thisRoll === 1) {
      console.log('Your turn is over!');
      return this.turn = 0;
    } else {
      this.turn += thisRoll;
      this.total += thisRoll;
      if (this.total >= 100) {
        this.turn = 0;
        this.total = 0;
        return alert('You win!!!!!!');
      }
  }

  // function rollClick (firstRoll) {
  //   return firstRoll.diceRoll();
  // }

}

}
//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game = new LetsPlay ();


  $('.player1').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    game.player1.calculateTurn(thisRoll);
    //Add this roll number to player turn and player total
    //
    // var thisTurn = game.player1.turn += thisRoll;
    // var sumTotal = game.player1.total += (thisRoll);

    // game.player1.roll.unshift(thisRoll);
    // console.log(thisTurn);
    $('.square1').text(thisRoll);
    $('.user1Turn').text(game.player1.turn);
    $('.user1Total').text(game.player1.total);
  });
});
