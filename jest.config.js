module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/cache/'],
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-grid-layout|react-resizable|react-syntax-highlighter))/',
    ],
};