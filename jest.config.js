module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ['**/tests/**/*.test.(ts|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
}
