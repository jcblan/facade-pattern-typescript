import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class CincoCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("5");
    }
}


export default CincoCommand;