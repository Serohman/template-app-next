# Template: NPM Package

[![CI](https://github.com/<USERNAME>/<REPO>/actions/workflows/release.yml/badge.svg)](https://github.com/<USERNAME>/<REPO>/actions/workflows/release.yml)
[![Coverage Status](https://img.shields.io/badge/coverage--report-Check%20Artifacts%20Tab-brightgreen)](../../actions?query=workflow%3ACI)

This is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) which you can use to quickly bootstrap your own Next app.

## Features

- **Static Typing**: Uses [TypeScript](https://www.typescriptlang.org/) for improved type safety and a better developer experience
- **Testing**: Pre-configured [Jest](https://jestjs.io/) setup for writing and running unit tests efficiently
- **Linting**: Leverages [ESLint](https://eslint.org/) to catch potential bugs and enforce coding standards
- **Auto-Formatting**: Ensures consistent code style with automated formatting using [Prettier](https://prettier.io/)
- **Continuous Integration (CI)**: Pre-configured [GitHub Actions](https://docs.github.com/en/actions) for linting, testing, building, and formatting in CI environments
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)-managed Git hooks to run scripts before commits, pushes, and other Git actions, ensuring code quality
- **Automated Publishing**: Uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release) to automate package versioning and publishing.

## Table of Contents

- [Quick Start](#quick-start)
  - [Clone the template](#1-clone-the-template)
  - [Set Up NPM Authentication](#2-set-up-npm-authentication)
  - [Install dependencies](#3-install-dependencies)
  - [Set package metadata](#4-set-package-metadata)
  - [Publish your package](#5-publish-your-package)
- [Available NPM Scripts](#available-npm-scripts)
- [Testing](#testing)
  - [Run tests](#run-tests)
  - [Example test](#example-test)

## Quick Start

#### 1. Clone the template

The fastest way is to use GitHub CLI:

```bash
# Create a new repository using a template and clone it
gh repo create new-repo-name --template serohman/template-app-next
gh repo clone new-repo-name
```

Or refer to the [official guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for creating repositories from a template.

#### 2. Install dependencies

```bash
npm install
```

## Available NPM Scripts

#### General

These commands are used during the development process to build, test, lint, and format the code.

- `dev`: Start the development environment script.
- `start`: An alias for `dev`
- `test`: Runs Jest in watch mode.
- `lint`: Runs ESLint on the `./src` directory.
- `format`: Formats the code in the `./src` directory using Prettier.

#### Precommit Hooks

These commands are executed before a commit is made to ensure code quality and consistency. They check for issues in the staged files, attempt to fix them automatically (using the --fix flag), and display an error if the issues cannot be fixed. If any problems remain unresolved, the commit is prevented.

- `precommit`: Runs lint-staged to check staged files.
- `precommit:format`: Formats staged files using Prettier.
- `precommit:check`: Type checks the code without emitting output.

#### Continuous Integration

These commands are executed by GitHub Actions on the `release` branch. Each time a change is pushed to the `release` branch, these actions are triggered. If any action fails, the release process is halted until the issues are resolved.

- `ci:lint`: Runs ESLint with a CI-specific configuration.
- `ci:test`: Runs Jest with a CI-specific configuration.
- `ci:build`: Builds the TypeScript project.
- `ci:format`: Checks code formatting using Prettier.

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

### Run tests

```bash
npm test
```

### Example test

```tsx
// src/app/Greeting.test.tsx
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import React from "react";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("renders the correct greeting", () => {
    render(<Greeting name="World" />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
});
```

---
