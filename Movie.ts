import { Persona } from "./persona";



export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: string;
    public nacionality: string;
    public director: string;
    public writer: string;
    public language:string;
    public platform:string;
    public isMCU:string;
    public mainCharacterName: string;
    public producer: string;
    public genre: string;
    public disp:boolean;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.disp=true;

    
    }
    public toTextVideo():string {
        let res: string = ""
        for (let atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
                res = res + atribute + ":  " + this[atribute] + "\n";
            }
        }
        return res;
    }
}