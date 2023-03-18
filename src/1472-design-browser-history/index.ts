class BrowserHistoryItem {
  public prev: BrowserHistoryItem | null = null;
  public next: BrowserHistoryItem | null = null;
  constructor(public url: string) {}
}

export class BrowserHistory {
  private curr: BrowserHistoryItem;

  constructor(homepage: string) {
    this.curr = new BrowserHistoryItem(homepage);
  }

  visit(url: string): void {
    const item = new BrowserHistoryItem(url);
    item.prev = this.curr;
    this.curr.next = item;
    this.curr = item;
  }

  back(steps: number): string {
    while (steps && this.curr.prev !== null) {
      this.curr = this.curr.prev;
      steps--;
    }
    return this.curr.url;
  }

  forward(steps: number): string {
    while (steps && this.curr.next !== null) {
      this.curr = this.curr.next;
      steps--;
    }
    return this.curr.url;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
