
class Serie implements Entregable{
    //ATRIBUTOS.
        private titulo : string = '';
        private numTemporadas : number = 0;
        public entregado : boolean = false;
        private genero : string = '';
        private creador : string = '';
    //CONSTRUCTOR.
        constructor(newTitulo : string = '', newCreador : string = '') {
            this.titulo = newTitulo;
            this.creador = newCreador;
        }
    //MÉTODOS.
        //GET.
            getTitulo() : string{
                return this.titulo;
            }

            getNumTemporadas() : number{
                return this.numTemporadas;
            }

            getGenero() : string{
                return this.genero;
            }

            getCreador() : string{
                return this.creador;
            }
        //SET.
            setTitulo(valor : string) : void{
                this.titulo = valor;
            }

            setNumTemporadas(valor : number) : void{
                this.numTemporadas = valor;
            }

            setGenero(valor : string) : void{
                this.genero = valor;
            }

            setCreador(valor : string) : void{
                this.creador = valor;
            }
        //TOSTRING.
            mostrarSerie(){
                console.log(`Título: ${this.titulo}, Número de temporadas: ${this.numTemporadas}, Genero: ${this.genero}, Creador: ${this.creador}`);
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

            compareTo(a : Serie): void {
                if(this.numTemporadas > a.numTemporadas){
                    console.log(`La serie: ${this.titulo} dura más que ${a.titulo}`);
                }else if(this.numTemporadas < a.numTemporadas){
                    console.log(`La serie: ${a.titulo} dura más que ${this.titulo}`);
                }else{
                    console.log("Las dos series duran los mismo.")
                }
            }
}