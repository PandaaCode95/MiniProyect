"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Videoteka_1 = require("./Videoteka");
var ps = require("prompt-sync")();
var figlet = require("figlet");
var movie1 = new Movie_1.Movie("2Tontos y medio", 1998, "EEUU", "Comedia");
var movie2 = new Movie_1.Movie("Perdidos en Bollywood", 2015, "India", "Comedia");
var movie3 = new Movie_1.Movie("India y Juan", 2001, "UK", "Accion");
var movie4 = new Movie_1.Movie("The Scranton", 2005, "EEUU", "Drama");
var movie5 = new Movie_1.Movie("Vida de Michael Scott", 2007, "EEUU", "Comedia");
var movie6 = new Movie_1.Movie("Dunder Mifflin", 2012, "EEUU", "Terror");
var videotk = new Videoteka_1.Videoteca("PandaClub", [movie1, movie2, movie3, movie4, movie5, movie6]);
movie6.disp = false;
// let persona1 = new Persona("Alvaro",27,"No binario", 90,181, "Marrón","Verde","Iberico",false,"España",4,"Programador")
// movie1.toText();
// persona1.toText();
menuPrincipal(videotk);
function menuPrincipal(videotk) {
    var salir = false;
    while (salir == false) {
        // console.log(figlet.textSync("Pandaa´sClub", 'Standard'))
        panda();
        console.log("¿Que quiere hacer? Indica el número de tu opción" + "\n" + "1.Sacar una película" + "\n" +
            "2.Entregar una película" + "\n" + "3.Dar de alta una película" + "\n" + "4.Salir de la app" + "\n");
        var opt = ps("Introduce numero:");
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
                console.log("Gracias por formar parte de: ");
                panda();
                salir = true;
                break;
            default:
                console.log("No introduciste una opción correcta ");
                break;
        }
    }
}
//Calling Functions
function sacarPeli(videotk) {
    console.clear();
    var volver = false;
    while (volver == false) {
        console.log("¿Que quiere hacer? Indica el numero de tu opción" + "\n" +
            "1.Mostras películas disponibles" + "\n" + "2.Filtrar nuestras películas" + "\n" +
            "3.Sacar una película" + "\n" + "4.Volver al menú principal" + "\n");
        var opt2 = ps("Introduce un número: ");
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
function sacar(videotk) {
    console.clear();
    var opt2 = ps("Indica el genero que quieres filtrar: ");
    var res = videotk.tofilterDisp();
    res.forEach(function (element) { if (element.title == opt2) {
        element.disp = false;
    } });
}
function filter(videotk) {
    console.clear();
    var opt2 = ps("Indica el genero que quieres filtrar: ");
    var res = videotk.tofilterGenre(opt2);
    res.forEach(function (element) { element.toTextVideo(); });
}
function entrega(videotk) {
    console.clear();
    var titulo = ps("Indica el título de la película: ");
    videotk.devuelto(titulo);
    ps("Pulse intro para ver nuestro catálogo de películas disponible ");
    // console.log("Este es nuestro catálogo actualizado de peliculas disponibles: ")
    mostrarDisp(videotk);
    ps("Pulse intro para continuar. ");
    // let res = videotk.tofilterDisp()
    // res.forEach(pelicula=>console.log(pelicula.toTextVideo()))
}
function nuevaPeli(videotk) {
    console.clear();
    var user = "Pandaaclub";
    var pw = "panda123";
    var userC = ps("Introduce tu usuario: ");
    var pwC = ps("Introduce la contraseña: ", { echo: "*" });
    if (user == userC && pw == pwC) {
        console.log("Hola Maestro 🐼, ¿traes nuevas películas para mi coleccion?");
        var title = ps("Introduce el título: ");
        var releaseYear = ps("Introduce el año de lanzamiento: ");
        var nacionality = ps("Introduce el país de orígen de la película: ");
        var genre = ps("Introduce el género: ");
        var pel = new Movie_1.Movie(title, releaseYear, nacionality, genre);
        videotk.addFilm(pel);
        videotk.toText();
    }
    else {
        console.log("Mi maestro nunca se equivocaría. ");
    }
}
function mostrarDisp(videotk) {
    console.clear();
    console.log("Estas son nuestras películas disponibles: " + "\n");
    var res = videotk.tofilterDisp();
    res.forEach(function (pelicula) { return console.log(pelicula.toTextVideo()); });
}
function panda() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, console.log(figlet.textSync("Pandaa´sClub", 'Standard'))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
