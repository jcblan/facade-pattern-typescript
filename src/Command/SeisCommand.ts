import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class SeisCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("6");
    }
}


export default SeisCommand;