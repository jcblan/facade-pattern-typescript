import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class SieteCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("7");
    }
}


export default SieteCommand;