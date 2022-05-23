import { Movie } from "./Movie"
const fs = require('fs')
export class Videoteca{
    
    public name:string
    public films:Movie[]
    constructor(name:string,films:Movie[]){
        this.name=name;
        this.films=films;

       
}
public toText():void{
    let res: string = ""
    let arr=this.films;
    for (let atribute in arr) {
        if (typeof arr[atribute] == "string" || typeof arr[atribute] == "number" || typeof arr[atribute] == "boolean" || typeof arr[atribute] == "object") {
            res = res + arr[atribute].toTextVideo() + "\n"
        }
    } console.log(res)
}
addFilm(movie1:Movie):void{
    this.films.push(movie1);
}
devuelto(titulo:string){
  let devuelta:boolean = false;
  for(let i = 0 ; i<this.films.length;i++){
    if(this.films[i].title==titulo){
      this.films[i].disp=true;
      devuelta = true;
      console.log("La devolución ha sido completada, esperamos disfrutara de " + titulo)
    }}
    if(devuelta==false){
      console.log("Losiento su película no se ha devuelto correctamente. \n Intentelo de nuevo.")
    }
  }
//Filters
tofilterGenre(filtro:string):Movie[]{
  let filt:Movie[] =  this.films.filter(att=> att.genre==filtro)
  return filt;
}
tofilterNacionality(filtro:string):Movie[]{
  let filt:Movie[] =  this.films.filter(att=> att.nacionality==filtro)
  return filt;
}
tofilterLanguage(filtro:string):Movie[]{
  let filt:Movie[] =  this.films.filter(att=> att.language==filtro)
  return filt;
}
tofilterDirector(filtro:string):Movie[]{
  let filt:Movie[] =  this.films.filter(att=> att.director==filtro)
  return filt;
}
//Disponibles
tofilterDisp():Movie[]{
    let filt:Movie[] =  this.films.filter(att=> att.disp==true)
    return filt;
  }
tofilterNoDisp():Movie[]{
    let filt:Movie[] =  this.films.filter(att=> att.disp==false)
    return filt;
  }

//IMBD
writeJSON(name:string):JSON{

    let videotk = JSON.stringify(this)
    return fs.writeFileSync(name, videotk)

  }

instanciaImbd(name:string):Videoteca{

    fs.readFileSync(name);
    for(let value in (JSON.parse(fs.readFileSync(name)))){
    return (JSON.parse(fs.readFileSync(name)))[value]
    }
  }
  
}


