# Monorepo Experiments

A minimal repository for monorepo testing.

- _/consumer_ - The main project
- _/shared_ - A local shared dependency

## Package Scripts

These can be run with `yarn run` or `npm run`:

- `install:npm`: "npm install",
- `install:yarn`: "yarn install",
- `start:npm`: "node --preserve-symlinks index.js",
- `start:yarn`: "node index.js"

## Pros/Cons

#### npm

Pros:
- Updates to files in _/shared_ are immediate availabe in _/consumer_

Cons:
- The node process must be run with the `--preserve-symlinks` flag, otherwise the `shared` module doesn't have access to peer dependencies.

#### yarn

Pros:
- We can run the node process as normal because peer dependencies are accessible from `shared` (needs more research)

Cons:
- Updates to files in _/shared_ require a reinstall of _/consumer_ for some reason (needs more research)