# github-action-simple-CI-CD

A simple Node.js repository to practice GitHub Actions CI/CD pipelines.

## Project Structure

```
├── src/
│   ├── app.js           # Application entry point
│   └── calculator.js    # Calculator module
├── test/
│   └── calculator.test.js  # Unit tests (Jest)
├── .github/
│   └── workflows/
│       ├── ci.yml       # CI: lint & test on every push / pull request
│       └── cd.yml       # CD: lint, test, and deploy on push to main
├── .eslintrc.json       # ESLint configuration
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the app
npm start

# Run tests
npm test

# Run linter
npm run lint
```

## GitHub Actions Workflows

### CI (`ci.yml`)
Triggered on **every push** and **pull request targeting `main`**.
- Runs on Node.js 18.x and 20.x
- Installs dependencies (`npm ci`)
- Lints source and test files with ESLint
- Executes the Jest test suite

### CD (`cd.yml`)
Triggered on **push to `main`** (i.e., after a PR is merged).
- Installs dependencies
- Lints and tests the code
- Runs the application
- Prints a deployment success message