## Compiling and testing code ##

**Build Pre-requisites**  

The module is written in TypeScript, so you'll need the latest (min v1.8) of TypeScript installed

```npm install typescript -g```   

or if you have TypeScript already, update it

```npm update typescript```  

**Getting type definitions**   

Type definitions are now part of packages.json so ```npm install``` will install them as well, no additional steps required.

**Running tests**  

The library uses nodeunit for testing so install nodeunit globally

```npm install nodeunit -g```

To compile and run tests   

```npm run test```
