export function subarraysDivByK(nums: number[], k: number): number {
  let result = 0;

  let prefixMod = 0;
  const modGroups: Record<number, number> = { 0: 1 };
  for (const num of nums) {
    prefixMod = (prefixMod + (num % k) + k) % k;
    modGroups[prefixMod] = modGroups[prefixMod] || 0;
    result += modGroups[prefixMod];
    modGroups[prefixMod]++;
  }

  return result;
}
