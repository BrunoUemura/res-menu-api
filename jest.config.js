module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: ['src/server.ts'],
  coverageDirectory: 'test/coverage',
  setupFiles: ['./test/setup-tests.ts'],
};
