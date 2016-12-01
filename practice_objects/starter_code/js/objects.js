console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {};
var dad = {};



// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').
mom.physicality = {};
mom.personality = {};

dad.physicality = {};
dad.personality = {};

// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.
mom.physicality = {
  age: 32,
  gender: 'female',
  height: ['5 feet', '0 inches'],
  hairAndEyes: {
    hair: 'black',
    eyes: 'black'
  },
  canDrive: true
}

dad.physicality = {
  age: 38,
  gender: 'male',
  height: ['5 feet', '11 inches'],
  hairAndEyes: {
    hair: 'black',
    eyes: 'black'
  },
  canDrive: true
}
// uncomment these console.logs after you write your code
console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!
mom.personality = {
  monthlyRetailTherapyBudgetInUSD: 500,
  zodiacSign: 'sagitarius',
  favoriteColors: ['olive', 'camel', 'burgundy'],
  conversationTopics: {
    positive: ['food', 'daily life'],
    negative: ['religion', 'racial equality']
  },
  isSarcastic: true
}

dad.personality = {
  monthlyRetailTherapyBudgetInUSD: 10000,
  zodiacSign: 'cancer',
  favoriteColors: ['red', 'black'],
  conversationTopics: {
    positive: ['history', 'house chores', 'presents'],
    negative: ['gender equality', 'budgeting']
  },
  isSarcastic: false
}

// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!
var me = {};
me.physicality = {
  age:27,
  canDrive:true,
  gender:'female',
  hairAndEyes: {
    hair: 'black',
    eyes: 'black'
  },
  height: ['5 feet', '6 inches'],
};
me.personality = {
  zodiacSign: 'gemini',
  monthlyRetailTherapyBudgetInUSD: 20,
  isSarcastic: false,
  favoriteColors: ['white', 'pink', 'blue'],
  conversationTopics: {
    positive: ['religion', 'pop culture', 'dogs'],
    negative: ['racism', 'politics']
  }
};

// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.
me.thingsIAmGoodAt = ['eating', 'sitting', 'sleeping'];
me.thingsIAmBadAt = ['exercising', 'conversing', 'dancing'];

// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.physicality.age = 27.5;

// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

me.thingsIAmGoodAt = me.thingsIAmGoodAt.slice(0,((me.thingsIAmGoodAt.length)/2));

// uncomment this console.log after you write your code
console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

me.physicality.age = 27.6;

// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.thingsIAmGoodAt.push('sitting');

// uncomment this console.log after you write your code
console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.
me.thingsIAmBadAt.push('waiting', 'public speaking', 'cooking', 'parallel parking', 'singing');

// uncomment this console.log after you write your code
console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!

var sayItOutLoud = function(classic) {
  document.write(classic);
};

var classic = 'the Buddha is One Who Endures';


// call your function :)
sayItOutLoud(classic);
