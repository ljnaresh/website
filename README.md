# Website

This repo contains the code for my website, developed using React.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js

### Running locally

1. Install the dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm start
   ```

## Git workflow

This project follows the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification) and uses Commitizen to assist with this commit style.

Committing code changes using Commitizen

```bash
npm run cz
```

## Code formatting

This project uses Prettier to enforce a consistent code style. Prettier is run automatically before commits, thanks to Husky.

## Changelog and Release version

This project uses [Bumped](https://bumped.github.io/index.html) for changelog generation and release versioning.

1. Installing the prerequisite tools

   ```bash
   npm install -g bumped bumped-terminal bumped-changelog bumped-finepack
   ```

2. Dependening on the type of the release execute bumped

   ```bash
   bumped release <major|premajor|minor|preminor|patch|prepatch|prerelease>
   ```
