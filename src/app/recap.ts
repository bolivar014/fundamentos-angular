// Tipado de tipo de campos
const username: string  | number = 'bolivar014';

// Creación de función
const sum = (a: number, b: number) => {
  return a + b;
}

// Invocamos función
sum(1, 3);

class Person {
    // private age: number;
    // lastName: string;

    // constructor(age: number, lastName: string) {
    //   this.age = age;
    //   this.lastName = lastName;
    // }

    //
    constructor(private age: number, public lastName: string) {};
}

// Instanciamos el constructor
const camilo = new Person(15, "Valdes");

camilo.age;
camilo.lastName;
