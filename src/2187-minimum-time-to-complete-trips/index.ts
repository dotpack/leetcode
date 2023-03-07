export function minimumTime(time: number[], totalTrips: number): number {
  let left = 0;
  let right = totalTrips * time[0];
  let ans = right;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < time.length; i++) {
      count += Math.floor(mid / time[i]);
    }
    if (count >= totalTrips) {
      ans = Math.min(ans, mid);
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
