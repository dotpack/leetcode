function lineOptions([x1, y1]: number[], [x2, y2]: number[]): [number, number] {
  const dx = x1 - x2;
  if (dx === 0) {
    return [+Infinity, x1];
  }
  const dy = y1 - y2;
  const a = dy / dx;
  const b = y1 - a * x1;
  return [a, b];
}

export function maxPoints(points: number[][]): number {
  if (points.length < 2) {
    return points.length;
  }

  let max = 2;
  for (let i = 0; i < points.length; i++) {
    const hash: Record<string, number> = {};
    for (let j = i + 1; j < points.length; j++) {
      const key = lineOptions(points[i], points[j]).join(":");
      hash[key] = hash[key] || 1;
      hash[key] += 1;
      max = Math.max(max, hash[key]);
    }
  }

  return max;
}
