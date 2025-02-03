'use scrict'

class GameState {
    humanPlayer = null;
    aiPlayer = null;

    constructor() {
        this.humanPlayer = new Player();
        this.aiPlayer = new AIPlayer();
    }
}