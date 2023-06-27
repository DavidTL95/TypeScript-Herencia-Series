"use strict";
class Videojuego {
    //CONSTRUCTOR.
    constructor(newTitulo = '', newHorasEstimadas = 10, newGenero = '', newCompañia = '') {
        this.entregado = false;
        this.titulo = newTitulo;
        this.horasEstimadas = newHorasEstimadas;
        this.genero = newGenero;
        this.compañia = newCompañia;
    }
    //MÉTODOS.
    //GET.
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompañia() {
        return this.compañia;
    }
    //SET.
    setTitulo(valor) {
        this.titulo = valor;
    }
    setHorasEstimadas(valor) {
        this.horasEstimadas = valor;
    }
    setGenero(valor) {
        this.genero = valor;
    }
    setCompañia(valor) {
        this.compañia = valor;
    }
    //TOSTRING.
    mostrarVideojuego() {
        console.log(`Título: ${this.titulo}, Horas estimadas: ${this.horasEstimadas}, Genero: ${this.genero}, Compañía: ${this.compañia}`);
    }
    //INTERFACE.
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        if (this.horasEstimadas > a.horasEstimadas) {
            console.log(`El videojuego: ${this.titulo} dura más que ${a.titulo}`);
        }
        else if (this.horasEstimadas < a.horasEstimadas) {
            console.log(`El videojuego: ${a.titulo} dura más que ${this.titulo}`);
        }
        else {
            console.log("Los dos videojuegos duran los mismo.");
        }
    }
}
