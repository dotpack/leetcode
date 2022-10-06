import { TimeMap } from "./index";

describe("0981-time-based-key-value-store", () => {
  it("works fine", () => {
    const timeMap = new TimeMap();
    expect(timeMap.get("foo", 2)).toEqual("");
    timeMap.set("foo", "bar2", 2);
    timeMap.set("foo", "bar3", 3);
    timeMap.set("foo", "bar4", 4);
    timeMap.set("foo", "bar8", 8);
    expect(timeMap.get("foo", 1)).toEqual("");
    expect(timeMap.get("foo", 2)).toEqual("bar2");
    expect(timeMap.get("foo", 4)).toEqual("bar4");
    expect(timeMap.get("foo", 5)).toEqual("bar4");
    expect(timeMap.get("foo", 6)).toEqual("bar4");
    expect(timeMap.get("foo", 7)).toEqual("bar4");
    expect(timeMap.get("foo", 8)).toEqual("bar8");
    expect(timeMap.get("foo", 100)).toEqual("bar8");
  });
});
