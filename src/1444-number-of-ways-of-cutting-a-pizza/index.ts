export function ways(pizza: string[], k: number): number {
  const m = pizza.length;
  const n = pizza[0].length;
  const mod = 10 ** 9 + 7;

  const appleCount = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  const memo = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(k + 1).fill(-1))
    );

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const curr = pizza[i][j] === "A" ? 1 : 0;
      appleCount[i][j] =
        appleCount[i][j + 1] +
        appleCount[i + 1][j] -
        appleCount[i + 1][j + 1] +
        curr;
    }
  }

  function dp(i: number, j: number, k: number): number {
    if (k === 1) {
      return appleCount[i][j] > 0 ? 1 : 0;
    }

    if (appleCount[i][j] === 0) {
      return 0;
    }

    if (memo[i][j][k] !== -1) {
      return memo[i][j][k];
    }

    let res = 0;
    for (let newRow = i; newRow < m - 1; newRow++) {
      if (appleCount[newRow + 1][j] === appleCount[i][j]) {
        continue;
      }
      res = (res + dp(newRow + 1, j, k - 1)) % mod;
    }
    for (let newCol = j; newCol < n - 1; newCol++) {
      if (appleCount[i][newCol + 1] === appleCount[i][j]) {
        continue;
      }
      res = (res + dp(i, newCol + 1, k - 1)) % mod;
    }
    return (memo[i][j][k] = res);
  }

  return dp(0, 0, k);
}
