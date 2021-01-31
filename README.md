# EEMIfrontend project

This project shows a standard 52-card deck.

You can find the landing page on `/`.
The `/cards` path display the card list.
By clicking on one of them, you can access `/cards/:id` which let you see all the current card details.

* * * * *

## How to run the app

First, you need to add a `.env.local` file with

```
URL="http://localhost:3000/"
```

Then you can go !

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

Find project here :

https://standard52carddeck.vercel.app/
