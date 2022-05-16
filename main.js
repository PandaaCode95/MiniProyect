"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Movie_1 = require("./Movie");
var persona1 = new Persona_1.Persona("Alvaro", 27, "No binario", 90, 181, "Marrón", "Verde", "Iberico", false, "España", 4, "Programador");
var movie1 = new Movie_1.Movie("2Tontos y medio", 1998, "EEUU", "Comedia");
movie1.toText();
persona1.toText();
