/*! index.spec.ts */

import { add1000, mult1000 } from "../src/index";

test("add1000", () => {
  expect(add1000(5)).toEqual(1005);
});

test("add1056", () => {
  expect(add1000(56)).toEqual(1056);
});

test("mult1000", () => {
  expect(mult1000(5)).toEqual(5000);
});

test("mult1056", () => {
  expect(mult1000(5.6)).toEqual(5600);
});
