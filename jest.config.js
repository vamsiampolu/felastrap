const styleExtension = "\\.(css|less|scss|sass)$";
const assetExtension = "\\.(gif|ttf|eot|svg|png)$";

const moduleNameMapper = {
  [styleExtension]: "identity-obj-proxy",
  [assetExtension]: "<rootDir>/fileMock.tsx",
};

const config = {
  injectGlobals: true,
  testEnvironment: "jsdom",
  testTimeout: 10000,
  rootDir: ".",
  setupFiles: ["<rootDir>/setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsConfig: "tsconfig.test.json",
      },
    ],
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.tsx"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/test-helpers/",
    "src/array.prototype.tosorted.d.ts",
    "src/fela-sort-classnames.d.ts",
    "src/html-attributes.d.ts",
    "src/vite-env.d.ts",
    "src/stories/",
    "src/pages/",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
