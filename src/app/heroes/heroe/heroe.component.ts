import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string='Ironman';
    edad:number=45;
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }
    CambiarNombre():void{
        this.nombre='Spiderman';
    }
    CambiarEdad():void{
        this.edad=30;
    }
}