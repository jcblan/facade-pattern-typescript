import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class OchoCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("8");
    }
}


export default OchoCommand;