import { BrowserHistory } from ".";

describe("1472-design-browser-history", () => {
  it.each([
    [
      [
        "BrowserHistory",
        "visit",
        "visit",
        "visit",
        "back",
        "back",
        "forward",
        "visit",
        "forward",
        "back",
        "back",
      ],
      [
        ["leetcode.com"],
        ["google.com"],
        ["facebook.com"],
        ["youtube.com"],
        [1],
        [1],
        [1],
        ["linkedin.com"],
        [2],
        [2],
        [7],
      ],
      [
        null,
        null,
        null,
        null,
        "facebook.com",
        "google.com",
        "facebook.com",
        null,
        "linkedin.com",
        "google.com",
        "leetcode.com",
      ],
    ],
  ])("works", (methods, params, results) => {
    const homePage = params[0][0] as string;
    const browserHistory = new BrowserHistory(homePage);

    for (let i = 1; i < methods.length; i++) {
      const methodName = methods[i] as keyof BrowserHistory;
      const method = browserHistory[methodName].bind(browserHistory) as any;
      const args = params[i] as any[];
      const result = results[i];
      const ans = method(...args);
      expect(ans === undefined ? null : ans).toEqual(result);
    }
  });
});
