import { Component } from '@angular/core';
// Importamos interface
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
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
      image: 'https://i.pinimg.com/originals/d3/f0/e4/d3f0e4e5444798b065bde5d1e5d690ad.jpg',
      category: 'all'
    }, {
      name: 'El mejor ',
      price: 324,
      image: 'https://images2.alphacoders.com/936/936019.png',
    }, {
      name: 'El  juguete',
      price: 275,
      image: 'https://image.winudf.com/v2/image/Y29tLnNhZnluYW5hdHN1Lm5hbmF0c3Vfc2NyZWVuXzBfMTUzNjYwNjA3OF8wNDc/screen-0.jpg?fakeurl=1&type=.webp',
    }, {
      name: 'mejor juguete',
      price: 865,
      image: 'https://image.winudf.com/v2/image1/Y29tLmJlc3RXYWxscGFwZXJzLkhRd2FsbHBhcGVyX3NjcmVlbl8wXzE1ODY3NzU4MDdfMDQ0/screen-0.jpg?fakeurl=1&type=.webp',
    }, {
      name: 'El mejor juguete',
      price: 435,
      image: 'http://pm1.narvii.com/7001/acf4c5673eacc061bead26f3010c2cb9f9557fd4r1-674-982v2_uhq.jpg',
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
