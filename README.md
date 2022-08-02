# Gene Takovic Sports Talk

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

Give you some of these sports talk like what Gene Takovic said from Better Call Saul.

<img src="https://i.imgur.com/USCQWKU.jpg" width="250px" alt="gene-takovic-sports-talk">

## Installation

```shell
$ npm install gene-takovic-sports-talk
```

## Quick start

```javascript
const createGeneTakovic = require("gene-takovic-sports-talk");

const geneTakovic = createGeneTakovic();

geneTakovic.talk();
// I can't even talk about it
geneTakovic.talk();
// How hard can it be
geneTakovic.talk();
// I was thinking... Hey! this could be a long one!
geneTakovic.talk();
// Maybe...
geneTakovic.talk();
// The worst!
```

## GeneTakovic Object

### Add customized phrase

```javascript
const createGeneTakovic = require("gene-takovic-sports-talk");

const customizedPhraseList = [
    "That's great.",
    "Sure, it was the best.",
    "Sometimes.",
    "That's true."
];

const geneTakovic = createGeneTakovic(customizedPhraseList);

geneTakovic.talkAll();
/*
I can't even talk about it
How hard can it be
I was thinking... Hey! this could be a long one!
Maybe...
The worst!
I know!
Me too.
That's great.
Sure, it was the best.
Sometimes.
That's true.
*/
```

### Methods

#### talk(useColor)

useColor: default true

Call this function to print the sports talk in order.

```javascript
geneTakovic.talk();
// I can't even talk about it
geneTakovic.talk();
// How hard can it be
geneTakovic.talk();
// I was thinking... Hey! this could be a long one!
```

#### talkAll(gap, useColor)

gap: default 1000
useColor: default true

Talk every phrase once in a while

```javascript
geneTakovic.talkAll();
/*
I can't even talk about it
How hard can it be
I was thinking... Hey! this could be a long one!
Maybe...
The worst!
I know!
*/
```

<img src="https://i.imgur.com/1L1FiZE.png" width="250px" alt="talkAll demo">

#### talkRandomly(useColor)

useColor: default true

Call this function to print the sports talk ramdomly.

```javascript
geneTakovic.talkRandomly();
// I was thinking... Hey! this could be a long one!
geneTakovic.talkRandomly();
// I can't even talk about it
geneTakovic.talkRandomly();
// How hard can it be
```

#### getSportsTalk()

Return a sports talk in order.

#### getRandomSportsTalk()

Return a sports talk ramdomly.

