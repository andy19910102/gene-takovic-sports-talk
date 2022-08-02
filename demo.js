const createGeneTakovic = require("./index");

const customizedPhraseList = [
    // "That's great.",
    // "Sure, it was the best.",
    // "Sometimes.",
    // "That's true."
];

const geneTakovic = createGeneTakovic(customizedPhraseList);

// sports talk in order
// geneTakovic.talk();
// geneTakovic.talk(false);
// geneTakovic.talk();
// geneTakovic.talk(false);
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();
// geneTakovic.talk();

// sports talk randomly
geneTakovic.talkRandomly();
geneTakovic.talkRandomly();
geneTakovic.talkRandomly();

// talk every phrase once in a while
// geneTakovic.talkAll(600);

