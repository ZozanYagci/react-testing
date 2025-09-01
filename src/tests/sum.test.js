import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 +2 to equals 3", () => {
  expect(sum(1, 2)).toBe(3); // 1 ve 2 değerini verdiğimizde beklediğimiz çıktıyı yazıyoruz.
});
