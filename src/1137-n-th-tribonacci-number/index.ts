function nBonacci(m: number): (n: number) => number {
  return function (n: number): number {
    const arr = new Array(m).fill(1);
    arr[0] = 0;

    for (let i = m; i <= n; i++) {
      let res = 0;
      for (let j = 0; j < m - 1; j++) {
        res += arr[j];
        arr[j] = arr[j + 1];
      }
      res += arr[m - 1];
      arr[m - 1] = res;
    }

    return arr[m - 1];
  };
}

export function tribonacci(n: number, m = 3): number {
  return nBonacci(m)(n);
}
