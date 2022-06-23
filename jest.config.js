module.exports = {
  testIgnorePatterns: ["/node_modules", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  tranform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babela-jest",
  },
  testEnvironment: "jsdom",
};
