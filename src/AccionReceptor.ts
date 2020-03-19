

export class AccionReceptor{

    stateNumero: string;


    constructor() {
        this.stateNumero = "";
    }


    ActionNumero(numero: string){
        this.stateNumero = this.stateNumero.concat(numero);
    }

    
}

export default AccionReceptor;