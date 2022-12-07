export default class Wordle {
    async init(word) {
        this.word = word;
        this.tries = -1;
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
        var letters = word.split("");


        let i = 0;

        if (letters.length > 5) {
            throw new Error("Word is too long!");
            return;
        } else if (letters.length < 5) {
            throw new Error("Word is too short!");
            return;
        }

        if (this.tries > 5) {
            throw new Error("Wordle game finished. Use ~wordle new to start a new Wordle.");
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