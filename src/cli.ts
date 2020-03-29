#!/usr/bin/env node
// cli.ts

import * as cli from "commander";
import * as dummyCalcul from "./index";


// =================================
// define the cli
// =================================
cli
  .version('0.5.0');

cli
  .command('add1000')
  .option('-n, --number [Number]', 'An input number', parseFloat, 5)
  .action( (options) => {
    console.log("%f + 1000 =", options.number);
    // core computation
    let r = dummyCalcul.add1000(options.number);
    console.log("add1000(): " + r.toFixed(2));
});

cli
  .command('mult1000')
  .option('-n, --number [number]', 'An input number', parseFloat, 5)
  .action( (options) => {
    console.log("%f * 1000 =", options.number);
    // core computation
    let r = dummyCalcul.mult1000(options.number);
    console.log("mult1000(): " + r.toFixed(2));
});

cli
  .command('*')
  .action( (cmd) => {
    console.log("ERR234: Error, unkown command: " + cmd);
});


// =================================
// execute the cli
// =================================
cli.parse(process.argv);

