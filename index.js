// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i += 1) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails += 1;
  }
  return `You got ${tails} tails in a row!`;
}
