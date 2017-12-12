# convert-to-object
Convert string to object (correct json format and fix errors).

## Installation

```bash
$ npm install convert-to-object
```

## Usage

```js
const toObject = require('convert-to-object');

console.log(tmp = toObject(`
	toto : "tutu"
	\'titi\' : tutu
	\'test\' : \'tutu\'
	"tutu" : \`toto, titi and test don\'t do this !\`
`), typeof(tmp));
console.log(tmp = toObject(' toto : "tutu"; \'titi\' : tutu; \'test\' : \'tutu\'; "tutu" : \'toto, titi and test don\'t do this !\'; '), typeof(tmp));
console.log(tmp = toObject(' toto = "tutu", \'titi\' = tutu, \'test\' = \'tutu\', "tutu" = \'toto, titi and test don\'t do this !\', '), typeof(tmp));
console.log(tmp = toObject(' ,toto: "tutu", \'titi\': tutu, \'test\': \'tutu\', "tutu": \'toto, titi and test don\'t do this !\' '), typeof(tmp));
console.log(tmp = toObject(" { 'test': { 'test2' : 'test3' } } "), typeof(tmp));
console.log(tmp = toObject(" { titi: 'tutu et l'autre', titi2: 42, } "), typeof(tmp));
console.log(tmp = toObject(" { titi.tutu.test: 'damn' } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': { 'test2' : { \"toutou\" : 'test3' } } } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': [{ test2: 'damn'}, 'deo'] } "), typeof(tmp));
console.log(tmp = toObject(" [{ 'test': [{ test2: 'damn'}, true] }] "), typeof(tmp));
console.log(tmp = toObject(" ['test', 42, true] }] "), typeof(tmp));

```

## Better to use
`convert-to-object` fix all json errors in string if you have to parse a correct json format to object then you have use JSON.parse.
```js
JSON.parse(str); 
```
