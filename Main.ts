
import { Persona } from "./Persona";
import { Movie } from "./Movie"
import { Videoteca } from "./Videoteka";
let ps = require("prompt-sync")();
let figlet = require("figlet");

let movie1 = new Movie("2Tontos y medio", 1998, "EEUU", "Comedia")
let movie2 = new Movie("Perdidos en Bollywood", 2015, "India", "Comedia")
let movie3 = new Movie("India y Juan", 2001, "UK", "Accion")
let movie4 = new Movie("The Scranton", 2005, "EEUU", "Drama")
let movie5 = new Movie("Vida de Michael Scott", 2007, "EEUU", "Comedia")
let movie6 = new Movie("Dunder Mifflin", 2012, "EEUU", "Terror")

let videotk = new Videoteca("PandaClub", [movie1, movie2, movie3, movie4, movie5, movie6])

movie6.disp = false;

// let persona1 = new Persona("Alvaro",27,"No binario", 90,181, "Marrón","Verde","Iberico",false,"España",4,"Programador")
// movie1.toText();
// persona1.toText();


menuPrincipal(videotk);


function menuPrincipal(videotk: Videoteca): void {

    let salir = false;
    while (salir == false) {

        // console.log(figlet.textSync("Pandaa´sClub", 'Standard'))
        panda();
        console.log("¿Que quiere hacer? Indica el número de tu opción" + "\n" + "1.Sacar una película" + "\n" +
            "2.Entregar una película" + "\n" + "3.Dar de alta una película" + "\n" + "4.Salir de la app" + "\n");

        let opt = ps("Introduce numero:")


        switch (opt) {

            case "1":
                // "Sacar una película"
                sacarPeli(videotk);
                break;

            case "2":
                // "Entregar una película"
                entrega(videotk);
                break;

            case "3":
                // "Dar de alta una película"
                nuevaPeli(videotk);
                break;

            case "4":
                // "Salir de la app"
                console.log("Gracias por formar parte de: ")
                panda();
                salir = true;
                break;

            default:
                console.log("No introduciste una opción correcta ")
                break;

        }
    }
}


//Calling Functions


function sacarPeli(videotk): void {
    console.clear();
    let volver = false;
    while (volver == false) {
        console.log("¿Que quiere hacer? Indica el numero de tu opción" + "\n" +
            "1.Mostras películas disponibles" + "\n" + "2.Filtrar nuestras películas" + "\n" +
            "3.Sacar una película" + "\n" + "4.Volver al menú principal" + "\n");
        let opt2 = ps("Introduce un número: ")


        switch (opt2) {

            case "1":
                // "Mostrar Disponibles"
                mostrarDisp(videotk);
                break;

            case "2":
                // "Filtrar"
                filter(videotk);
                break;

            case "3":
                // "Sacar"
                sacar(videotk);
                break;

            case "4":
                // Volver al menú anterior
                volver = true;
                break;
        }
    }

}
function sacar(videotk): void {
    console.clear();
    let opt2: string = ps("Indica el genero que quieres filtrar: ")
    let res = videotk.tofilterDisp()
    res.forEach(element => { if (element.title == opt2) { element.disp = false } })
}
function filter(videotk): void {
    console.clear();
    let opt2: string = ps("Indica el genero que quieres filtrar: ")
    //aqui iba a meter otro swicth case, pero por falta de tiempo lo dejare con uno solo, aunque tenga los metodos creados.
    let res = videotk.tofilterGenre(opt2)
    res.forEach(element => { element.toTextVideo() })

}
function entrega(videotk: Videoteca): void {
    console.clear();
    let titulo = ps("Indica el título de la película: ")
    videotk.devuelto(titulo);
    ps("Pulse intro para ver nuestro catálogo de películas disponible ")
    // console.log("Este es nuestro catálogo actualizado de peliculas disponibles: ")
    mostrarDisp(videotk);
    ps("Pulse intro para continuar. ")
    // let res = videotk.tofilterDisp()
    // res.forEach(pelicula=>console.log(pelicula.toTextVideo()))
}
function nuevaPeli(videotk): void {
    console.clear();
    let user: string = "Pandaaclub"
    let pw: string = "panda123"
    let userC: string = ps("Introduce tu usuario: ");
    let pwC: string = ps("Introduce la contraseña: ", { echo: "*" })


    if (user == userC && pw == pwC) {

        console.log("Hola Maestro 🐼, ¿traes nuevas películas para mi coleccion?")
        let title: string = ps("Introduce el título: ");
        let releaseYear: number = ps("Introduce el año de lanzamiento: ");
        let nacionality: string = ps("Introduce el país de orígen de la película: ")
        let genre: string = ps("Introduce el género: ")
        let pel = new Movie(title, releaseYear, nacionality, genre)
        videotk.addFilm(pel)
        videotk.toText()

    } else {
        console.log("Mi maestro nunca se equivocaría. ")
    }
}
function mostrarDisp(videotk): void {
    console.clear();
    console.log("Estas son nuestras películas disponibles: " + "\n")
    let res: Movie[] = videotk.tofilterDisp()
    res.forEach(pelicula => console.log(pelicula.toTextVideo()));
}
async function panda() {
    await console.log(figlet.textSync("Pandaa´sClub", 'Standard'))
}

