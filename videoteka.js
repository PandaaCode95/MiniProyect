"use strict";
exports.__esModule = true;
exports.Videoteca = void 0;
var Videoteca = /** @class */ (function () {
    function Videoteca(name, films) {
        this.name = name;
        this.films = films;
    }
    Videoteca.prototype.toText = function () {
        var res = "";
        var arr = this.films;
        for (var atribute in arr) {
            if (typeof arr[atribute] == "string" || typeof arr[atribute] == "number" || typeof arr[atribute] == "boolean" || typeof arr[atribute] == "object") {
                res = res + arr[atribute].toTextVideo() + "\n";
            }
        }
        console.log(res);
    };
    Videoteca.prototype.addFilm = function (movie1) {
        this.films.push(movie1);
    };
    Videoteca.prototype.devuelto = function (titulo) {
        var devuelta = false;
        for (var i = 0; i < this.films.length; i++) {
            if (this.films[i].title == titulo) {
                this.films[i].disp = true;
                devuelta = true;
                console.log("La devolución ha sido completada, esperamos disfrutara de " + titulo);
            }
        }
        if (devuelta == false) {
            console.log("Losiento su película no se ha devuelto correctamente. \n Intentelo de nuevo.");
        }
    };
    //Filters
    Videoteca.prototype.tofilterGenre = function (filtro) {
        var filt = this.films.filter(function (att) { return att.genre == filtro; });
        return filt;
    };
    Videoteca.prototype.tofilterNacionality = function (filtro) {
        var filt = this.films.filter(function (att) { return att.nacionality == filtro; });
        return filt;
    };
    Videoteca.prototype.tofilterLanguage = function (filtro) {
        var filt = this.films.filter(function (att) { return att.language == filtro; });
        return filt;
    };
    Videoteca.prototype.tofilterDirector = function (filtro) {
        var filt = this.films.filter(function (att) { return att.director == filtro; });
        return filt;
    };
    //Disponibles
    Videoteca.prototype.tofilterDisp = function () {
        var filt = this.films.filter(function (att) { return att.disp == true; });
        return filt;
    };
    Videoteca.prototype.tofilterNoDisp = function () {
        var filt = this.films.filter(function (att) { return att.disp == false; });
        return filt;
    };
    return Videoteca;
}());
exports.Videoteca = Videoteca;
