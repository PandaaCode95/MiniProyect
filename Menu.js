"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var Movie_1 = require("./Movie");
var Videoteka_1 = require("./Videoteka");
var inquirer = require('inquirer');
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());
exports.Menu = Menu;
var movie1 = new Movie_1.Movie("2Tontos y medio", 1998, "EEUU", "Comedia");
var movie2 = new Movie_1.Movie("Perdidos en Bollywood", 2015, "India", "Comedia");
var movie3 = new Movie_1.Movie("India y Juan", 2001, "UK", "Accion");
var movie4 = new Movie_1.Movie("The Scranton", 2005, "EEUU", "Drama");
var movie5 = new Movie_1.Movie("Vida de Michael Scott", 2007, "EEUU", "Comedia");
var movie6 = new Movie_1.Movie("Dunder Mifflin", 2012, "EEUU", "Terror");
var videotk = new Videoteka_1.Videoteca("PandaClub", [movie2, movie3, movie4, movie5, movie6]);
function sacarPeli() {
    inquirer.prompt({
        type: "list",
        name: "orden",
        mesagge: "¿Que quiere hacer?",
        choices: ["Mostrar Disponibles", "Filtrar", "Sacar"]
    }).then(function (respuesta) {
        switch (respuesta["orden"]) {
            case "Mostrar Disponibles":
                console.log("Estas son nuestras películas disponibles: " + "\n");
                var res = videotk.tofilterDisp();
                res.forEach(function (pelicula) { return console.log(pelicula.toTextVideo()); });
                //  menuPrincipal();
                break;
            case "Filtrar":
                inquirer.prompt({
                    name: "filter",
                    message: "Usa una palabra clave"
                }).then(function (filtkey) {
                    var res = videotk.tofilterGenre(filtkey["filter"]);
                    res.forEach(function (element) { element.toTextVideo(); });
                });
                //  menuPrincipal();
                break;
            case "Sacar":
                inquirer.prompt({
                    name: "sacar",
                    message: "Indica el título"
                }).then(function (titulo) {
                    var dispo = videotk.tofilterDisp();
                    dispo.forEach(function (element) {
                        if (element.title == titulo) {
                            element.disp = false;
                        }
                    });
                    console.log("Que disfrute de " + titulo["sacar"]);
                });
                //  menuPrincipal();
                break;
        }
    });
}
