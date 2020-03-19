

export class AccionReceptor{

    private _stateNumero : string;


    constructor() {
        this.stateNumero = "";
    }

    get stateNumero(): string {
        return this._stateNumero;
    }

    set stateNumero(estado: string){
        this._stateNumero = estado;
    }

    ActionNumero(numero: string){
        this.stateNumero = this.stateNumero.concat(numero);
    }

    
}

export default AccionReceptor;