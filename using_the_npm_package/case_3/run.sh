#!/usr/bin/env bash
# run.sh

echo ">>> using dummy-calcul from a nodejs-script"
node abc.js

echo ">>> using the dummy-calcul-cli"
npx dummy-calcul-cli add1000 -n 33
npx dummy-calcul-cli mult1000 -n 22

echo "the end"
