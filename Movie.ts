import { Persona } from "./persona";

export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Persona;
    public nacionality: string;
    public director: Persona;
    public writer: Persona;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: Persona;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;

    }
    toText() {
        let res: string = ""
        for (let atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
                res = res + atribute + ":  " + this[atribute] + "\n";
            }
        } console.log(res)
    }
}