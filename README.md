# EEMIfrontend project

This project shows a standard 52-card deck.

You can find the landing page on `/`.
The `/cards` path display the card list.
By clicking on one of them, you can access `/cards/:id` which let you see all the current card details.

* * * * *

## How to run the app

```bash
# Initialize project
yarn install

# run project in dev environment
yarn dev

```

For production deployment, 2 bash views needed :
```bash
# on first
yarn dev

# on second
yarn build

# When it is done, you can exit them all and run
yarn start
```

* * * * *

## How to run tests

```bash
yarn test
```


* * * * *

## How to use backstopjs

Backstopjs is installed in dev environment.

If you don't have backstopjs CLI locally, don't worry, use : `yarn backstop` instead.

Backstop is already initialized. All you need to run is: 

```bash
backstop test --config="backstop.config.js"

# or if you don't have the CLI locally run

yarn backstop test --config="backstop.config.js"
```

* * * * *
## Deploy on Vercel

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/hello-world)
