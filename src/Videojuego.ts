
class Videojuego implements Entregable{
    //ATRIBUTOS.

        private titulo : string;
        private horasEstimadas : number;
        public entregado : boolean = false;
        private genero : string;
        private compañia : string;
    //CONSTRUCTOR.
        constructor(newTitulo : string = '', newHorasEstimadas : number = 10, newGenero : string = '', newCompañia : string = '') {
            this.titulo = newTitulo;
            this.horasEstimadas = newHorasEstimadas;
            this.genero = newGenero;
            this.compañia = newCompañia;
        }
    //MÉTODOS.
        //GET.
            getTitulo() : string{
                return this.titulo;
            }

            getHorasEstimadas() : number{
                return this.horasEstimadas;
            }

            getGenero() : string{
                return this.genero;
            }

            getCompañia() : string{
                return this.compañia;
            }
        //SET.
            setTitulo(valor : string) : void{
                this.titulo = valor;
            }

            setHorasEstimadas(valor : number) : void{
                this.horasEstimadas = valor;
            }

            setGenero(valor : string) : void{
                this.genero = valor;
            }

            setCompañia(valor : string) : void{
                this.compañia = valor;
            }
        //TOSTRING.
            mostrarVideojuego(){
                console.log(`Título: ${this.titulo}, Horas estimadas: ${this.horasEstimadas}, Genero: ${this.genero}, Compañía: ${this.compañia}`);
            }
        //INTERFACE.
            entregar(): void {
                this.entregado = true;
            }
    
            devolver(): void {
                this.entregado = false;
            }
    
            isEntregado(): boolean {
                return this.entregado;
            }
    
            compareTo(a : Videojuego): void {
                if(this.horasEstimadas > a.horasEstimadas){
                    console.log(`El videojuego: ${this.titulo} dura más que ${a.titulo}`);
                }else if(this.horasEstimadas < a.horasEstimadas){
                    console.log(`El videojuego: ${a.titulo} dura más que ${this.titulo}`);
                }else{
                    console.log("Los dos videojuegos duran los mismo.")
                }
            }
}