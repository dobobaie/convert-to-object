# convert-to
## Usage
```javascript
const toObject = require('convert-to-object');

console.log(tmp = toObject(`
	toto : "tutu"
	\'titi\' : tutu
	\'test\' : \'tutu\'
	"tutu"
	:
	\`toto, titi and test don\'t do this !\` `), typeof(tmp));
console.log(tmp = toObject(' toto : "tutu"; \'titi\' : tutu; \'test\' : \'tutu\'; "tutu" : \'toto, titi and test don\'t do this !\'; '), typeof(tmp));
console.log(tmp = toObject(' toto = "tutu", \'titi\' = tutu, \'test\' = \'tutu\', "tutu" = \'toto, titi and test don\'t do this !\', '), typeof(tmp));
console.log(tmp = toObject(' ,toto: "tutu", \'titi\': tutu, \'test\': \'tutu\', "tutu": \'toto, titi and test don\'t do this !\' '), typeof(tmp));
console.log(tmp = toObject(" { 'test': { 'test2' : 'test3' } } "), typeof(tmp));
console.log(tmp = toObject(" { titi: 'tutu et l'autre', titi2: 42, } "), typeof(tmp));
console.log(tmp = toObject(" { titi.tutu.test: 'damn' } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': { 'test2' : { \"toutou\" : 'test3' } } } "), typeof(tmp));
console.log(tmp = toObject(" { 'test': [{ test2: 'damn'}, 'deo'] } "), typeof(tmp));

```