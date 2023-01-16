import * as fs from "fs";

export default class Wordle {
    constructor() {
        this.ready = false;
    }
    
    init() {
        let data = JSON.parse(fs.readFileSync("./lib/wordle/words.json", "utf8"));
        this.word = data[Math.floor(Math.random() * data.length)].toLowerCase();
        this.tries = -1;
        this.ready = true;
        this.grid = [
            ["⬜", "⬜", "⬜", "⬜", "⬜"],
            ["⬜", "⬜", "⬜", "⬜", "⬜"],
            ["⬜", "⬜", "⬜", "⬜", "⬜"],
            ["⬜", "⬜", "⬜", "⬜", "⬜"],
            ["⬜", "⬜", "⬜", "⬜", "⬜"],
            ["⬜", "⬜", "⬜", "⬜", "⬜"]
        ];
    }

    guess(word) {
        if (!(this.ready)) {
            throw "You didn't start a new Wordle game yet! Use ~wordle new to start a new Wordle.";
        }
        
        var letters = word.split("");
        
        let i = 0;

        if (letters.length > 5) {
            throw "Word is too long!";
            return;
        } else if (letters.length < 5) {
            throw "Word is too short!";
            return;
        }

        if (this.tries === 5) {
            throw "The Wordle game has finished! Use ~wordle new to start a new Wordle.";
            return;
        } else {
            this.tries++
        }
        
        for (i in letters) {
            if (letters[i] == this.word.split("")[i]) {
                this.grid[this.tries][i] = "🟩";
            } else if (this.word.indexOf(letters[i]) != -1) {
                this.grid[this.tries][i] = "🟨";
            } else {
                this.grid[this.tries][i] = "⬛";
            }
        }
        return this.grid;
    } 

    grid() {
        return this.grid;
    }
}
