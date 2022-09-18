export function trap(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let maxL = 0;
    let maxR = 0;

    let coating = 0;
    let surface = 0;
    while (l < r) {
        maxL = Math.max(maxL, height[l]);
        maxR = Math.max(maxR, height[r]);
        if (maxL < maxR) {
            coating += maxL;
            surface += height[l];
            l++;
        } else {
            coating += maxR;
            surface += height[r];
            r--;
        }
    }

    return coating - surface;
}