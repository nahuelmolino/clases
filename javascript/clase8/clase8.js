class Person {    // Clase Padre
    
  static contadorPersonas = 0; // Atributo estatico.
  //email = 'Valor default email'// Atributo no estatico.
  static get MAX_OBJ(){
      return 5;// Este metodo simula una constante
  }
    constructor(nombre, apellido) {
      this._nombre = nombre; // Tener en cuenta que inicializamos con el _ para que no sea igual al del método get.
      this._apellido = apellido;     
      
        if(Person.contadorPersonas< Person.MAX_OBJ){
          this.idPersona= ++ Person.contadorPersonas;
        }
        else{
          console.log('Se ha superado el maximo de objetos permitidos')
        }
      //console.log('se incrementa el contador: ' + Person.contadorObjetosPersona);
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get apellido() {
      return this._apellido; // Inicializamos el método get para apellido
    }
  
    set apellido(apellido) {
      this._apellido = apellido; // Inicializamos el método get para apellido
    }
  
    nombreCompleto() {
      //metodo para devolver el nombre.
      return this.idPersona + ' '+ this._nombre + " " + this._apellido; // Devolvemos el nombre y el apellido separado con un espacio.
    }
  
    //Sobreescribiendo el método de la clase padre (Object)
    toString() {
      //Devuelve un string
      //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
      //El metodo que se ejeuta depende si es una referencia de tipo padre o hija
      return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludar desde método static')
    }

    static saludar2(Person){
        console.log(Person.nombre + ' '+ Person.apellido);
    }
  }
  
  let personOne = new Person("Nahuel", "Molino");
  console.log(personOne.nombre);
  personOne.nombre = "Danilo";
  console.log(personOne.nombre);
  //console.log(personOne);
  let personTwo = new Person("Ulises", "Sánchez");
  console.log(personTwo.nombre);
  personTwo.nombre = "Agustin";
  console.log(personTwo.nombre);
  //console.log(personaTwo);
  
  // A PARTIR DE ACÁ MI PARTE:
  personOne.apellido = "PietroPaolo"; //Mediante el set cambiamos el apellido y luego lo mostramos por consola.
  console.log(personOne.apellido);
  
  personTwo.apellido = "Lorca"; //Mediante el set cambiamos el apellido y luego lo mostramos por consola.
  console.log(personTwo.apellido);
  
  class Empleado extends Person {
    // Clase Hija
    constructor(nombre, apellido, departamento) {
      //Tener en cuenta que hay que llamar al constructor de la clase padre y sus parámetros.
      super(nombre, apellido);
      this.departamento = departamento;
    }
  
    get departamento() {
      return this._departamento;
    }
  
    set departamento(departamento) {
      this._departamento = departamento;
    }
  
    //sobreescritura
  
    nombreCompleto() {
      return super.nombreCompleto() + " " + this._departamento;
    }
  }
  
  let empleado1 = new Empleado("Lionel Andres", "Messi", "Jugador Profesional");
  console.log(empleado1); // Mostramos por consola el objeto empleado 1.
  console.log(empleado1.nombre); // Mostramos solo el nombre del objeto empleado 1
  console.log(empleado1.nombreCompleto());
  
  //Object.prototype.toString MANERA DE ACCEDER A ATRIBUTOS Y METODOS DE UN OBJETO
  console.log(empleado1.toString());
  console.log(personOne.toString());

  //personOne.saludar(); no se utiliza desde el objeto.
  Person.saludar();
Person.saludar2(personOne);
Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(personOne.contadorObjetosPersona);
console.log(Person.contadorObjetosPersona)
console.log(Empleado.contadorObjetosPersona)

//Atributo no estatico.
console.log(personOne.email)
console.log(empleado1.email)
//console.log(Person.email) No se puede acceder desde la clase
console.log(personOne.toString());
console.log(personTwo.toString());
console.log(empleado1.toString());
console.log(Person.contadorPersonas)
let personaTree = new Person('Mia', 'Kalifa')
console.log(personaTree.toString());
console.log(Person.contadorPersonas)

console.log(Person.MAX_OBJ)
Person.MAX_OBJ=10// No se puede modificar, ni alterar.

console.log(Person.MAX_OBJ)

let personaFour = new Person('Juan', 'Roman');
console.log(personaFour.toString())

let personaFive = new Person('Carlos', 'Tevez');
console.log(personaFive.toString())
