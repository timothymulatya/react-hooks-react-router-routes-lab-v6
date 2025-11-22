// src/__tests__/setup.js
require('@testing-library/jest-dom');

const { cleanup } = require('@testing-library/react');

afterEach(() => {
  cleanup();
});