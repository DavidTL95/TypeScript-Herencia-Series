"use strict";
class Serie {
    //CONSTRUCTOR.
    constructor(newTitulo = '', newCreador = '') {
        //ATRIBUTOS.
        this.titulo = '';
        this.numTemporadas = 0;
        this.entregado = false;
        this.genero = '';
        this.creador = '';
        this.titulo = newTitulo;
        this.creador = newCreador;
    }
    //MÉTODOS.
    //GET.
    getTitulo() {
        return this.titulo;
    }
    getNumTemporadas() {
        return this.numTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    //SET.
    setTitulo(valor) {
        this.titulo = valor;
    }
    setNumTemporadas(valor) {
        this.numTemporadas = valor;
    }
    setGenero(valor) {
        this.genero = valor;
    }
    setCreador(valor) {
        this.creador = valor;
    }
    //TOSTRING.
    mostrarSerie() {
        console.log(`Título: ${this.titulo}, Número de temporadas: ${this.numTemporadas}, Genero: ${this.genero}, Creador: ${this.creador}`);
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
        if (this.numTemporadas > a.numTemporadas) {
            console.log(`La serie: ${this.titulo} dura más que ${a.titulo}`);
        }
        else if (this.numTemporadas < a.numTemporadas) {
            console.log(`La serie: ${a.titulo} dura más que ${this.titulo}`);
        }
        else {
            console.log("Las dos series duran los mismo.");
        }
    }
}
