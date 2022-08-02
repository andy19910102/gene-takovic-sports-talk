
class GeneTakovic {
    constructor(customizedSportsTalkList) {
        customizedSportsTalkList = Array.isArray(customizedSportsTalkList) ? customizedSportsTalkList : []
        this.talkCount = 0;
        this.sportsTalkList = [
            "I can't even talk about it",
            "How hard can it be",
            "I was thinking... Hey! this could be a long one!",
            "Maybe...",
            "The worst!",
            "I know!",
            "Me too.",
            ...customizedSportsTalkList
        ];

        this.talk = () => {
            console.log(this.getSportsTalk());
        };

        this.talkRandomly = () => {
            console.log(this.getRandomSportsTalk());
        };

        this.talkAll = (gap) => {
            gap = Number.isInteger(gap) && gap > 0 ? gap : 1000;
            for (let i = 0; i < this.sportsTalkList.length; i++) {
                setTimeout(() => {
                    console.log(this.sportsTalkList[i]);
                }, i * gap);
            }
        }

        this.getSportsTalk = () => {
            const sportsTalk = this.sportsTalkList[this.talkCount % this.sportsTalkList.length];
            this.talkCount += 1;
            return sportsTalk;
        };

        this.getRandomSportsTalk = () => {
            const randomSportsTalk = this.sportsTalkList[Math.floor(Math.random() * this.sportsTalkList.length)];
            return randomSportsTalk;
        };
    }
}

function createGeneTakovic(customizedSportsTalkList) {
    return new GeneTakovic(customizedSportsTalkList);
}

module.exports = createGeneTakovic