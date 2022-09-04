const deck = {
  shuffleDeck() {
    let resultDeck = [];
    const Suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const Rank = [
      "ACE",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "JACK",
      "QUEEN",
      "KING"
    ];
    //  prepare the deck before shuffledeck
    for (let i = 0; i < Suit.length; i++) {
      for (let j = 0; j < Rank.length; j++) 
        resultDeck.push(`${Suit[i]}-${Rank[j]}`)
    }

    //randomize (shuffle) a JavaScript array
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let k = resultDeck.length - 1; k > 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [resultDeck[k], resultDeck[l]] = [resultDeck[l], resultDeck[k]];
    }

    return resultDeck;
  },
  draw(array, num) {
    let onHand = []
    // pick up form the lastest
    for (let i = 0 ; i < num; i++ ) {
        onHand.push(array.pop());
    }
    console.log(onHand);
    return onHand;
  },

  getScore(cards) {
    // card that contain both suit and rank
    let card = cards.split('-')
    // extract it from rank form card
    let Rank = card[1];
    //extract the core
    if (Rank === 'KING' || Rank === 'QUEEN'||Rank === 'JACK' || Rank === '10')  return 0; 
    if (Rank === 'ACE') return 1; 
    return Number(Rank)
  },

  totalScore(card_array) {
    let score = 0;
    for (let i = 0; i < card_array.length; i++) {
        score += this.getScore(card_array[i]);
    }
    return score;
  }

};

module.exports = {deck};