// const gifts = ['teddy bear', 'drone', 'doll'];
//
// function wrapGifts(gifts) {
//   for (let i=0; i<gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
// }


function printBadges(string) {
  for (let i=0; i<string.length; i++) {
    console.log(`Welcome ${string[i]}! You are employee #${i+1}.`)
  }
  return string;
}


function tailsNeverFails () {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
