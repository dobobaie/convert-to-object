const toObject = require('./convertToObject.js');

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

// return ;

console.log(tmp = toObject(`[
  {
    "_id": "5a2ef1703ff6dbd5aaa70ef2",
    "index": 0,
    "guid": "98d4aeeb-28bc-44d4-97e9-884d0ac717c3",
    "isActive": true,
    "balance": "$1,015.26",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "Sadie Guzman",
    "gender": "female",
    "company": "PHUEL",
    "email": "sadieguzman@phuel.com",
    "phone": "+1 (951) 563-2908",
    "address": "673 Johnson Street, Sims, Maryland, 8864",
    "about": "Eu mollit ad consequat aliqua eiusmod aliquip ipsum anim aliqua dolore irure qui. Deserunt eiusmod magna ex occaecat velit ut adipisicing anim ex do cupidatat aliqua aliquip. Velit voluptate sint dolore eu minim id fugiat velit non proident esse nulla.\r\n",
    "registered": "2017-11-09T01:15:07 -01:00",
    "latitude": 64.843591,
    "longitude": 79.159429,
    "tags": [
      "ea",
      "culpa",
      "amet",
      "velit",
      "minim",
      "dolore",
      "sit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Stanley Moss"
      },
      {
        "id": 1,
        "name": "Dollie Kerr"
      },
      {
        "id": 2,
        "name": "Tyler Best"
      }
    ],
    "greeting": "Hello, Sadie Guzman! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5a2ef170ae96d03a40d03169",
    "index": 1,
    "guid": "2697366c-3ea2-4e24-92cd-100daf67f2b3",
    "isActive": true,
    "balance": "$2,286.48",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Tanner Miller",
    "gender": "male",
    "company": "SENTIA",
    "email": "tannermiller@sentia.com",
    "phone": "+1 (943) 456-3441",
    "address": "840 Williams Court, Ebro, Kentucky, 1577",
    "about": "Labore non sit culpa ullamco pariatur qui aute excepteur nisi laborum. Commodo tempor consectetur id commodo elit minim do. Exercitation esse nostrud ea non id deserunt culpa qui dolore commodo.\r\n",
    "registered": "2014-11-04T10:32:47 -01:00",
    "latitude": -89.312956,
    "longitude": -165.629638,
    "tags": [
      "mollit",
      "velit",
      "mollit",
      "et",
      "enim",
      "cillum",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mccray Woodward"
      },
      {
        "id": 1,
        "name": "Battle Patterson"
      },
      {
        "id": 2,
        "name": "Patti Washington"
      }
    ],
    "greeting": "Hello, Tanner Miller! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5a2ef1708b09a1a1d7928feb",
    "index": 2,
    "guid": "6d0167c2-f785-4520-b1c3-d1f9a452c70f",
    "isActive": false,
    "balance": "$1,612.39",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Geneva Hess",
    "gender": "female",
    "company": "SIGNITY",
    "email": "genevahess@signity.com",
    "phone": "+1 (821) 427-2954",
    "address": "323 Sapphire Street, Independence, New York, 2602",
    "about": "Esse esse duis do voluptate elit cillum aliqua ad. Nulla enim ullamco reprehenderit amet enim. Reprehenderit ex fugiat esse qui sit ipsum minim tempor exercitation ipsum anim. Veniam adipisicing pariatur deserunt nisi amet id sit.\r\n",
    "registered": "2014-12-25T11:30:13 -01:00",
    "latitude": -41.518913,
    "longitude": 95.612887,
    "tags": [
      "ullamco",
      "ad",
      "nulla",
      "veniam",
      "elit",
      "sunt",
      "mollit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lorna Blankenship"
      },
      {
        "id": 1,
        "name": "Barnes Crane"
      },
      {
        "id": 2,
        "name": "Aisha Mccarty"
      }
    ],
    "greeting": "Hello, Geneva Hess! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5a2ef170c38bda48707b7382",
    "index": 3,
    "guid": "82e1df56-2b66-4140-9083-c3e4a82916f5",
    "isActive": true,
    "balance": "$2,697.53",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": "Palmer Decker",
    "gender": "male",
    "company": "MAKINGWAY",
    "email": "palmerdecker@makingway.com",
    "phone": "+1 (863) 440-3793",
    "address": "506 Butler Place, Bourg, Illinois, 2509",
    "about": "Consectetur commodo deserunt Lorem fugiat eiusmod qui est tempor excepteur qui exercitation magna ad est. Veniam irure incididunt nisi voluptate aliquip. Non excepteur labore incididunt ullamco cillum sunt magna. Nisi reprehenderit occaecat elit anim nostrud non ad eiusmod enim eiusmod nostrud velit. Ex dolore incididunt ipsum dolor. Sunt sit occaecat tempor dolore id. Sit sunt eiusmod incididunt aute.\r\n",
    "registered": "2015-03-08T11:01:41 -01:00",
    "latitude": 8.74792,
    "longitude": 63.063227,
    "tags": [
      "id",
      "commodo",
      "deserunt",
      "qui",
      "aute",
      "eiusmod",
      "cupidatat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Priscilla Spencer"
      },
      {
        "id": 1,
        "name": "Vasquez Dillard"
      },
      {
        "id": 2,
        "name": "Lauren Serrano"
      }
    ],
    "greeting": "Hello, Palmer Decker! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5a2ef170eb0d755e2bb0a45a",
    "index": 4,
    "guid": "716f5c90-efe8-471d-92b6-5140c6fbbda5",
    "isActive": true,
    "balance": "$2,111.18",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Sonia Vazquez",
    "gender": "female",
    "company": "ZENTIME",
    "email": "soniavazquez@zentime.com",
    "phone": "+1 (930) 563-2546",
    "address": "430 Ovington Court, Summertown, Arkansas, 848",
    "about": "Consequat elit labore non est proident ad incididunt ex culpa enim laborum amet mollit. Ipsum ullamco mollit mollit ea velit laborum exercitation incididunt commodo aliqua adipisicing incididunt. Consectetur id nisi anim Lorem laboris sint cillum laboris amet adipisicing anim elit sit. Laboris ad tempor duis incididunt anim consectetur minim voluptate. Nulla mollit consectetur Lorem amet dolor cillum sit nisi. Occaecat est mollit incididunt sit occaecat qui sunt occaecat. Elit ea exercitation nulla Lorem non quis.\r\n",
    "registered": "2014-04-14T07:42:03 -02:00",
    "latitude": -69.147494,
    "longitude": -11.89958,
    "tags": [
      "Lorem",
      "mollit",
      "sit",
      "occaecat",
      "nostrud",
      "nulla",
      "velit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Adkins Alvarez"
      },
      {
        "id": 1,
        "name": "Staci Barnett"
      },
      {
        "id": 2,
        "name": "Fuentes Hensley"
      }
    ],
    "greeting": "Hello, Sonia Vazquez! You have 3 unread messages.",
    "favoriteFruit": "apple"
  }
]`), typeof(tmp));