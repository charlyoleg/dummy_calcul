==============================
Notes on using_the_npm_package
==============================


Presentation
============

The directory *using_the_npm_package* contains mini-npm-projects to demonstrate how to use the *dummy-calcul* npm-package.

The *case_1* and *case_2* show how to use it in the browser without using *unpkg*. *rollup* is used to convert the *dummy-calcul* npm-package into a some javascript that can be served and used by the browser.


case_1
------

The full javascript is processed by *rollup* to be used by some html.


case_2
------

Just a sub-module is processed by *rollup* to be used in some browser-javascript.


case_3
------

*dummy-calcul* is used as a common-js in a nodejs-script.


case_4
------

*dummy-calcul* is used as an es-module in a ts-script.


