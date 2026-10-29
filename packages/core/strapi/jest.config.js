'use strict';

module.exports = {
  preset: '../../../jest-preset.unit.js',
  transform: {
    '^.+\\.ts$': ['@swc/jest'],
  },
  testMatch: ['<rootDir>/**/*.test.ts'],
  displayName: 'SKPL',
  moduleNameMapper: {
    '^inquirer$': '<rootDir>/src/test/mocks/inquirer.ts',
  },
};
