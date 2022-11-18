
const { dot, open, close } = { dot: `${'\x5C'}${'\x2E'}`, open: `${'\x5C'}${'\x5B'}`, close: `${'\x5C'}${'\x5D'}` }

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest',
      {
        /**
        * @see {@link https://github.com/facebook/jest/issues/13625}
        * @summary Alternate TypeScript options for Jest
        *
        * @example
        * Compilation error if 'strict' mode is disabled:
        * ```ts
        *{
        *  "extends": "./tsconfig.json",
        *  "compilerOptions": {
        *             // ⇓
        *    "strict": true // ⇦ 
        *             // ⇑
        *  }
        *}
        * ```
        * @see {@link file://./jest.tsconfig.json}
        */
        tsconfig: './jest.tsconfig.json',
      },
    ],
  },
  testEnvironment: 'node',
  testRegex: `${open}.+${close}${dot}ts`,
  collectCoverageFrom: ['src/**/*.ts'],
  automock: true,
  testPathIgnorePatterns: ["JavaScript", "node_modules", "fuck-ups"],
  moduleFileExtensions: ['ts', 'js', 'json'],
  unmockedModulePathPatterns: [
    'jest-editor-support/node_modules',
    'color-convert',
    'chalk',
    'snapdragon',
    'ansi-styles',
    'core-js',
    'debug',
    '@babel/template',
    'graceful-fs',
    '@babel/core',
  ],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/tests/fileMock.ts',
  },
};