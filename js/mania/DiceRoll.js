'use strict';

class DiceRoll {
    static d10() {
        return DiceRoll._dx(10);
    }

    static d6() {
        return DiceRoll._dx(6);
    }

    static _dx(x) {
        return Math.floor(Math.random() * x) + 1;
    }
}