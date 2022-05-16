"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.toText = function () {
        var res = "";
        for (var atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
                res = res + atribute + ":  " + this[atribute] + "\n";
            }
        }
        console.log(res);
    };
    return Movie;
}());
exports.Movie = Movie;
