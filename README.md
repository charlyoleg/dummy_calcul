# README of dummy_calcul


## Presentation

The repository *dummy_calcul* is for learning and experimenting a TS-written NPM package for use in Node-JS or Browser. It is inspired by this [blog-post](https://dev.to/charperbonaroo/creating-a-ts-written-npm-package-for-use-in-node-js-or-browser-5gm3)

The goal of this library is to learn publishing a npm-package for nodejs and browser.


### Project links

- [github](https://github.com/charlyoleg/dummy_calcul)
- [npm](https://www.npmjs.com/package/dummy-calcul)
- [unpkg](https://unpkg.com/browse/dummy-calcul@1.2.1/)


## Getting started

### for NodeJS

In a bash-terminal:

    mkdir test
    cd test
    npm i dummy-calcul


In a nodejs-script:

    const dummyCalcul = require("dummy-calcul");
    let result = dummyCalcul.add1000(9);
    console.log(result);


### for NodeJS with TypeScript

In a bash-terminal:

    mkdir test
    cd test
    npm i dummy-calcul typescript


In a ts-script, called *abc.ts*:

    import { add1000, mult1000 } from "dummy-calcul";
    console.log(add1000(5));
    console.log(mult1000(7));


In a bash-terminal:

    npx tsc abc.ts
    node abc.js


### for browser

In your html-file:

    <script src="https://unpkg.com/dummy-calcul@1.2.0/dist/dummy-calcul.min.js"></script>


## Publish an update

In a bash-terminal:

    git commit -am "some updates"
    npm version minor
    git push
    npm publish

