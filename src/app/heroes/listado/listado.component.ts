import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  borrarHeroe() {
    console.log("borrando");
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || '';
    console.log(heroeBorrado);
  }
}
