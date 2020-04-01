import AccionReceptor from "./AccionReceptor";

abstract class OperacionCommando{

    private _receptor: AccionReceptor

    constructor(accionReceptor: AccionReceptor){
        this.receptor = accionReceptor;
    }

    get receptor(): AccionReceptor {
        return this._receptor;
    }

    set receptor(receptor: AccionReceptor){
        this._receptor = receptor;
    }

    abstract execute();
}

export default OperacionCommando;