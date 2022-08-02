
class GeneTakovic {
    constructor(customizedSportsTalkList) {
        customizedSportsTalkList = Array.isArray(customizedSportsTalkList) ? customizedSportsTalkList : []
        this.talkCount = 0;
        this.colorCount = 0;

        this.sportsTalkList = [
            "I can't even talk about it.",
            "How hard can it be?",
            "I was thinking... Hey! this could be a long one!",
            "Maybe...",
            "The worst!",
            "I know!",
            "Me too.",
            ...customizedSportsTalkList
        ];

        this.colorList = [
            "\x1b[30m", "\x1b[31m",
            "\x1b[32m",
            "\x1b[33m",
            "\x1b[34m",
            "\x1b[35m",
            "\x1b[36m",
            "\x1b[37m",
        ];

        this.talk = (useColor = true) => {
            if (useColor) {
                this.printWithColor(this.getSportsTalk());
            } else {
                console.log(this.getSportsTalk());
            }
        };

        this.talkRandomly = (useColor = true) => {
            if (useColor) {
                this.printWithColor(this.getRandomSportsTalk());
            } else {
                console.log(this.getRandomSportsTalk());
            }
        };

        this.talkAll = (gap, useColor = true) => {
            gap = Number.isInteger(gap) && gap > 0 ? gap : 1000;
            for (let i = 0; i < this.sportsTalkList.length; i++) {
                setTimeout(() => {
                    if (useColor) {
                        this.printWithColor(this.sportsTalkList[i]);
                    } else {
                        console.log(this.sportsTalkList[i]);
                    }
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

        this.printWithColor = (context) => {
            const color = this.colorList[this.colorCount % this.colorList.length];
            console.log(`${color}%s\x1b[0m`, context);
            this.colorCount += 1;
        }
    }
}

function createGeneTakovic(customizedSportsTalkList) {
    return new GeneTakovic(customizedSportsTalkList);
}

module.exports = createGeneTakovic