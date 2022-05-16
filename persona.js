"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Persona.prototype.toText = function () {
        var res = "";
        for (var atribute in this) {
            if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
                res = res + atribute + ":  " + this[atribute] + "\n";
            }
        }
        console.log(res);
    };
    return Persona;
}());
exports.Persona = Persona;
