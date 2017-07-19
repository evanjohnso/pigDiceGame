//Business Logic
function Dice () {
  this.sides = 6;
}

Dice.prototype.diceRoll = function() {
  return Math.floor(Math.random() * this.sides) + 1;
}









//User Interface
