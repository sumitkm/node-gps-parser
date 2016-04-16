## Compiling and testing code ##

**Build Pre-requisites**  

The module is written in TypeScript, so you'll need the latest (min v1.8) of TypeScript installed

```npm install typescript -g```   

or if you have TypeScript already, update it

```npm update typescript```  

** Getting type definitions **   

We can use the ```typings``` package manager to download TypeScript definitions for node and other libraries.

You can install ```typings``` using ```npm```  

```npm install typings -g```

To restore the type definitions run

```typings install```

**Running tests**  

The library uses nodeunit for testing so install nodeunit globally

```npm install nodeunit -g```

To compile and run tests   

```npm run test```
