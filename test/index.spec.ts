/*! index.spec.ts */

import { add1000, mult1000 } from "../src/index";

test("add1000", () => {
  expect(add1000(5)).toEqual(1005);
});

test("mult1000", () => {
  expect(mult1000(5)).toEqual(5000);
});
