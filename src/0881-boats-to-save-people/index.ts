export function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);

  let res = 0;

  let f = 0;
  let t = people.length - 1;

  while (f <= t) {
    if (people[f] + people[t] <= limit) {
      f++;
    }
    t--;
    res++;
  }

  return res;
}
