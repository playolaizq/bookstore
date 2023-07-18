import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/(*.)+(spec|test).ts'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  verbose: true,
};

export default config;
