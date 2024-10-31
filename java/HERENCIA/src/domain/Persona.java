
package domain;

/**
 *
 * @author Programador
 */
public class Persona {
  //lo private no se hereda a las clases hijas.
    //el modificador de acceso protected esta pensado para la herencia.
    //Atributos de herencia
    private  String nombre;
    private char genero;
    private int edad;
    private String direccion;
    
    //Constructor vacio: este es para crear objetos sin necesidad de inicializar  los atributos de la clase.
    
    public Persona (String nombre){//Constructor 
        this.nombre = nombre;
    }

    public Persona(String nombre, char genero, int edad, String direccion) {
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.direccion = direccion;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public char getGenero() {
        return this.genero;
    }

    public void setGenero(char genero) {
        this.genero = genero;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    //Esta reescribiendo lo que es el toSTring()
    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", genero=" + genero + ", edad=" + edad + ", direccion=" + direccion + '}';
    }
    
    
    
}
