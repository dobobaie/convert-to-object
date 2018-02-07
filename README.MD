# convert-to-object
Convert string to object and fix syntax errors.

## Installation

```bash
$ npm install convert-to-object
```

## Usage

```js
const toObject = require('convert-to-object');

console.log(tmp = toObject(`
	name : "tutu"
	\'nickname\' : tutu
	\'email\' : \'tutu\'
	"other" : \`toto, titi and test don\'t do this !\`
`), typeof(tmp));
// => {name: 'tutu', nickname: 'tutu', email: 'tutu', other: 'toto, titi, and test don\'t do this !'}
console.log(tmp = toObject(' toto : "tutu"; \'titi\' : tutu; \'test\' : \'tutu\'; "tutu" : \'toto, titi and test don\'t do this !\'; '), typeof(tmp));
// => {toto: 'tutu', titi: 'tutu', test: 'tutu', tutu: 'toto, titi, and test don\'t do this !'}
console.log(tmp = toObject(' toto = "tutu", \'titi\' = tutu, \'test\' = \'tutu\', "tutu" = \'toto, titi and test don\'t do this !\', '), typeof(tmp));
// => {toto: 'tutu', titi: 'tutu', test: 'tutu', tutu: 'toto, titi, and test don\'t do this !'}
console.log(tmp = toObject(' ,toto: "tutu", \'titi\': tutu, \'test\': \'tutu\', "tutu": \'toto, titi and test don\'t do this !\' '), typeof(tmp));
// => {toto: 'tutu', titi: 'tutu', test: 'tutu', tutu: 'toto, titi, and test don\'t do this !'}
console.log(tmp = toObject(" { 'test': { 'test2' : 'test3' } } "), typeof(tmp));
// => {test: {test2: 'test3'}}
console.log(tmp = toObject(" { titi: 'tutu et l'autre', titi2: 42, } "), typeof(tmp));
console.log(tmp = toObject(" { titi.tutu.test: 'damn' } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': { 'test2' : { \"toutou\" : 'test3' } } } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': [{ test2: 'damn'}, 'deo'] } "), typeof(tmp));
console.log(tmp = toObject(" [{ 'test': [{ test2: 'damn'}, true] }] "), typeof(tmp));
console.log(tmp = toObject(" ['test', 42, true] }] "), typeof(tmp));

```
