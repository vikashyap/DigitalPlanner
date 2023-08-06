module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testEnvironment: 'jest-environment-jsdom',

};