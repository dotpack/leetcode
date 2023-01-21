class Address {
  constructor(private readonly ip: number[] = []) {}

  add(num: number): boolean {
    if (num > 255) {
      return false;
    }

    this.ip.push(num);
    return true;
  }

  pop() {
    this.ip.pop();
  }

  isValid(): boolean {
    return this.ip.length === 4;
  }

  toString(): string {
    return this.ip.join(".");
  }
}

export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  const numbers = s.split("").map((x) => +x);

  const address = new Address();

  function run(i: number): void {
    if (i === s.length) {
      if (address.isValid()) {
        result.push(address.toString());
      }
      return;
    }

    const a1 = numbers[i];
    if (address.add(a1)) {
      run(i + 1);
      address.pop();
    }
    if (a1 === 0) {
      return;
    }

    if (i + 1 >= numbers.length) {
      return;
    }
    const a2 = 10 * a1 + numbers[i + 1];
    if (address.add(a2)) {
      run(i + 2);
      address.pop();
    }

    if (i + 2 >= numbers.length) {
      return;
    }
    const a3 = 10 * a2 + numbers[i + 2];
    if (address.add(a3)) {
      run(i + 3);
      address.pop();
    }
  }

  run(0);

  return result;
}
