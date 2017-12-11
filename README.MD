# convert-to
## Usage
```javascript
const toObject = require('convert-to-object');

// -- to Object
console.log('Object');
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
console.log(tmp = toObject(" { titi: 'tutu et l'autre', titi: 42, } "), typeof(tmp));
console.log(tmp = toObject(" { titi.tutu.test: 'damn' } "), typeof(tmp));
console.log(tmp = toObject(" {{ titi.tutu.test: 'damn' }} "), typeof(tmp));

```