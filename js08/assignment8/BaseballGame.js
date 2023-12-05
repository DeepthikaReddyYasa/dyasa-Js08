class BaseballGame {
    constructor() {
        this.key = this.generateKey();
    }

    generateKey() {
        let key = '';
        while (key.length < 3) {
            let num = Math.floor(Math.random() * 10).toString();
            if (!key.includes(num)) {
                key += num;
            }
        }
        return key;
    }

    calculateStats(userGuess) {
        let balls = 0;
        let strikes = 0;
        for (let i = 0; i < 3; i++) {
            if (this.key[i] === userGuess[i]) {
                strikes++;
            } else if (this.key.includes(userGuess[i])) {
                balls++;
            }
        }
        return [ balls, strikes ];
    }
}