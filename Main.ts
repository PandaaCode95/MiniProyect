import { Persona } from "./Persona";
import {Movie} from "./Movie"
let persona1 = new Persona("Alvaro",27,"No binario", 90,181, "Marrón","Verde","Iberico",false,"España",4,"Programador" )
let movie1 = new Movie("2Tontos y medio", 1998,"EEUU","Comedia")

movie1.toText();
persona1.toText();

