# Gene Takovic Sports Talk

Give you some of these sports talk like what Gene Takovic said from Better Call Saul.

![gene-takovic-sports-talk](https://i.imgur.com/USCQWKU.jpg)

## Installation

```shell
$ npm install gene-takovic-sports-talk
```

## Quick Start

```javascript
const createGeneTakovic = require('./index');

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

## Add customized phrase

```javascript
const createGeneTakovic = require('./index');

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