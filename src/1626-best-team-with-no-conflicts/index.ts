export function bestTeamScore(scores: number[], ages: number[]): number {
  const pairs: [number, number][] = [];
  for (let i = 0; i < ages.length; i++) {
    pairs.push([ages[i], scores[i]]);
  }

  pairs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  const dp: number[][] = [];

  function findMaxScore(prev: number, curr: number): number {
    if (curr >= pairs.length) {
      return 0;
    }

    dp[prev + 1] = dp[prev + 1] || [];

    if (dp[prev + 1][curr]) {
      return dp[prev + 1][curr];
    }

    if (prev === -1 || pairs[curr][1] >= pairs[prev][1]) {
      dp[prev + 1][curr] = Math.max(
        findMaxScore(prev, curr + 1),
        pairs[curr][1] + findMaxScore(curr, curr + 1)
      );
      return dp[prev + 1][curr];
    }

    dp[prev + 1][curr] = findMaxScore(prev, curr + 1);
    return dp[prev + 1][curr];
  }

  return findMaxScore(-1, 0);
}
