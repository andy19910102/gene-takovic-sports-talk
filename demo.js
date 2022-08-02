const createGeneTakovic = require('./index');

const customizedSportsTalkList = [
    "That's great.",
    "Sure, it was the best.",
    "Sometimes.",
    "That's true."
];

const geneTakovic = createGeneTakovic(customizedSportsTalkList);

// sports talk in order
geneTakovic.talk();

// sports talk randomly
geneTakovic.talkRandomly();

// talk every once in a while
geneTakovic.talkAll();

