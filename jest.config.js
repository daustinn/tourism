import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config = {
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

export default createJestConfig(config)
