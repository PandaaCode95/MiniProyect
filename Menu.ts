import { Movie } from "./Movie"
import { Videoteca } from "./Videoteka";
const inquirer = require('inquirer');
export class Menu{
    
let movie1 = new Movie("2Tontos y medio", 1998, "EEUU", "Comedia")
let movie2 = new Movie("Perdidos en Bollywood", 2015, "India", "Comedia")
let movie3 = new Movie("India y Juan", 2001, "UK", "Accion")
let movie4 = new Movie("The Scranton", 2005, "EEUU", "Drama")
let movie5 = new Movie("Vida de Michael Scott", 2007, "EEUU", "Comedia")
let movie6 = new Movie("Dunder Mifflin", 2012, "EEUU", "Terror")

let videotk = new Videoteca("PandaClub", [movie2, movie3, movie4, movie5, movie6])

function sacarPeli(){
    inquirer.prompt({
        type: "list",
        name: "orden",
        mesagge: "¿Que quiere hacer?",
        choices: ["Mostrar Disponibles", "Filtrar", "Sacar"]
    }).then((respuesta: { orden: string; }) => {
        switch (respuesta["orden"]) {

            case "Mostrar Disponibles":
                console.log("Estas son nuestras películas disponibles: " + "\n")
                let res: Movie[] = videotk.tofilterDisp()
                res.forEach(pelicula => console.log(pelicula.toTextVideo()));
                //  menuPrincipal();
                break;
            case "Filtrar":
                inquirer.prompt({
                    name: "filter",
                    message: "Usa una palabra clave"

                }).then((filtkey: string) => {
                    let res = videotk.tofilterGenre(filtkey["filter"])
                    res.forEach(element => { element.toTextVideo() })
                })
                //  menuPrincipal();
                break;

            case "Sacar":
                inquirer.prompt({
                    name: "sacar",
                    message: "Indica el título"

                }).then((titulo: string) => {
                    let dispo = videotk.tofilterDisp()
                    dispo.forEach(element => {
                        if (element.title == titulo) {
                            element.disp = false;
                        }
                    })
                    console.log("Que disfrute de " + titulo["sacar"])
                })
                //  menuPrincipal();
                break;
        }
    })
    
}
}