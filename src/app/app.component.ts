import { Component } from '@angular/core';

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
}
