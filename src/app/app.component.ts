import { Component } from '@angular/core';
// Importamos interface
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Camilo';
  age = 28;
  img = 'https://i.pinimg.com/736x/8a/9d/1b/8a9d1bf56fd1423d7b38401a269eefa1.jpg';
  btnDisabled = true;
  person = {
    name: 'Camilo',
    age: 28,
    avatar: 'https://i.pinimg.com/736x/8a/9d/1b/8a9d1bf56fd1423d7b38401a269eefa1.jpg',
  }

  // Inicializo array
  names: string[] = [
    'juan',
    'jose',
    'daniel',
    'luis'
  ];

  newName = "";

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 234,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/books.jpg',
      category: 'all'
    }, {
      name: 'El mejor ',
      price: 324,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/glasses.jpg',
    }, {
      name: 'El  juguete',
      price: 275,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/house.jpg',
    }, {
      name: 'mejor juguete',
      price: 865,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/toy.jpg',
    }, {
      name: 'El mejor juguete',
      price: 435,
      image: 'https://github.com/platzi/angular-fundamentals/blob/10-step/src/assets/images/album.jpg',
    }
  ]
  // Evento
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  // Evento para incrementar edad...
  increaseAge() {
    this.person.age += 1;
  }

  // Evento Scroll
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  // Evento change
  changeName(event: Event) {
    const element  = event.target as HTMLInputElement;
    this.person.name = element.value;
    console.log(element.value);
  }

  // evento para agregar nombre
  addName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  // Evento para eliminación de objeto en array
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
