import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class NueveCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("9");
    }
}


export default NueveCommand;