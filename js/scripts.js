//Business Logic
function GameBoard () {
  this.gameDie = new Dice ();
  this.player1 = new Player ();
  this.player2 = new Player ();
  this.player1.whosTurn = true;
  this.player2.whosTurn = false;

  //Create dice object with set sides
  function Dice () {
    this.sides = 6;
  }
  //Random number from 1-6
  Dice.prototype.diceRoll = function() {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  //Player Object
  function Player (user) {
    this.user = 'Player' + user;
    this.whosTurn =
    this.turn = 0;
    this.total = 0;
  }

  Player.prototype.calculateTurn = function(thisRoll) {
    //If roll 1 then end
    if (this.whosTurn === true) {
      if (thisRoll === 1) {
        alert('Your turn is over!');
        this.turn = 0;
        console.log(this.whosTurn);
        GameBoard.prototype.toggleTurn();
        this.whosTurn = false;
        console.log(this.whosTurn);

      } else {
        // this.whosTurn = true;
        this.turn += thisRoll;
        console.log(this);
        if (this.total >= 100) {
          this.turn = 0;
          this.total = 0;
          alert('You win!!!!!!');
          return ;

        }
      }
    } else {
      alert('this is false');
    }
  }
  // Player.prototype.toggleTurn = function() {
  //   this.whosTurn = !this.whosTurn;
  // }

  Player.prototype.hold = function () {
    this.total += this.turn;
    if (this.total >= 100) {
      this.turn = 0;
      this.total = 0;
      alert('You win!');
    }
    // console.log('player1 before:' + this.player1.whosTurn);
    // console.log("player1 after: " + this.player1.whosTurn);
    return this.turn = 0;
  }
}




//Toggle each users turn to the opposite of what they were
GameBoard.prototype.toggleTurn = function() {
  alert('whoa babay');
  this.player1.whosTurn = ! this.player2.whosTurn;
  this.player2.whosTurn = ! this.player2.whosTurn;
}


//User Interface
$(document).ready(function() {
  //When document loads, create gameDie
  var game =  new GameBoard ();

  function resetSquare() {
    $('.square').text('0');
  }


  //Player one roll random number and add together current turn unless user rolls a 1
  $('.player1').click(function() {
    //Access dice roll and roll it
    var thisRoll = game.gameDie.diceRoll();
    var turn = game.player1.calculateTurn(thisRoll);
    // if (turn === false) {
    //   $('.btn-info').show();
    //   $(this).hide();
    //   $('.square').text('0');
    // }
    //Add this roll number to player turn and player total
    $('.square1').text(thisRoll);
    $('.user1Turn').text(game.player1.turn);
    $('.user1Total').text(game.player1.total);
  });
  //Player 1 save turn and add to total, reset fields
  $('.player1Hold').click(function () {
    game.player1.hold();
    $('.user1Total').text(game.player1.total);
    $('.user1Turn').text(game.player1.turn);
    game.toggleTurn();

    // $('.player1').hide();
    $('.player2').show();
    // $('.square1').text('0');
    $('.square').text('0');


  });
  //Player two roll random number and add together current turn unless user rolls a 1
  $('.player2').click(function() {
    var thisRoll = game.gameDie.diceRoll();
    var turn = game.player2.calculateTurn(thisRoll);
    // if (turn === false) {
    //   $('.btn-info').show();
    //   $(this).hide();
    //   $('.square').text('0');
    // }
    //Add this roll number to player turn and player total
    $('.square2').text(thisRoll);
    $('.user2Turn').text(game.player2.turn);
    $('.user2Total').text(game.player2.total);
  });
  //Player 2 save turn and add to total, reset fields
  $('.player2Hold').click(function () {
    game.player2.hold();
    $('.user2Total').text(game.player2.total);
    $('.user2Turn').text(game.player2.turn);
    // $('.player2').hide();
    $('.player1').show();
    game.toggleTurn();
    // $('.square2').text('0');
    $('.square').text('0');
    });
});






// Choose one player or two
        // $('#onePlayer').click(function() {
        //   game.makePlayer(1);
        //   console.log(game.players);
        // });
        // $('#twoPlayers').click(function() {
        //   game.makePlayer(2);
        //   console.log(game.players);
        // });
