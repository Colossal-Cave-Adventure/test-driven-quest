
class JestTestBench {
  public static isNaturalNumber(candidate?: unknown): candidate is number {
    return typeof candidate === `${typeof Number.MIN_VALUE}` &&
      !Number.isNaN(candidate) &&
      Number.isFinite(Number(candidate)) &&
      Number.isInteger(candidate);
  }
}

const caseLoad = [
  [1, true],
  [(Math.sqrt(5) + 1) / 2, false],
  [undefined, false],
  [null, false],
  [NaN, false],
  [Number.NEGATIVE_INFINITY, false],
  [Number.POSITIVE_INFINITY, false],
];
 /**
* @see {@link https://github.com/facebook/jest/issues/13625}
* @see {@link file://./jest.tsconfig.json}
* @summary Requires 'strict' mode to be disabled to run correctly
*
* @example
* ```ts
*{
*  "extends": "./tsconfig.json",
*  "compilerOptions": {
*             // ⇓
*    "strict": false // ⇦ 
*             // ⇑
*  }
*}
* ```
* 
*/
describe(`${JestTestBench.name}(requires 'strict' mode to be disabled)...`, () => {
  test.each([...caseLoad])(
    `.isNaturalNumber(%p) => %p"`,
    (parameter, expectation) => {
      const result = JestTestBench.isNaturalNumber(parameter);
      expect(result).toEqual(expectation);
    },
  );
});
