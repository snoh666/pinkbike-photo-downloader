export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cache/'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@testing$': '<rootDir>/src/testing/index.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', '<rootDir>/src/mocks/mock-extension-apis.ts'],
};
