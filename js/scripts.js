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
    
    if (thisRoll === 1) {
      return thisTurn === 0
    }


  }

  // function rollClick (firstRoll) {
  //   return firstRoll.diceRoll();
  // }

}


//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game = new LetsPlay ();


  $('.player1').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    //Add this roll number to player turn and player total

    var thisTurn = game.player1.turn += thisRoll;
    var sumTotal = game.player1.total += (thisRoll);


    game.player1.roll.unshift(thisRoll);
    console.log(thisTurn);



    // console.log(game.player1.turn += thisRoll);
    // console.log(thisisit);

    $('.square1').text(thisRoll);
  });






  //
  // $('.player2').click(function() {
  //   $('.square2').text(gameDie.diceRoll() );
  // });

});














// $('#twoPlayers').click(function() {
//   var twoPersonGame = new Player ();
// });
