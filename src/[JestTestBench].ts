
class JestTestBench {
  public static isNaturalNumber(candidate?: unknown): candidate is number {
    return typeof candidate === `${typeof Number.MIN_VALUE}` &&
      !Number.isNaN(candidate) &&
      Number.isFinite(Number(candidate)) &&
      Number.isInteger(candidate);
  }
}

const caseLoad = [
  {parameter: 1, /*                        */ expectation: true},
  {parameter: (Math.sqrt(5) + 1) / 2, /*   */ expectation: false},
  {parameter: undefined, /*                */ expectation: false},
  {parameter: null, /*                     */ expectation: false},
  {parameter: NaN, /*                      */ expectation: false},
  {parameter: Number.NEGATIVE_INFINITY, /* */ expectation: false},
  {parameter: Number.POSITIVE_INFINITY, /* */ expectation: false},
];

describe(`${JestTestBench.name}...`, () => {
  test.each([...caseLoad])(
    `.isNaturalNumber() - %p"`,
    ({parameter, expectation}) => {
      const result = JestTestBench.isNaturalNumber(parameter);
      expect(result).toEqual(expectation);
    },
  );
});
