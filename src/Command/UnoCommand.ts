import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class UnoCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("1");
    }
}


export default UnoCommand;