export function closestMeetingNode(
  edges: number[],
  node1: number,
  node2: number
): number {
  function getDistances(edges: number[], node: number): number[] {
    const distances = edges.map(() => -1);
    let step = 0;
    while (node >= 0) {
      if (distances[node] >= 0) {
        break;
      }
      distances[node] = step;
      step++;
      node = edges[node];
    }
    return distances;
  }

  const distances1 = getDistances(edges, node1);
  const distances2 = getDistances(edges, node2);
  let pos = -1;
  let min = +Infinity;
  for (let i = 0; i < distances1.length; i++) {
    const d1 = distances1[i];
    if (d1 === undefined) {
      continue;
    }
    const d2 = distances2[i];
    if (d2 === undefined) {
      continue;
    }
    if (d1 < 0 || d2 < 0) {
      continue;
    }
    const max = Math.max(d1, d2);
    if (max < min) {
      pos = i;
      min = max;
    }
  }
  return pos;
}
