// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

$(function() {
  $(".deal").on("click",function(event){

  // Your code goes here!
    event.preventDefault()
    console.log(getDeck()[1])
    var deck = getDeck().shuffle()
    $("#c1").attr("src","http://golearntocode.com/images/cards/" + deck[1] + ".png")
    $("#c2").attr("src","http://golearntocode.com/images/cards/" + deck[2] + ".png")
    $("#c3").attr("src","http://golearntocode.com/images/cards/" + deck[3] + ".png")
    $("#c4").attr("src","http://golearntocode.com/images/cards/" + deck[4] + ".png")
    $("#c5").attr("src","http://golearntocode.com/images/cards/" + deck[5] + ".png")
// go c1 to c5
})
})
