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
    compareTo() {
    }
}
