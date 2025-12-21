import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

// test repl
describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  hELLo  --worlD  ",
    expected: ["hello", "--world"],
  },
  {
    input: "  HELLO--WORLD  ",
    expected: ["hello--world"],
  },
  {
    input: "    ",
    expected: [],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

// test commands