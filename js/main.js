"use strict";
// • Por último, indica el Videojuego que tiene más horas estimadas y la serie con mas temporadas. Muestralos en pantalla con toda su información (usa el método toString()). 
let ser1 = new Serie('Juego de tronos', 'HBO');
ser1.setNumTemporadas(8);
ser1.entregar();
let ser2 = new Serie('The Witcher', 'Netflix');
ser1.setNumTemporadas(3);
let ser3 = new Serie('Umbrella Academy', 'Netflix');
ser1.setNumTemporadas(4);
let ser4 = new Serie('La rueda del tiempo', 'HBO');
ser1.setNumTemporadas(3);
let ser5 = new Serie('The Walking Dead', 'AMC');
ser5.setNumTemporadas(11);
ser5.entregar();
let arraySeries = [ser1, ser2, ser3, ser4, ser5];
let vid1 = new Videojuego('Zelda: Tears of the Kingdom', 58, 'RPG', 'Nintendo');
vid1.entregar();
let vid2 = new Videojuego('Final Fantasy X', 46, 'JRPG', 'Square');
vid2.entregar();
let vid3 = new Videojuego('Shadow of the Collosus', 7, 'Acción/Aventura', 'Bluepoint Games');
let vid4 = new Videojuego('Dark Souls', 29, 'RPG', 'From Software');
vid4.entregar();
let vid5 = new Videojuego('Thymesia', 6, 'RPG', 'OverBorder Studio');
let arrayVideojuego = [vid1, vid2, vid3, vid4, vid5];
//CONTAR SERIES ENTREGADOS
let contadorSerie = 0;
for (let i = 0; i < arraySeries.length; i++) {
    if (arraySeries[i].entregado === true) {
        contadorSerie = contadorSerie + 1;
    }
}
console.log(`La cantidad de series entregadas es de: ${contadorSerie}`);
//CONTAR VIDEOJUEGOS ENTREGADOS
let contadorVideojuegos = 0;
for (let i = 0; i < arrayVideojuego.length; i++) {
    if (arrayVideojuego[i].entregado === true) {
        contadorVideojuegos = contadorVideojuegos + 1;
    }
}
console.log(`La cantidad de videojuegos entregados es de: ${contadorVideojuegos}`);
//CONTAR NÚMERO DE TEMPORADAS.
let contadorTemporadas = arraySeries[0];
for (let i = 1; i < arraySeries.length; i++) {
    if (contadorTemporadas.getNumTemporadas() < arraySeries[i].getNumTemporadas()) {
        contadorTemporadas = arraySeries[i];
    }
}
console.log(`La serie con mayor número de temporadas es: ${contadorTemporadas.getTitulo()}`);
//CONTAR NÚMERO DE HORAS.
let contadorHoras = arrayVideojuego[0];
for (let i = 1; i < arrayVideojuego.length; i++) {
    if (contadorHoras.getHorasEstimadas() < arrayVideojuego[i].getHorasEstimadas()) {
        contadorHoras = arrayVideojuego[i];
    }
}
console.log(`El videojuego con mayor longitud es: ${contadorHoras.getTitulo()}`);
