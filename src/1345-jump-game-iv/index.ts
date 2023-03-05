export function minJumps(arr: number[]): number {
  const n = arr.length;

  const map = arr.reduce<Record<number, number[]>>((acc, num, i) => {
    acc[num] = acc[num] || [];
    acc[num].push(i);
    return acc;
  }, {});

  const visited = [true];
  const q = [0];

  let steps = 0;
  while (q.length) {
    for (let j = q.length - 1; j >= 0; j--) {
      const pos = q.shift();
      if (pos === undefined) {
        continue;
      }

      if (pos === n - 1) {
        return steps;
      }

      const num = arr[pos];
      const next = [...(map[num] || []), pos - 1, pos + 1];
      for (const j of next) {
        if (j >= 0 && j < n && !visited[j]) {
          visited[j] = true;
          q.push(j);
        }
      }
      delete map[num];
    }

    steps++;
  }

  return steps;
}
