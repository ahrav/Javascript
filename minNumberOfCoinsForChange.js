function minNumberOfCoinsForChange(n, denoms) {
  const numCoins = new Array(n + 1).fill(Infinity);
  numCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numCoins.length; amount++) {
      if (denom <= amount) {
        numCoins[amount] = Math.min(
          numCoins[amount],
          numCoins[amount - denom] + 1
        );
      }
    }
  }
  return numCoins[n] !== Infinity ? numCoins[n] : -1;
}

console.log(minNumberOfCoinsForChange(7, [2, 4]));
